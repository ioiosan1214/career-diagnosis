const QUESTIONS = [
  {
    text: "仕事でテンションが上がる瞬間は？",
    choices: [
      { label: "商談がまとまった瞬間、「決まった！」の快感",       scores: [3,0,0,0,0,1,0,0] },
      { label: "突然いいアイデアが降りてきた瞬間",               scores: [0,3,0,1,0,0,0,0] },
      { label: "データが予想通りの結果を示した瞬間",             scores: [0,1,3,0,0,0,0,0] },
      { label: "誰かに「ありがとう」と言われた瞬間",             scores: [0,0,0,0,3,0,0,0] },
    ]
  },
  {
    text: "締め切り前のあなたを正直に教えてください。",
    choices: [
      { label: "前日に全力で仕上げる。ギリギリが一番燃える",       scores: [2,0,0,0,0,1,0,0] },
      { label: "2日前から「もっといいアイデアないかな」と迷い始める", scores: [0,2,0,1,0,0,0,0] },
      { label: "1週間前からスケジュールを引いて逆算する",         scores: [0,0,3,0,1,0,0,0] },
      { label: "「もうどうでもいい」と諦めモードに突入する",       scores: [0,0,0,0,0,0,1,3] },
    ]
  },
  {
    text: "会議であなたが自然とやっている役割は？",
    choices: [
      { label: "場を仕切るファシリテーター役",                   scores: [2,1,0,0,0,1,0,0] },
      { label: "突拍子もないアイデアを出す人",                   scores: [0,2,0,2,0,0,0,0] },
      { label: "データや根拠を提示して議論をまとめる人",           scores: [0,1,3,0,0,0,0,0] },
      { label: "発言せず議事録だけとっている人",                 scores: [0,0,0,0,2,0,1,0] },
    ]
  },
  {
    text: "仕事で一番評価されたいのはどれですか？",
    choices: [
      { label: "売上・受注数などの数字の達成",                   scores: [3,0,0,0,0,1,0,0] },
      { label: "誰も思いつかなかった斬新なアイデアの提案",         scores: [0,2,0,2,0,1,0,0] },
      { label: "ミスゼロ・精度の高い仕事ぶり",                   scores: [0,0,3,0,1,0,0,0] },
      { label: "「あなたがいると助かる」というチームの信頼",       scores: [0,0,0,0,3,0,0,0] },
    ]
  },
  {
    text: "本当に理想の働き方はどれですか？",
    choices: [
      { label: "裁量が大きく、成果で正当に評価される環境",         scores: [1,0,0,0,0,3,0,0] },
      { label: "チームで動きながら自分の意見も言える環境",         scores: [0,2,0,0,1,0,0,0] },
      { label: "静かに自分のペースで深く集中できる環境",           scores: [0,0,2,2,0,1,0,0] },
      { label: "とにかく安定・定時退社・余計なプレッシャーなし",   scores: [0,0,0,0,3,0,0,1] },
    ]
  },
  {
    text: "今の職場への本音を教えてください。",
    choices: [
      { label: "合っていると思う。もっと活躍したい",               scores: [2,1,0,0,0,0,0,0] },
      { label: "悪くはないけど、なんか違う感がずっとある",         scores: [0,0,0,0,0,0,3,0] },
      { label: "しんどい。続けることに疑問を感じ始めている",       scores: [0,0,0,0,0,0,1,2] },
      { label: "辞めることしか考えていない",                     scores: [0,0,0,0,0,0,0,3] },
    ]
  },
  {
    text: "同僚に仕事の悩みを相談されました。あなたは？",
    choices: [
      { label: "とにかく話を聞いてあげる。共感を最優先",           scores: [0,0,0,0,3,0,0,0] },
      { label: "解決策を即座に提案する。行動あるのみ",             scores: [2,0,1,0,0,0,0,0] },
      { label: "「それ面白い問題だね」と深掘りして分析する",       scores: [0,1,2,0,0,0,0,0] },
      { label: "「私も同じ悩みだよ…」と一緒に落ちていく",         scores: [0,0,0,0,0,0,1,2] },
    ]
  },
  {
    text: "好きな仕事・得意な仕事の種類は？",
    choices: [
      { label: "人に会って話す仕事。対人が一番楽しい",             scores: [3,0,0,0,1,0,0,0] },
      { label: "アイデアを形にするクリエイティブな仕事",           scores: [0,2,0,2,0,1,0,0] },
      { label: "データを分析して答えを導き出す仕事",               scores: [0,0,3,0,0,0,0,0] },
      { label: "正直、何もしたくない。強いて言えば休みたい",       scores: [0,0,0,0,0,0,1,3] },
    ]
  },
  {
    text: "仕事でミスをした時、あなたはどうしますか？",
    choices: [
      { label: "即謝罪・即対応。次に活かして終わり",               scores: [2,0,0,0,1,0,0,0] },
      { label: "原因を徹底的に分析してレポートまで作る",           scores: [0,0,3,0,0,0,0,0] },
      { label: "創造的な言い訳を考える。才能の無駄遣い",           scores: [0,1,0,2,0,1,0,0] },
      { label: "「もうやってられない」とそっと退場を考える",       scores: [0,0,0,0,0,0,0,3] },
    ]
  },
  {
    text: "3年後、どんな状態でいたいですか？",
    choices: [
      { label: "今の仕事でもっと上のポジションを目指している",     scores: [2,1,0,0,0,0,0,0] },
      { label: "自分のサービスや事業を持っている",                 scores: [0,0,0,1,0,3,0,0] },
      { label: "専門スキルを磨いて、その道のプロになっている",     scores: [0,0,2,2,0,0,0,0] },
      { label: "今とは全く別の環境・仕事をしている",               scores: [0,0,0,0,0,0,2,2] },
    ]
  },
];

const TYPES = [
  {
    name: "営業突破型",
    nick: "猪突猛進マン",
    desc: "あなたは「とにかく動く」が信条のハイテンション実行者。数字とプレッシャーを糧に生きており、商談・交渉・クロージングが本能的に得意。チームの温度を上げる存在だが、繊細な計画作業や細かい分析は苦手で、「とりあえず突撃してから考える」スタイルが時に周囲を振り回す。",
    goods: ["競争環境のある営業職", "成果報酬制度", "新規開拓", "裁量ある商談業務"],
    bads:  ["細かいデスクワーク中心の職場", "前例重視の組織", "曖昧な評価基準"],
    next:  ["自分の目標数字を改めて設定してみる", "強みを活かせる営業コンテストや社内表彰に挑む", "競合比較で自分の強みを言語化する"],
    sharp: "あなたの最大の強みは「行動力」です。ただ、それが「考えない」と紙一重なのは、うすうす気づいているはずです。"
  },
  {
    name: "企画マーケ型",
    nick: "アイデア爆発屋",
    desc: "常に「もっと面白くできないか」を考えているアイデアマン。企画・戦略・マーケティングの文脈では本領を発揮するが、アイデアを出すだけ出して実行が甘くなりがち。会議での発言量と実際のアウトプットが比例しないことを、自分以外の全員が気づいている。",
    goods: ["マーケティング・広告・PR", "新規事業開発", "クリエイティブ職", "企画立案がメインの仕事"],
    bads:  ["ルーティン業務しかない職場", "細かい数値管理が中心の仕事", "同じことを繰り返す環境"],
    next:  ["今あるアイデアを1つだけ選んで来週中に形にする", "小さなプロジェクトのリーダーに立候補する", "マーケティング・企画系の副業案件を探してみる"],
    sharp: "アイデアは出る。問題は、それを形にする前に次のアイデアが来ることです。"
  },
  {
    name: "分析改善型",
    nick: "データ中毒者",
    desc: "感情より根拠、直感より数字。「なぜ？」を追い続けるロジカルな改善屋。仕組みを最適化することに喜びを感じ、品質・精度・再現性にこだわる。ただし、「正しさ」を追求するあまり意思決定が遅れることも。また、感情論で動くメンバーへの対応が壊滅的に下手。",
    goods: ["データアナリスト・エンジニア", "品質管理・改善部門", "コンサルティング", "事業改善・オペレーション職"],
    bads:  ["あいまいな指示しかない職場", "感情で物事が決まる組織", "スピード最優先の営業環境"],
    next:  ["現在の業務の無駄を1つ特定して改善提案を出す", "得意な分析テーマで社内発表を申し出る", "専門資格（データ分析・統計など）の取得を検討する"],
    sharp: "あなたの分析は正確です。でも、正解を出し続けても、それを動かす人間関係があることを忘れないでください。"
  },
  {
    name: "クリエイター型",
    nick: "孤独な天才気取り",
    desc: "自分の世界観を持ち、表現・制作・発信が最も輝く環境。誰かの指示より自分の感覚を信じ、「これがいい」という確信で動く。チームワークは苦手で、会議は生産性の墓場だと思っている。孤独に強いが、それが「チームに馴染もうとしない」と見られることに気づいていない。",
    goods: ["デザイン・制作職", "コンテンツクリエイター", "フリーランス", "個人裁量の大きいクリエイティブ職"],
    bads:  ["集団合意が必要な組織", "承認プロセスが多い職場", "売上・数字が最優先の文化"],
    next:  ["ポートフォリオを整理して公開する", "副業でクリエイティブ案件を1件受けてみる", "自分の制作物への外部フィードバックをもらう"],
    sharp: "あなたの感性は本物かもしれません。でも、それを誰も必要としていない可能性があることは考えましたか？"
  },
  {
    name: "サポート安定型",
    nick: "縁の下の働き蜂",
    desc: "縁の下でチームを支える、いなくなったら困るタイプ。誰かの役に立つことに喜びを感じ、共感力・フォロー力が高い。自己主張は控えめで、評価されなくても淡々と仕事をこなす。ただし、その献身がいつの間にか「当たり前」にされており、消耗している可能性が高い。",
    goods: ["バックオフィス・事務", "カスタマーサポート", "教育・福祉・医療", "チームを支えるコーディネーター職"],
    bads:  ["個人成果だけで評価される制度", "激しい競争文化", "自己PRを常に求められる職場"],
    next:  ["自分の仕事の価値を言葉にして上司に伝えてみる", "「No」と言う練習を1週間続けてみる", "自分が消耗していないか今週中に振り返る"],
    sharp: "あなたは確かに支えています。でも、支え続けることで誰かに搾取されていないか、一度確認した方がいいです。"
  },
  {
    name: "自由裁量型",
    nick: "組織に馴染めない人",
    desc: "組織のルール・階層・会議が生理的に合わない自由人。成果を出す能力はあるのに、「やり方を指定される」「報告が多い」「意味のないミーティング」で消耗する。フリーランス・独立・スタートアップが本来の生息地。会社員である限り、永遠に「なんか違う」感と戦い続ける。",
    goods: ["フリーランス・業務委託", "スタートアップ初期メンバー", "経営企画・新規事業", "独立・起業"],
    bads:  ["大企業のヒエラルキー文化", "多層承認フローのある職場", "形式・慣例を重んじる組織"],
    next:  ["副業または独立の収支試算を1枚の紙にまとめる", "フリーランス案件を1件だけ試してみる", "自分に合う組織の条件をリストアップする"],
    sharp: "あなたが組織に馴染めないのは、能力がないからではありません。ただ、それを「才能」と誤解するのも危険です。"
  },
  {
    name: "現職ミスマッチ型",
    nick: "間違えた星に降りた人",
    desc: "今の職場・職種・業界が、あなたの本来の適性とズレている可能性が高い。能力はあるのに「なんか違う」という感覚が抜けない。これは意欲の問題ではなく、環境の問題です。「なぜしんどいのか」を分析し、自分に合った場所を探すフェーズに入った方がいいタイミングかもしれません。",
    goods: ["キャリア相談・コーチング", "転職活動・情報収集", "副業でのスキル棚卸し"],
    bads:  ["「とりあえず続ける」という現状維持", "異動・転換の可能性がゼロの職場"],
    next:  ["転職エージェントに登録して話だけ聞いてみる", "「したくない仕事リスト」を紙に書き出す", "1ヶ月間だけ求人情報を眺めてみる"],
    sharp: "違和感を「慣れれば消える」と思い続けて、何年経ちましたか？"
  },
  {
    name: "退職準備優先型",
    nick: "もう帰りたい人",
    desc: "精神的にも物理的にも、今の仕事から離れることを強く求めているサインが出ています。仕事への意欲より消耗の方が大きく、「続ける理由」を探すのに疲れている状態です。まず自分の状態を正直に認め、信頼できる人や専門家に相談することを強くおすすめします。",
    goods: ["有給消化・休職制度", "メンタルヘルス相談窓口", "転職エージェント面談"],
    bads:  ["無理な継続による消耗", "「もう少し頑張れば」と言い聞かせる環境"],
    next:  ["信頼できる人に現状を正直に話す", "有給の残日数と使い方を今日確認する", "心療内科またはキャリア相談の予約を入れる"],
    sharp: "無理に続けることが「頑張り」ではありません。撤退も立派な選択肢です。"
  },
];

let currentQ = 0;
let answers = new Array(QUESTIONS.length).fill(null);
let scores = new Array(8).fill(0);

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function startQuiz() {
  currentQ = 0;
  answers = new Array(QUESTIONS.length).fill(null);
  scores = new Array(8).fill(0);
  showScreen('screen-quiz');
  renderQuestion();
}

function renderQuestion() {
  const q = QUESTIONS[currentQ];
  const total = QUESTIONS.length;
  const pct = Math.round(((currentQ + 1) / total) * 100);

  document.getElementById('q-label').textContent = `質問 ${currentQ + 1} / ${total}`;
  document.getElementById('q-pct').textContent = `${pct}%`;
  document.getElementById('progress-fill').style.width = `${pct}%`;
  document.getElementById('q-num').textContent = `Q${currentQ + 1}`;
  document.getElementById('q-text').textContent = q.text;

  const container = document.getElementById('choices');
  container.innerHTML = '';
  q.choices.forEach((c, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice' + (answers[currentQ] === i ? ' selected' : '');
    btn.innerHTML = `<span class="choice-dot"></span><span>${c.label}</span>`;
    btn.onclick = () => selectChoice(i);
    container.appendChild(btn);
  });

  document.getElementById('btn-back').disabled = currentQ === 0;
  updateNextButton();
}

function selectChoice(index) {
  answers[currentQ] = index;
  document.querySelectorAll('.choice').forEach((el, i) => {
    el.classList.toggle('selected', i === index);
  });
  updateNextButton();
}

function updateNextButton() {
  const btn = document.getElementById('btn-next');
  const isLast = currentQ === QUESTIONS.length - 1;
  const answered = answers[currentQ] !== null;
  btn.disabled = !answered;
  btn.textContent = isLast ? '結果を見る' : '次へ →';
}

function nextQuestion() {
  if (answers[currentQ] === null) return;

  if (currentQ === QUESTIONS.length - 1) {
    calcAndShowResult();
  } else {
    currentQ++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (currentQ > 0) {
    currentQ--;
    renderQuestion();
  }
}

function calcAndShowResult() {
  scores = new Array(8).fill(0);
  answers.forEach((ansIdx, qIdx) => {
    if (ansIdx !== null) {
      QUESTIONS[qIdx].choices[ansIdx].scores.forEach((s, t) => {
        scores[t] += s;
      });
    }
  });

  const maxScore = Math.max(...scores);
  const typeIndex = scores.indexOf(maxScore);
  showResult(typeIndex);
}

function showResult(typeIndex) {
  const t = TYPES[typeIndex];

  document.getElementById('badge-type').textContent = t.name;
  document.getElementById('badge-nick').textContent = `「${t.nick}」`;
  document.getElementById('r-desc').textContent = t.desc;
  document.getElementById('sharp-text').textContent = t.sharp;

  const goodsEl = document.getElementById('tags-good');
  goodsEl.innerHTML = t.goods.map(g => `<span class="tag good">${g}</span>`).join('');

  const badsEl = document.getElementById('tags-bad');
  badsEl.innerHTML = t.bads.map(b => `<span class="tag bad">${b}</span>`).join('');

  const nextEl = document.getElementById('next-list');
  nextEl.innerHTML = t.next.map(n => `<li>${n}</li>`).join('');

  showScreen('screen-result');
  window.scrollTo(0, 0);
}

function restart() {
  showScreen('screen-landing');
  window.scrollTo(0, 0);
}
