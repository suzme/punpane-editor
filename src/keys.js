const keys = {
  '18p': {
    panel_num: 18,    // パネル数
    panel_width: 96,  // パネルの幅[px]
    panel_height: 96, // パネルの高さ[px]
    note_width: 20,   // ノートの幅[px]
    note_height: 6,   // ノートの高さ[px]
    panel_top: [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3],                   // パネルの縦位置[*panel_height]
    panel_left: [0, 1, 2, 3, 4, 0.5, 1.5, 2.5, 3.5, 0.5, 1.5, 2.5, 3.5, 0, 1, 2, 3, 4],  // パネルの横位置[*panel_width]
    colors: ['#cccccc', '#9999ff', '#99ffff', '#ffff99', '#ff9966', '#ffffff'],          // パネルの色定義(colorsのindexで指定, 0は背景色)
    panel_color_def: [1, 2, 5, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 5, 3, 4],
    names: '7890-UIOPJKL;NM<>/'.split(''),  // パネルの表示名(真ん中に出るやつ)
    dos_chara: 'aa,ab,ac,ad,ae,ba,bb,bc,bd,ca,cb,cc,cd,da,db,dc,dd,de'.split(','),  // dosの変数名リスト
    key_config: 'Digit7,Digit8,Digit9,Digit0,Minus,KeyU,KeyI,KeyO,KeyP,KeyJ,KeyK,KeyL,Semicolon,KeyN,KeyM,Comma,Period,Slash'.split(',')
  },
  '9t': {
    panel_num: 9,    // パネル数
    panel_width: 96,  // パネルの幅[px]
    panel_height: 96, // パネルの高さ[px]
    note_width: 30,   // ノートの幅[px]
    note_height: 6,   // ノートの高さ[px]
    panel_top: [0, 0, 0, 1, 1, 1, 2, 2, 2],                 // パネルの縦位置[*panel_height]
    panel_left: [0, 1, 2, 0, 1, 2, 0, 1, 2],                // パネルの横位置[*panel_width]
    colors: ['#cccccc', '#9999ff', '#ff9999', '#99ff99'],   // パネルの色定義(colorsのindexで指定, 0は背景色)
    panel_color_def: [1, 1, 1, 2, 3, 2, 1, 1, 1],
    names: '789456123'.split(''),  // パネルの表示名(真ん中に出るやつ)
    dos_chara: 'left,down,up,right,space,sleft,sdown,sup,sright'.split(','),  // dosの変数名リスト
    key_config: 'Numpad7,Numpad8,Numpad9,Numpad4,Numpad5,Numpad6,Numpad1,Numpad2,Numpad3'.split(',')
  }
}

export { keys }
