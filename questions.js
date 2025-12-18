const questions = [
  {
    text: "集団で意見が割れた時、あなたは？",
    options: [
      { text: "全体を見て最適解を探す", type: "strategist" },
      { text: "直感的に面白そうな方を選ぶ", type: "wanderer" },
      { text: "みんなが納得する形を探す", type: "guardian" },
      { text: "一歩引いて状況を観察する", type: "sage" }
    ]
  },
  {
    text: "初めての場所に来たら？",
    options: [
      { text: "まず全体像を把握する", type: "strategist" },
      { text: "とりあえず動き回る", type: "wanderer" },
      { text: "安心できる場所を探す", type: "guardian" },
      { text: "雰囲気や空気感を感じる", type: "artist" }
    ]
  },
  {
    text: "リーダーがいない状況では？",
    options: [
      { text: "自然と指示役になる", type: "ruler" },
      { text: "様子を見ながら考える", type: "sage" },
      { text: "支える役に回る", type: "guardian" },
      { text: "自分のやりたいことをする", type: "wanderer" }
    ]
  },
  {
    text: "トラブルが起きた時の反応は？",
    options: [
      { text: "冷静に原因を分析", type: "strategist" },
      { text: "勢いで対処する", type: "wanderer" },
      { text: "周囲を気遣う", type: "guardian" },
      { text: "感情や空気を読む", type: "artist" }
    ]
  },
  {
    text: "人からよく言われるのは？",
    options: [
      { text: "頭が切れる", type: "strategist" },
      { text: "自由人", type: "wanderer" },
      { text: "真面目で優しい", type: "guardian" },
      { text: "独特の感性", type: "artist" }
    ]
  },

  {
    text: "時間に余裕がある休日は？",
    options: [
      { text: "将来の計画を立てる", type: "strategist" },
      { text: "行き当たりばったりで出かける", type: "wanderer" },
      { text: "身近な人のために使う", type: "guardian" },
      { text: "創作や表現に没頭する", type: "artist" }
    ]
  },
  {
    text: "集団の中での立ち位置は？",
    options: [
      { text: "裏で流れを作る", type: "strategist" },
      { text: "ムードメーカー", type: "artist" },
      { text: "縁の下の力持ち", type: "guardian" },
      { text: "あまり群れない", type: "sage" }
    ]
  },
  {
    text: "決断を迫られたら？",
    options: [
      { text: "情報を集めて判断", type: "strategist" },
      { text: "フィーリング重視", type: "wanderer" },
      { text: "周囲への影響を考える", type: "guardian" },
      { text: "直感的に正しい方", type: "sage" }
    ]
  },
  {
    text: "ルールについてどう思う？",
    options: [
      { text: "目的達成のための道具", type: "strategist" },
      { text: "縛られるのは苦手", type: "wanderer" },
      { text: "守ることで秩序が保たれる", type: "guardian" },
      { text: "状況次第で変わる", type: "sage" }
    ]
  },
  {
    text: "人と話す時に重視するのは？",
    options: [
      { text: "結論や要点", type: "strategist" },
      { text: "楽しさやノリ", type: "artist" },
      { text: "相手の気持ち", type: "guardian" },
      { text: "意味や背景", type: "sage" }
    ]
  },

  {
    text: "評価されたいのは？",
    options: [
      { text: "能力や成果", type: "ruler" },
      { text: "個性や自由さ", type: "wanderer" },
      { text: "誠実さ", type: "guardian" },
      { text: "考え方や思想", type: "sage" }
    ]
  },
  {
    text: "自分の弱点だと思うのは？",
    options: [
      { text: "考えすぎる", type: "sage" },
      { text: "飽きっぽい", type: "wanderer" },
      { text: "抱え込みすぎる", type: "guardian" },
      { text: "完璧を求めすぎる", type: "strategist" }
    ]
  },
  {
    text: "惹かれる物語は？",
    options: [
      { text: "頭脳戦", type: "strategist" },
      { text: "冒険譚", type: "wanderer" },
      { text: "忠義の物語", type: "guardian" },
      { text: "哲学的な話", type: "sage" }
    ]
  },
  {
    text: "衝突が起きたら？",
    options: [
      { text: "勝つために戦略を練る", type: "ruler" },
      { text: "その場を離れる", type: "wanderer" },
      { text: "仲裁に入る", type: "guardian" },
      { text: "本質を探る", type: "sage" }
    ]
  },
  {
    text: "何に一番ストレスを感じる？",
    options: [
      { text: "非効率", type: "strategist" },
      { text: "束縛", type: "wanderer" },
      { text: "不安定さ", type: "guardian" },
      { text: "浅い会話", type: "sage" }
    ]
  },

  // 16〜40（後半：深め）
  {
    text: "自分の人生で大事なのは？",
    options: [
      { text: "成功と結果", type: "ruler" },
      { text: "自由と経験", type: "wanderer" },
      { text: "安心と安定", type: "guardian" },
      { text: "理解と探究", type: "sage" }
    ]
  },
  {
    text: "困難に直面したら？",
    options: [
      { text: "冷静に対策を練る", type: "strategist" },
      { text: "流れに身を任せる", type: "wanderer" },
      { text: "支え合おうとする", type: "guardian" },
      { text: "意味を考える", type: "sage" }
    ]
  },
  {
    text: "人を動かす時は？",
    options: [
      { text: "理屈で納得させる", type: "strategist" },
      { text: "勢いとノリ", type: "artist" },
      { text: "信頼関係", type: "guardian" },
      { text: "言葉の力", type: "ruler" }
    ]
  },
  {
    text: "あなたが恐れているのは？",
    options: [
      { text: "失敗", type: "strategist" },
      { text: "退屈", type: "wanderer" },
      { text: "孤独", type: "guardian" },
      { text: "無意味さ", type: "sage" }
    ]
  },
  {
    text: "最終的に求めるものは？",
    options: [
      { text: "影響力", type: "ruler" },
      { text: "自由", type: "wanderer" },
      { text: "守るもの", type: "guardian" },
      { text: "真理", type: "sage" }
    ]
  }
];
