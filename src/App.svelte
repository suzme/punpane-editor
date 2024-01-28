<script>
  import { fade } from 'svelte/transition'
  import { keys } from './keys.js'

  /**
   * 定数
   */
  const version = '20240129-0'
  const resolution = 3 * 64   // 分解能(1小節を何分割するか)
  const add_panel_delay = 100 // パネル追加時の遅延時間(同時押しと判定する時間[ms])

  const default_fix_measure = 0    // ラベルの小節番号のデフォルト値
  const default_begin_frame = 200  // 開始フレームのデフォルト値
  const default_bpm = 160          // BPMのデフォルト値

  const view_measure_nums = [1, 2, 4] // 1ページの小節数の選択肢

  // メッセージの背景色
  const message_colors = {
    success: '#99ccff',
    error: '#ffcccc',
    warning: '#ffffcc',
  }

  /**
   * 変数
   */
  let key_settings = {}                    // キー(18p,9t)ごとの設定
  const url_obj = new URL(document.location)
  const url_param_key = url_obj.searchParams.get('key')
  if (url_param_key && keys[url_param_key]) {
    key_settings = {...keys[url_param_key]}
    key_settings.key = url_param_key
  } else {
    key_settings = {...keys['18p']}
    key_settings.key = '18p'
  }

  let chart_num = 1                        // 譜面番号
  let cursor = 0                           // カーソル位置(resolution単位)
  let note_length = 16                     // n分音符(3連符は6,12,24で指定)
  let label_measures = [0]                 // ラベルの設定された小節番号
  let begin_frames = [default_begin_frame] // 開始フレーム(ラベルごと)
  let bpms = [default_bpm]                 // BPM(ラベルごと)
  let add_delay_timer = null;              // パネル追加後、カーソル移動を少し待つためのタイマーのID
  let message = ''                         // セーブ時などの表示メッセージ
  let message_color = message_colors.success

  let dragover_flag = false  // ファイルドラッグ中のときtrue

  // パネルのタイミングデータ(resolution単位)
  let panels_all = new Array(key_settings.panel_num).fill([])

  let panel_reverse         // パネル表示を反転
  let view_measure_num = 1  // 1ページに表示する小節数

  // 曲再生関連
  let play_begin_time   // 開始したときのcurrentTime
  let cursor_play = -1  // 再生カーソル位置
  let volume = 1        // 音量
  let playback_rate = 1 // 再生速度

  // WebAudioAPI関連
  const audio_context = new AudioContext()
  const audio_gain_node = audio_context.createGain()
  audio_gain_node.connect(audio_context.destination)
  let audio_buffer_node
  let audio_source_node
  let can_play = false    // 再生可能になったらtrue
  let is_playing = false  // 再生中のときtrue

  /**
   * リアクティブ
   */
  // 現在の小節/ページ番号(0始まり)
  $: measure = Math.floor(cursor / resolution)
  $: page = Math.floor(cursor / resolution / view_measure_num)

  // 現在の小節/ページに適用されるラベルの小節番号(仮。存在しない/最初のラベルより前の場合-Infinity)
  $: label_measure_ = Math.max(...label_measures.filter(label_measure => measure >= label_measure))
  $: page_label_measure_ = Math.max(...label_measures.filter(label_measure => page * view_measure_num >= label_measure))

  // 現在の小節/ページに適用されるラベルのindex
  $: label_index = label_measures.findIndex(value => value === label_measure_)
  $: page_label_index = label_measures.findIndex(value => value === page_label_measure_)

  // 現在の小節/ページに適用されるラベルの小節番号(最初のラベルより前の場合、最初のラベルを使用)
  $: label_measure = label_measures[label_index] ?? label_measures[0] ?? default_fix_measure
  $: page_label_measure = label_measures[page_label_index] ?? label_measures[0] ?? default_fix_measure

  // 現在の小節/ページに適用されるラベルの開始フレーム
  $: begin_frame = begin_frames[label_index] ?? begin_frames[0] ?? default_begin_frame
  $: page_begin_frame = begin_frames[page_label_index] ?? begin_frames[0] ?? default_begin_frame

  // 現在の小節/ページのBPM
  $: bpm = bpms[label_index] ?? bpms[0] ?? default_bpm
  $: page_bpm = bpms[page_label_index] ?? bpms[0] ?? default_bpm

  // カーソル位置のフレーム数
  $: cursor_frame = (cursor - label_measure * resolution) / resolution * 4 * 60 * 60 / bpm + begin_frame

  // パネルの表示色(カーソル位置に配置されているかどうかで色を変える)
  $: panel_color = panels_all.map(
    (panels, i) => panels.includes(cursor) ? key_settings.colors[key_settings.panel_color_def[i]] : key_settings.colors[0]
  )

  // 1ページのノート表示用
  // (小節内での相対値の配列の配列)
  $: page_notes = panels_all.map(
    panels => panels.map(
      // ページ先頭からの相対値に変換
      panel => panel - page * view_measure_num * resolution
    ).filter(
      // ページ内に絞り込み
      panel => panel >= 0 && panel < resolution * view_measure_num
    )
  )

  // カーソル前後のパネル表示用
  // (カーソル位置からの差の配列の配列)
  $: panels_shadow = panels_all.map(
    panels => panel_reverse ? 
      // リバース時(カーソルより後ろ)
      panels.map(panel => panel - cursor)
        .filter(panel => panel > 0 && panel <= 96) :
      // 通常時(カーソルより前)
      panels.map(panel => cursor - panel)
        .filter(panel => panel > 0 && panel <= 96)
  )

  // 罫線の表示位置(n分音符で変更)
  $: border_num = new Array(note_length * view_measure_num).fill(0).map((n, i) => resolution / note_length * i)

  // ページ内の途中の小節にラベルがある場合true(警告表示用)
  $: label_in_page_warning = label_measures.filter(
    label_measure =>  page * view_measure_num < label_measure && label_measure < (page + 1) * view_measure_num
  ).length > 0

  /**
   * メソッド
   */
  // カーソル移動
  const move_cursor = tick => {
    message = ''
    if (is_playing && Math.floor(tick / resolution) !== Math.floor(cursor / resolution)) {
      setTimeout(play, 0) // カーソル移動完了してから再生
    }
    cursor = tick
  }
  const cursor_previous = () => move_cursor(cursor - (3 * 64) / note_length)
  const cursor_next = () => move_cursor(cursor + (3 * 64) / note_length)
  const page_previous = () => move_cursor((page - 1) * view_measure_num * resolution)
  const page_next = () => move_cursor((page + 1) * view_measure_num * resolution)

  // 間隔変更
  const change_note_len = len => () => {
    message = ''
    note_length = len
    cursor = Math.floor(cursor / (resolution / len)) * (resolution / len)
  }

  // パネルの追加
  const add_panel = (panel_number, tick) => {
    panels_all[panel_number] = [...panels_all[panel_number], tick]
  }

  // パネルの削除
  const delete_panel = (panel_number, tick) => {
    panels_all[panel_number] = panels_all[panel_number].filter(frame => frame !== tick)
  }

  // パネル追加/削除
  const toggle_panel = panel_number => () => {
    message = ''
    if (panels_all[panel_number].includes(cursor)) {
      delete_panel(panel_number, cursor)
    } else {
      add_panel(panel_number, cursor)
    }

    // 追加時に少し待つ処理
    // パネルを置いたことが分かりやすくするためと、同時押し処理のため
    if (add_delay_timer === null) {
      add_delay_timer = setTimeout(() => {
        add_delay_timer = null
        cursor_next()
      }, add_panel_delay)
    }
  }

  // 1行削除
  const remove_line = () => {
    message = ''
    panels_all = panels_all.map(panels => panels.filter(frame => frame !== cursor))
  }

  // カーソルを戻して1行削除
  const backspace = () => {
    cursor_previous()
    remove_line()
  }

  // 新規作成
  const clear_data = () => {
    if (confirm('現在編集中のデータは失われます。よろしいですか？') === false) {
      return
    }

    panels_all = new Array(key_settings.panel_num).fill([])
    label_measures = []
    begin_frames = []
    bpms = []
    chart_num = 1
    cursor = 0
    message = ''
  }

  const copy_text = (text, success='クリップボードにコピーしました。') => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text)
      message = success
      message_color = message_colors.success
    } else {
      prompt('コピーして保存してください。', text)
    }
  }

  // セーブデータ作成
  const get_save_date = () => JSON.stringify({
      key: key_settings.key,
      panels: panels_all,
      label_measures: label_measures,
      begin_frames: begin_frames,
      bpms: bpms,
      resolution: resolution,
      chart_num: chart_num,
      editor_version: version,
      save_data_version: 1
    })

  // クリップボードにセーブデータを保存
  const save_clipboard = () => copy_text(get_save_date(), 'クリップボードにセーブデータをコピーしました。')

  // セーブデータ読み込み
  const load = text => {
    let save_data
  
    if (confirm('セーブデータを読み込むと現在編集中のデータは失われます。よろしいですか？') === false) {
      return
    }
  
    try {
      save_data = JSON.parse(text)
    } catch (e) {
      console.log(e)
      message = 'セーブデータの読み込みに失敗しました。'
      message_color = message_colors.error
      return
    }

    if (save_data.key) {
      key_settings = {...keys[save_data.key]}
      key_settings.key = save_data.key
    } else {
      key_settings = {...keys['18p']}
      key_settings.key = '18p'
    }

    cursor = 0
    panels_all = save_data.panels ?? new Array(key_settings.panel_num).fill([])
    label_measures = save_data.label_measures ?? []
    begin_frames = save_data.begin_frames ?? []
    bpms = save_data.bpms ?? []
    chart_num = save_data.chart_num
    message = 'セーブデータを読み込みました。'
  }

  // クリップボードから読み込み
  const load_clipboard = () => {
    if (navigator.clipboard) {
      navigator.clipboard.readText().then(text => load(text))
    } else {
      const save_data = prompt('セーブデータを貼り付けてください。')
      if (save_data && save_data !== '') {
        load(save_data)
      }
    }
  }

  // dosデータの作成
  const get_dos = () => 
    panels_all.map((panels, i) => `|${key_settings.dos_chara[i]}${chart_num !== 1 ? chart_num : ''}_data=`
      + [...panels.map(panel => {
        // パネルの置かれている小節番号(仮。存在しない/最初のラベルより前の場合-Infinity)
        const measure = Math.floor(panel / resolution)

        // パネルに適用されるラベルの小節番号
        const label_measure_ = Math.max(...label_measures.filter(label_measure => measure >= label_measure))

        // パネルに適用されるラベルのindex
        const label_index = label_measures.findIndex(value => value === label_measure_)

        // パネルに適用されるラベルの小節番号(最初のラベルより前の場合、最初のラベルを使用)
        const label_measure = label_measures[label_index] ?? label_measures[0] ?? default_fix_measure

        // 現在の小節に適用されるラベルの開始フレーム
        const begin_frame = begin_frames[label_index] ?? begin_frames[0] ?? default_begin_frame

        // 現在の小節のBPM
        const bpm = bpms[label_index] ?? bpms[0] ?? default_bpm

        // フレーム数を計算
        return Math.round((panel - label_measure * resolution) / resolution * 4 * 60 * 60 / bpm + begin_frame)
      })].sort().join(',')
    ).join('') + '|'

  // クリップボードにdosをコピー
  const save_dos_clipboard = () => copy_text(get_dos(), 'クリップボードにdosをコピーしました。')

  /**
   * 曲再生関連処理
   */

   // 再生中のアニメーション
  const play_animation_loop = () => {
    if (!is_playing) return
    cursor_play = ((audio_context.currentTime - play_begin_time) * bpm * playback_rate / 60 / 4 - 0.5) * resolution
    if (cursor_play > resolution * view_measure_num) {
      stop()
      play()
    }
    requestAnimationFrame(play_animation_loop)
  }

  // 再生開始
  const play = () => {
    if (is_playing) {
      stop()
    }
    if (can_play) {
      const fade_begin_frame = (page * view_measure_num - page_label_measure - 0.5) * 4 * 60 * 60 / page_bpm + page_begin_frame
      const fade_begin_time = (fade_begin_frame - 200) / 60
      const offset_time = fade_begin_time < 0 ? -fade_begin_time : 0
      audio_gain_node.gain.value = volume
      audio_source_node = audio_context.createBufferSource()
      audio_source_node.buffer = audio_buffer_node
      audio_source_node.playbackRate.value = playback_rate
      audio_source_node.connect(audio_gain_node)
      play_begin_time = audio_context.currentTime + offset_time
      audio_source_node.start(play_begin_time + offset_time, Math.max(fade_begin_time, 0))
      requestAnimationFrame(play_animation_loop)
      is_playing = true
    } else {
      if (audio_buffer_node) {
        message = '再生準備が未完了です。'
      } else {
        message = '音楽ファイルが入力されていません。'
      }
      message_color = message_colors.error
    }
  }

  // 再生停止
  const stop = () => {
    audio_source_node.stop()
    cursor_play = -1
    is_playing = false
  }

  // 再生のオンオフ
  const toggle_play = () => {
    if (is_playing) {
      stop()
    } else {
      play()
    }
  }

  const volume_change = () => {
    audio_gain_node.gain.value = volume
  }

  const playback_rate_change = () => {
    audio_source_node.playbackRate.value = playback_rate
    if (is_playing) {
      play()
    }
  }

  /**
   * イベント処理
  */
  // "この小節で設定変更"のチェック状態変化
  const fix_change = e => {
    message = ''
    if (e.target.checked) {
      // ラベルの追加
      label_measures = [...label_measures, measure]
      begin_frames = [...begin_frames, Math.round(cursor_frame)]
      bpms = [...bpms, bpm]
    } else {
      // ラベルの削除
      const delete_index = label_index
      label_measures = label_measures.filter((_, i) => delete_index !== i)
      begin_frames = begin_frames.filter((_, i) => delete_index !== i)
      bpms = bpms.filter((_, i) => delete_index !== i)
    }
  }

  // 開始フレームの変化
  const frame_change = e => {
    message = ''
    const value = e.target.value
    let frame

    try {
      frame = parseFloat(value)
    } catch(e) {
      // parseFloatに失敗したら元に戻す
      console.log(e)
      e.target.value = begin_frames[label_index]
      return
    }

    if (Number.isNaN(frame)) {
      // NaNのときは元に戻す
      e.target.value = begin_frames[label_index]
    } else {
      begin_frames[label_index] = frame
    }
  }

  // BPMの変化
  const bpm_change = e => {
    message = ''
    const value = e.target.value
    let bpm

    try {
      bpm = parseFloat(value)
    } catch(e) {
      // parseFloatに失敗したら元に戻す
      console.log(e)
      e.target.value = bpms[label_index]
      return
    }

    if (Number.isNaN(bpm) || bpm <= 0) {
      // NaNまたはBPMが0以下のときは元に戻す
      e.target.value = bpms[label_index]
    } else {
      bpms[label_index] = bpm
    }
  }

  // ドラッグ時
  const dragover = e => {
    e.preventDefault()
    dragover_flag = true
    message = ''
  }

  const dragleave = e => {
    e.preventDefault()
    dragover_flag = false
    message = ''
  }

  // ドロップ時
  const drop = e => {
    e.stopPropagation()
    e.preventDefault()
    dragover_flag = false
    message = ''

    if (!e.dataTransfer || !e.dataTransfer.files)  return
    const files = e.dataTransfer.files
    if (files.length === 0) return

    const file = files[0]
    if (file.type.match(/^audio/)) {
      // 音楽ファイルの読み込み
      can_play = false
      const reader = new FileReader()
      reader.onload = () => {
        audio_context.decodeAudioData(reader.result, decode_result => {
          audio_buffer_node = decode_result
          message = '音楽ファイルの読み込みが完了しました。'
          message_color = message_colors.success
          can_play = true
        })
      }

      reader.readAsArrayBuffer(file)
    } else if (file.type === 'text/plain') {
      const reader = new FileReader()
      reader.onload = () => {
        load(reader.result)
      }
      reader.readAsText(file)
    } else {
      message = '非対応のファイルタイプです(' + file.type + ')'
      message_color = message_colors.error
    }
  }

  /**
   * グローバルなイベント(キー/マウス操作)
  */
  // キー設定(修飾キーなし)
  const key_config = {
    'ArrowUp': cursor_previous,
    'ArrowDown': cursor_next,
    'ArrowLeft': page_previous,
    'ArrowRight': page_next,
    'KeyE': cursor_previous,
    'KeyD': cursor_next,
    'KeyS': page_previous,
    'KeyF': page_next,
    'KeyB': cursor_previous,
    'Space': cursor_next,
    'Digit1': change_note_len(4),
    'Digit2': change_note_len(8),
    'Digit3': change_note_len(16),
    'Digit4': change_note_len(12),
    'Digit5': change_note_len(24),
    'Digit6': change_note_len(48),
    'KeyR': change_note_len(32),
    'Delete': remove_line,
    'Backspace': backspace,
    'KeyR': () => panel_reverse = !panel_reverse,
    'Enter': toggle_play
  }

  key_settings.key_config.forEach((code, i) => key_config[code] = toggle_panel(i))

  // キー設定(Ctrl付き)
  const key_config_ctrl = {
  }

  // キーを押したとき
  const keydown = e => {
    if (e.target.type !== 'number') {
      const keyConfig_ = e.ctrlKey ? key_config_ctrl : key_config
      if (keyConfig_[e.code]) {
        keyConfig_[e.code]()
        e.preventDefault()
      }
    }
  }

  // マウスホイールが動いたとき
  const wheel = e => {
    if (e.deltaY > 0) {
      cursor_next()
    } else if (e.deltaY < 0) {
      cursor_previous()
    }
  }

  // ページ遷移の警告
  const before_unload = e => {
    e.preventDefault()
    e.returnValue = 'ページを移動してよろしいですか？現在編集中のデータは失われます。'
  }
</script>

<svelte:window
  on:beforeunload={before_unload}
  on:keydown={keydown}
  on:wheel={wheel}
  on:drop={drop}
  on:dragover={dragover}
  on:dragleave={dragleave}/>

<main>
  <div class="container"
    style:width={`${key_settings.note_width * key_settings.panel_num + 20 + key_settings.panel_width * 5}px`}
    class:dragover={dragover_flag}
    >
    <div>
      {measure + 1}小節目, {(cursor - measure * 192) / (resolution / note_length) + 1}/{note_length} ({Math.round(cursor_frame)}f)
    </div>
    <div class="main_input">
      <input type="checkbox" checked="{label_measure === measure}" on:change={fix_change} id="fix">
      <label for="fix">この小節で設定変更</label> |
      <label for="begin_frame">開始フレーム: </label>
      <input type="number" value="{begin_frame}" on:change={frame_change} id="begin_frame">
      <label for="bpm">BPM: </label>
      <input type="number" value="{bpm}" on:change={bpm_change} step="0.01" min="0.01" id="bpm"> |
      <input type="checkbox" bind:checked="{panel_reverse}" id="panel_reverse">
      <label for="panel_reverse" title="Rキー: カーソルより前のパネルを表示するか後のパネルを表示するかの切り替え">パネル表示を逆転</label><br>
      1ページの小節数
      <select bind:value={view_measure_num}>
        {#each view_measure_nums as num}
          <option {num}>{num}</option>
        {/each}
      </select>
    </div>
    <div class="main_buttons">
      <input type="button" value="4"  on:click={change_note_len(4)}  class:selected={note_length === 4 } title="1キー: カーソル移動間隔を4分に変更">
      <input type="button" value="8"  on:click={change_note_len(8)}  class:selected={note_length === 8 } title="2キー: カーソル移動間隔を8分に変更">
      <input type="button" value="16" on:click={change_note_len(16)} class:selected={note_length === 16} title="3キー: カーソル移動間隔を16分に変更">
      <input type="button" value="32" on:click={change_note_len(32)} class:selected={note_length === 32} title="Rキー: カーソル移動間隔を32分に変更">
      <input type="button" value="12" on:click={change_note_len(12)} class:selected={note_length === 12} title="4キー: カーソル移動間隔を12分(8分3連)に変更">
      <input type="button" value="24" on:click={change_note_len(24)} class:selected={note_length === 24} title="5キー: カーソル移動間隔を24分(16分3連)に変更">
      <input type="button" value="48" on:click={change_note_len(48)} class:selected={note_length === 48} title="6キー: カーソル移動間隔を48分(32分3連)に変更">
      <input type="button" value="←" on:click={page_previous} title="左矢印キー: 前のページに移動">
      <input type="button" value="↑" on:click={cursor_previous} title="上矢印/E/B: カーソルを上に移動">
      <input type="button" value="↓" on:click={cursor_next} title="下矢印/D/スペース: カーソルを下に移動">
      <input type="button" value="→" on:click={page_next} title="右矢印キー: 次のページに移動">
      <input type="button" value="BS" on:click={backspace} title="Backspace: カーソルを前に移動してパネルを削除">
      <input type="button" value="DEL" on:click={remove_line} title="Delete: カーソルのある行のパネルを削除">
      <input type="button" value="Enter" on:click={toggle_play} title="Enter: 曲再生の開始/停止">
    </div>
    <div class="punpane_editor"
      style:height="{resolution * 2 + 10}px">
      <!-- 右側: パネル表示部 -->
      <div class="panels" style={`left: ${key_settings.note_width * key_settings.panel_num + 20}px; width: ${key_settings.panel_width * 5}px;`}>
        {#each panels_all as panels, i}
          <!-- パネル本体 -->
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div class="panel"
            style:width="{key_settings.panel_width + 1}px"
            style:height="{key_settings.panel_height + 1}px"
            style:top="{key_settings.panel_top[i] * key_settings.panel_height}px"
            style:left="{key_settings.panel_left[i] * key_settings.panel_width}px"
            style:background="{panel_color[i]}"
            on:click={toggle_panel(i)}>
            <!-- カーソル前後のパネル表示 -->
            {#each panels_shadow[i] as prev}
              <div class="panel_back"
                style:width="{key_settings.panel_width - prev}px"
                style:height="{key_settings.panel_height - prev}px"
                style:background="{key_settings.colors[key_settings.panel_color_def[i]]}">
              </div>
            {/each}
            <div>{key_settings.names[i]}</div>
          </div>
        {/each}
      </div>
      <!-- 左側: ノート表示部 -->
      <div class="notes">
        <!-- グリッド表示 -->
        {#each page_notes as notes, i}
          {#each border_num as num, j}
            <!-- svelte-ignore a11y-click-events-have-key-events -->
            <div class="{j % (note_length / 4) == 0 ? 'grid4' : 'grid'}"
              style:width="{key_settings.note_width + 1}px"
              style:height="{resolution / note_length * 2 / view_measure_num + 1}px"
              style:top="{num * 2 / view_measure_num}px"
              style:left="{i * key_settings.note_width}px"
              on:click={() => move_cursor(page * resolution * view_measure_num + num)}>
            </div>
          {/each}
        {/each}
        <!-- 再生位置カーソル表示 -->
        {#if cursor_play >= 0}
          <div class="cursor_play"
            style:top="{cursor_play * 2 / view_measure_num}px"
            style:width="{key_settings.note_width * key_settings.panel_num}px">
          </div>
        {/if}
        <!-- カーソル表示 -->
        <div class="cursor"
          style:top="{(cursor - page * resolution * view_measure_num) * 2 / view_measure_num}px"
          style:width="{key_settings.note_width * key_settings.panel_num}px">
        </div>
        <!-- ノート表示 -->
        {#each page_notes as notes, i}
          {#each notes as note, j}
            <div class="note"
              style:width="{key_settings.note_width + 1}px"
              style:height="{key_settings.note_height}px"
              style:top="{note * 2 / view_measure_num - key_settings.note_height / 2}px"
              style:left="{i * key_settings.note_width}px"
              style:background="{key_settings.colors[key_settings.panel_color_def[i]]}">
            </div>
          {/each}
        {/each}
      </div>
    </div>
    <div class="music_control">
      音量({volume.toFixed(2)})
      <input type="range" min="0" max="1" step="0.01"
        bind:value={volume}
        on:input={volume_change}>
      速度({playback_rate.toFixed(2)})
      <input type="range" min="0.1" max="1.5" step="0.1"
        bind:value={playback_rate}
        on:input={playback_rate_change}>
    </div>
    <div class="drop_area" class:dragover={dragover_flag}>
      画面にファイルをドロップしてセーブデータ/音楽ファイルを読み込み
    </div>
    <div class="save_buttons">
      <input type="button" value="新規作成" on:click={clear_data}>
      <input type="button" value="クリップボードから読み込み" on:click={load_clipboard}>
      <input type="button" value="セーブデータの保存" on:click={save_clipboard}>
      <input type="button" value="dosの保存" on:click={save_dos_clipboard}>
      譜面番号<input type="number" min="1" bind:value={chart_num}>
    </div>
    <div class="message_container">
      {#if message !== ''}
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div class="message"
          style:background="{message_color}"
          in:fade="{{duration: 100}}"
          out:fade="{{duration: 300}}"
          on:click="{() => message = ''}">{message}</div>
      {:else if label_in_page_warning}
        <div class="message"
          style:background="{message_colors.warning}"
          in:fade="{{duration: 100}}"
          out:fade="{{duration: 300}}">
          ページの途中にラベルがあるため曲再生が正常にできない可能性があります。
        </div>
      {/if}
    </div>
    <footer>
      <a href="./thirdparty_license.txt" target="_blank" rel="noopener noreferrer">使用しているソフトウェアのライセンス表示</a> |
      <a href="https://github.com/suzme/punpane-editor" target="_blank" rel="noopener noreferrer">Pun◇Pane Editor Ver.{version}</a>
    </footer>
  </div>
</main>

<style>
  .container {
    margin: auto;
    font-size: 12pt;
    box-sizing: border-box;
  }

  .punpane_editor * {
    box-sizing: border-box;
    margin-top: 0.5rem;
  }

  .main_input > input[type="number"] {
    width: 5em;
    font-size: 100%;
  }

  label {
    cursor: pointer;
  }

  .main_buttons > input[type="button"] {
    font-size: 180%;
    min-width: 1.5em;
    min-height: 1.5em;
    color: #666666;
    background: #cccccc;
    border: 1px solid #999999;
    cursor: pointer;
    margin-top: 0.5rem;
  }

  input[type="button"][value="4"].selected,
  input[type="button"][value="8"].selected,
  input[type="button"][value="16"].selected,
  input[type="button"][value="32"].selected {
    background: #99eeff;
  }

  input[type="button"][value="12"].selected,
  input[type="button"][value="24"].selected,
  input[type="button"][value="48"].selected {
    background: #ff99ee;
  }

  select {
    min-width: 3em;
    font-size: 100%;
  }

  .panels {
    position: relative;
  }

  .panel {
    border: 1px solid #999999;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--panel-color0);
    font-size: 40px;
    color: #666666;
    user-select: none;
    cursor: pointer;
  }

  .panel_back {
    position: absolute;
    border: 1px solid #999999;
    opacity: 0.4;
  }

  .notes {
    position: relative;
  }

  .note {
    position: absolute;
    border: 1px solid #999999;
  }

  .grid4 {
    position: absolute;
    border: 1px solid #cccccc;
    border-top: 1px solid #999999;
  }

  .grid {
    position: absolute;
    border: 1px solid #cccccc;
  }

  .cursor {
    position: absolute;
    border: 1px solid #33cc99;
  }

  .cursor_play {
    position: absolute;
    border: 1px solid #cc3333;
  }

  .music_control {
    margin-top: 0.5rem;
  }

  .drop_area {
    margin-top: 0.5rem;
    border: 1px solid #cccccc;
    padding: 0.5rem;
  }

  .drop_area.dragover {
    background: #ccffff;
  }

  .save_buttons {
    margin-top: 0.5rem;
  }

  .save_buttons input[type="button"] {
    padding: 0.2rem 0.5rem;
    font-size: 100%;
  }

  .save_buttons input[type="number"] {
    width: 4rem;
    padding: 0.2rem;
    font-size: 100%;
  }

  .message_container {
    margin-top: 0.5rem;
    height: 2rem;
  }

  .message {
    position: absolute;
    padding: 0.5rem;
    cursor: pointer;
  }

  footer {
    margin-top: 1rem;
    font-size: 80%;
    text-align: right;
  }

  footer a:link, footer a:visited {
    color: #999999;
    text-decoration: none;
  }

  footer a:hover {
    color: #6666cc;
    text-decoration: underline;
  }
</style>
