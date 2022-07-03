<script>
  import { fade } from 'svelte/transition'

  /**
   * 定数
   */
  const version = '20220704-0'
  const panel_num = 18        // パネル数
  const resolution = 3 * 64   // 分解能(1小節を何分割するか)
  const panel_width = 96      // パネルの幅[px]
  const panel_height = 96     // パネルの高さ[px]
  const note_width = 20       // ノートの幅[px]
  const note_height = 6       // ノートの高さ[px]
  const add_panel_delay = 100 // パネル追加時の遅延時間(同時押しと判定する時間[ms])

  const default_fix_measure = 0    // ラベルの小節番号のデフォルト値
  const default_begin_frame = 200  // 開始フレームのデフォルト値
  const default_bpm = 160          // BPMのデフォルト値

  // パネルの縦位置[*panel_height]
  const panel_top = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3]

  // パネルの横位置[*panel_width]
  const panel_left = [0, 1, 2, 3, 4, 0.5, 1.5, 2.5, 3.5, 0.5, 1.5, 2.5, 3.5, 0, 1, 2, 3, 4]

  // パネルの色定義(colorsのindexで指定)
  const colors = ['#cccccc', '#9999ff', '#99ffff', '#ffff99', '#ff9966', '#ffffff']
  const panel_color_def = [1, 2, 5, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 5, 3, 4]

  // パネルの表示名(真ん中に出るやつ)
  const names = '7890-UIOPJKL;NM<>/'.split('')

  // dosの変数名リスト
  const dos_chara = 'aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de'.split(',')

  // メッセージの背景色
  const message_colors = {
    success: '#99ccff',
    error: '#ffcccc'
  }

  /**
   * 変数
   */
  let chart_num = 1                        // 譜面番号
  let cursor = 0                           // カーソル位置(resolution単位)
  let note_length = 16                     // n分音符(3連符は6,12,24で指定)
  let label_measures = [0]                 // ラベルの設定された小節番号
  let begin_frames = [default_begin_frame] // 開始フレーム(ラベルごと)
  let bpms = [default_bpm]                 // BPM(ラベルごと)
  let add_delay_timer = null;              // パネル追加後、カーソル移動を少し待つためのタイマーのID
  let message = ''
  let message_color = message_colors.success

  // パネルのタイミングデータ(resolution単位)
  let panels_all = new Array(panel_num).fill([])

  /**
   * リアクティブ
   */
  // 現在の小節番号(0始まり)
  $: measure = Math.floor(cursor / resolution)

  // 現在の小節に適用されるラベルの小節番号(仮。存在しない/最初のラベルより前の場合-Infinity)
  $: label_measure_ = Math.max(...label_measures.filter(label_measure => measure >= label_measure))

  // 現在の小節に適用されるラベルのindex
  $: label_index = label_measures.findIndex(value => value === label_measure_)

  // 現在の小節に適用されるラベルの小節番号(最初のラベルより前の場合、最初のラベルを使用)
  $: label_measure = label_measures[label_index] ?? label_measures[0] ?? default_fix_measure

  // 現在の小節に適用されるラベルの開始フレーム
  $: begin_frame = begin_frames[label_index] ?? begin_frames[0] ?? default_begin_frame

  // 現在の小節のBPM
  $: bpm = bpms[label_index] ?? bpms[0] ?? default_bpm

  // カーソル位置のフレーム数
  $: cursor_frame = (cursor - label_measure * resolution) / resolution * 4 * 60 * 60 / bpm + begin_frame

  // パネルの表示色(カーソル位置に配置されているかどうかで色を変える)
  $: panel_color = panels_all.map(
    (panels, i) => panels.includes(cursor) ? colors[panel_color_def[i]] : colors[0]
  )

  // 1小節分のパネル表示用
  // (小節内での相対値の配列の配列)
  $: notes_measure = panels_all.map(
    panels => panels.map(
      // 小節線からの相対値に変換
      panel => panel - measure * resolution
    ).filter(
      // 小節内に絞り込み
      panel => panel >= 0 && panel < resolution
    )
  )

  // カーソルより前のパネル表示用
  // (カーソル位置からの差の配列の配列)
  $: panels_previous = panels_all.map(
    panels => panels.map(
      // カーソル位置からの差に変換
      panel => cursor - panel
    ).filter(
      // 表示範囲内に絞り込み
      panel => panel > 0 && panel <= panel_width
    )
  )

  // 罫線の表示位置(n分音符で変更)
  $: border_num = new Array(note_length).fill(0).map((n, i) => resolution / note_length * i)

  /**
   * メソッド
   */
  // カーソル移動
  const move_cursor = tick => {
    message = ''
    cursor = tick
  }
  const cursor_previous = () => move_cursor(cursor - (3 * 64) / note_length)
  const cursor_next = () => move_cursor(cursor + (3 * 64) / note_length)
  const page_previous = () => move_cursor((measure - 1) * resolution)
  const page_next = () => move_cursor((measure + 1) * resolution)

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
      panels: panels_all,
      label_measures: label_measures,
      begin_frames: begin_frames,
      bpms: bpms,
      resolution: resolution,
      chart_num: chart_num,
      editor_version: version,
      save_data_version: 0
    })

  // クリップボードにセーブデータを保存
  const save_clipboard = () => copy_text(get_save_date(), 'クリップボードにセーブデータをコピーしました。')

  // セーブデータ読み込み
  const load = text => {
    let save_data

    try {
      save_data = JSON.parse(text)
    } catch (e) {
      console.log(e)
      message = "セーブデータの読み込みに失敗しました。"
      message_color = message_colors.error
      return
    }

    panels_all = save_data.panels ?? new Array(panel_num).fill([])
    label_measures = save_data.label_measures ?? []
    begin_frames = save_data.begin_frames ?? []
    bpms = save_data.bpms ?? []
    chart_num = save_data.chart_num
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
    panels_all.map((panels, i) => `|${dos_chara[i]}_data=`
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
    if (!isNaN(value)) {
      begin_frames[label_index] = value
    }
  }

  // BPMの変化
  const bpm_change = e => {
    message = ''
    const value = e.target.value
    if (!isNaN(value)) {
      bpms[label_index] = value
    }
  }

  /**
   * グローバルなイベント(キー/マウス操作)
  */
  // キー設定(修飾キーなし)
  const keyConfig = {
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
    'Digit7': toggle_panel(0),
    'Digit8': toggle_panel(1),
    'Digit9': toggle_panel(2),
    'Digit0': toggle_panel(3),
    'Minus': toggle_panel(4),
    'KeyU': toggle_panel(5),
    'KeyI': toggle_panel(6),
    'KeyO': toggle_panel(7),
    'KeyP': toggle_panel(8),
    'KeyJ': toggle_panel(9),
    'KeyK': toggle_panel(10),
    'KeyL': toggle_panel(11),
    'Semicolon': toggle_panel(12),
    'KeyN': toggle_panel(13),
    'KeyM': toggle_panel(14),
    'Comma': toggle_panel(15),
    'Period': toggle_panel(16),
    'Slash': toggle_panel(17),
    'Delete': remove_line,
    'Backspace': backspace,
  }

  // キー設定(Ctrl付き)
  const keyConfigCtrl = {
  }

  // キーを押したとき
  const keydown = e => {
    if (e.target.type !== 'number') {
      const keyConfig_ = e.ctrlKey ? keyConfigCtrl : keyConfig
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
    console.log(e)
    e.preventDefault()
    e.returnValue = 'ページを移動してよろしいですか？未保存のデータは失われます。'
  }
</script>

<svelte:window on:beforeunload={before_unload} on:keydown={keydown} on:wheel={wheel}/>

<main>
  <div class="container"
    style:width={`${note_width * 18 + 20 + panel_width * 5}px`}>
    <div>
      {measure + 1}小節目, {(cursor - measure * 192) / (resolution / note_length) + 1}/{note_length} ({Math.round(cursor_frame)}f)
    </div>
    <div class="main_input">
      <input type="checkbox" checked="{label_measure === measure}" on:change={fix_change} id="fix">
      <label for="fix">この小節で設定変更</label> |
      <label for="begin_frame">開始フレーム: </label>
      <input type="number" value="{begin_frame}" on:change={frame_change} id="begin_frame">
      <label for="bpm">BPM: </label>
      <input type="number" value="{bpm}" on:change={bpm_change} step="0.01" id="bpm">
    </div>
    <div class="main_buttons">
      <input type="button" value="4"  on:click={change_note_len(4)}  class:selected={note_length === 4 } title="1キー: カーソル移動間隔を4分に変更">
      <input type="button" value="8"  on:click={change_note_len(8)}  class:selected={note_length === 8 } title="2キー: カーソル移動間隔を8分に変更">
      <input type="button" value="16" on:click={change_note_len(16)} class:selected={note_length === 16} title="3キー: カーソル移動間隔を16分に変更">
      <input type="button" value="32" on:click={change_note_len(32)} class:selected={note_length === 32} title="Rキー: カーソル移動間隔を32分に変更">
      <input type="button" value="12" on:click={change_note_len(12)} class:selected={note_length === 12} title="4キー: カーソル移動間隔を12分(8分3連)に変更">
      <input type="button" value="24" on:click={change_note_len(24)} class:selected={note_length === 24} title="5キー: カーソル移動間隔を24分(16分3連)に変更">
      <input type="button" value="48" on:click={change_note_len(48)} class:selected={note_length === 48} title="6キー: カーソル移動間隔を48分(32分3連)に変更">
      <input type="button" value="←" on:click={page_previous} title="左矢印キー: 前の小節に移動">
      <input type="button" value="↑" on:click={cursor_previous} title="上矢印/E/B: カーソルを上に移動">
      <input type="button" value="↓" on:click={cursor_next} title="下矢印/D/スペース: カーソルを下に移動">
      <input type="button" value="→" on:click={page_next} title="右矢印キー: 次の小節に移動">
      <input type="button" value="BS" on:click={backspace} title="Backspace: カーソルを前に移動してパネルを削除">
      <input type="button" value="DEL" on:click={remove_line} title="Delete: カーソルのある行のパネルを削除">
    </div>
    <div class="punpane_editor"
      style:height="{resolution * 2 + 10}px">
      <!-- 右側: パネル表示部 -->
      <div class="panels" style={`left: ${note_width * 18 + 20}px; width: ${panel_width * 5}px;`}>
        {#each panels_all as panels, i}
          <!-- パネル本体 -->
          <div class="panel"
            style:width="{panel_width + 1}px"
            style:height="{panel_height + 1}px"
            style:top="{panel_top[i] * panel_height}px"
            style:left="{panel_left[i] * panel_width}px"
            style:background="{panel_color[i]}"
            on:click={toggle_panel(i)}>
            <!-- カーソルより前のパネル表示 -->
            {#each panels_previous[i] as prev}
              <div class="panel_back"
                style:width="{panel_width - prev}px"
                style:height="{panel_height - prev}px"
                style:background="{colors[panel_color_def[i]]}">
              </div>
            {/each}
            <div>{names[i]}</div>
          </div>
        {/each}
      </div>
      <!-- 左側: ノート表示部 -->
      <div class="notes">
        <!-- グリッド表示 -->
        {#each notes_measure as notes, i}
          {#each border_num as num}
            <div class="grid"
              style:width="{note_width + 1}px"
              style:height="{resolution / note_length * 2 + 1}px"
              style:top="{num * 2}px"
              style:left="{i * note_width}px"
              on:click={() => move_cursor(measure * resolution + num)}>
            </div>
          {/each}
        {/each}
        <!-- カーソル表示 -->
        <div class="cursor"
          style:top="{(cursor - measure * resolution) * 2}px"
          style:width="{note_width * 18}px">
        </div>
        <!-- ノート表示 -->
        {#each notes_measure as notes, i}
          {#each notes as note, j}
            <div class="note"
              style:width="{note_width + 1}px"
              style:height="{note_height}px"
              style:top="{note * 2 - note_height / 2}px"
              style:left="{i * note_width}px"
              style:background="{colors[panel_color_def[i]]}">
            </div>
          {/each}
        {/each}
      </div>
    </div>
    <div class="save_buttons">
      <input type="button" value="セーブデータの保存" on:click={save_clipboard}>
      <input type="button" value="クリップボードから読み込み" on:click={load_clipboard}>
      <input type="button" value="dosの保存" on:click={save_dos_clipboard}>
    </div>
    <div class="message_container">
      {#if message !== ''}
        <div class="message"
          style:background="{message_color}"
          in:fade="{{duration: 100}}"
          out:fade="{{duration: 300}}"
          on:click="{() => message = ''}">{message}</div>
      {/if}
    </div>
    <footer>
      Pun◇Pane Editor Ver.{version}
    </footer>
  </div>
</main>

<style>
  .container {
    margin: auto;
    font-size: 12pt;
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

  .grid {
    position: absolute;
    border: 1px solid #cccccc
  }

  .cursor {
    position: absolute;
    border: 1px solid #33cc99;
  }

  .save_buttons {
    margin-top: 0.5rem;
  }

  .message_container {
    margin-top: 0.5rem;
    height: 2rem;
  }

  .message {
    padding: 0.5rem;
    cursor: pointer;
  }

  footer {
    margin-top: 1rem;
    color: #999999;
    font-size: 80%;
    text-align: right;
  }
</style>
