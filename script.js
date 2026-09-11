// ============================================================
// 35問（16軸）
// ============================================================
const QUESTIONS = [
  { text: "初対面の人と話すことにあまり抵抗がない",                          axis: "sales"      },
  { text: "困っている人の話を聞くとき、解決策より先に気持ちに寄り添うことを意識する", axis: "empathy" },
  { text: "数字目標がある方がやる気が出る",                                   axis: "sales"      },
  { text: "人を説得したり、納得してもらうことにやりがいを感じる",               axis: "sales"      },
  { text: "既存のやり方をもっと良くする方法を考えるのが好きだ",                 axis: "planning"   },
  { text: "0から企画やアイデアを考えるのが得意だ",                             axis: "planning"   },
  { text: "物事の全体像を見て、流れを組み立てるのが好きだ",                     axis: "strategy"   },
  { text: "まだ誰もやっていないビジネスや仕組みをゼロから作ることに、強く惹かれる", axis: "venture"  },
  { text: "感覚よりも数字やデータを見て判断したい",                             axis: "analytics"  },
  { text: "結果が出なかった時、原因を分解して考える方だ",                       axis: "analytics"  },
  { text: "目の前の作業より、全体の勝ち筋を考えるのが好きだ",                   axis: "strategy"   },
  { text: "売上、アクセス数、反応率などを見るのが好きだ",                       axis: "analytics"  },
  { text: "文章、画像、動画などを作ることに興味がある",                         axis: "creative"   },
  { text: "見た目や世界観の違和感に気づきやすい",                               axis: "branding"   },
  { text: "SNSや広告の見せ方を考えるのが好きだ",                               axis: "creative"   },
  { text: "ブランド感、雰囲気、見せ方にこだわりがある",                         axis: "branding"   },
  { text: "決まったルールに沿って正確に進める仕事が得意だ",                     axis: "support"    },
  { text: "スケジュールやタスクを整理するのが得意だ",                           axis: "organize"   },
  { text: "誰かを裏側で支える仕事にもやりがいを感じる",                         axis: "support"    },
  { text: "抜け漏れを防いだり、細かく確認することが苦ではない",                 axis: "organize"   },
  { text: "細かく管理されるより、自分で考えて動きたい",                         axis: "freedom"    },
  { text: "時間や場所に縛られすぎない働き方に魅力を感じる",                     axis: "freedom"    },
  { text: "決まった道より、自分で道を作る方が面白いと感じる",                   axis: "pioneer"    },
  { text: "一つの分野を深く掘り下げることにやりがいを感じる",                   axis: "specialist" },
  { text: "チームや場の雰囲気を乱さないために、自分の本音を抑えることがある",     axis: "harmony"    },
  { text: "前例がない状況や、誰もやっていない課題にぶつかると、むしろやる気が出る", axis: "pioneer"   },
  { text: "場の雰囲気が悪くなると、自分が率先して場を和ませようとする",          axis: "harmony"    },
  { text: "多くのことをそこそこできるより、一つのことを誰にも負けないレベルに磨きたい", axis: "specialist" },
  { text: "相手の気持ちや感情の変化に気づきやすく、自然と声をかけてしまうことがある", axis: "empathy"   },
  { text: "大きなビジョンを持つだけでなく、それを実現するための行動も自然と起こしやすい", axis: "venture" },
  { text: "今の仕事は自分に合っていないと感じることが多い",                     axis: "mismatch"   },
  { text: "仕事に行く前から気分が重くなることがある",                           axis: "mismatch"   },
  { text: "今の職場では、自分の強みを活かせていないと感じる",                   axis: "mismatch"   },
  { text: "働き方を変えたい気持ちはあるが、収入面の不安で動けない",             axis: "anxiety"    },
  { text: "転職や退職の前に、確認すべき制度や手続きがよくわからない",           axis: "anxiety"    },
];

const CAREER_AXIS_KEYS = [
  'sales','empathy','planning','venture','analytics','strategy',
  'creative','branding','support','organize','freedom','pioneer',
  'harmony','specialist',
];

const LINE_URL = 'https://line.me/R/ti/p/@sample';

// ============================================================
// 14職業タイプ
// ============================================================
const JOB_TYPE_DATA = {
  sales: {
    name: "営業突破型", nick: "口から契約ビームマン",
    catch: "口は武器。正しい場所で使えば、それだけで勝てます。",
    desc: "人と話しながら相手の悩みを整理し、提案につなげる力があるタイプです。成果が数字で見える仕事に向いています。ただし、黙って同じ作業だけを続ける環境では、かなり退屈しやすいです。",
    goodJobs: ["営業","インサイドセールス","キャリアアドバイザー","カスタマーサクセス","営業代行"],
    goodEnv:  ["数字で評価される環境","提案できる環境","人と関わる機会が多い環境"],
    badEnv:   ["黙々と同じ作業だけを続ける仕事","評価基準が曖昧な職場","提案の余地が少ない環境"],
  },
  empathy: {
    name: "共感提案型", nick: "悩み吸い取りカピバラ",
    catch: "あなたの聞く力は、本当は稼げる力です。",
    desc: "相手の話を聞き、安心させながら解決策を提案できるタイプです。ゴリゴリ売るより、相談に乗りながら信頼を作る仕事に向いています。人の悩みを吸い取りすぎて、自分が疲れないよう注意が必要です。",
    goodJobs: ["相談型営業","カスタマーサクセス","キャリア相談","接客","カウンセリング系サポート"],
    goodEnv:  ["人の話を丁寧に聞ける環境","長期的な信頼関係を作れる環境"],
    badEnv:   ["強引な営業文化","短期の数字だけで評価される職場","人の話を聞く時間がない環境"],
  },
  planning: {
    name: "企画マーケ型", nick: "脳内会議止まらんタコ",
    catch: "頭の中のアイデアは、外に出なければ0と同じです。",
    desc: "アイデア、改善案、導線設計が頭の中で動き続けるタイプです。人が動く仕組みや見せ方を考えることに強みがあります。ただし、考えすぎて手が止まると、脳内会議だけで1日が終わります。",
    goodJobs: ["マーケター","SNSディレクター","広告企画","商品企画","コンテンツ企画"],
    goodEnv:  ["改善提案が通る環境","アイデアを試せる環境","変化を歓迎する環境"],
    badEnv:   ["指示された作業だけをこなす仕事","改善提案が通らない職場","変化を嫌う環境"],
  },
  venture: {
    name: "事業プロデュース型", nick: "風呂敷広げる孔雀社長",
    catch: "構想の大きさより、最初の一手の速さが大事です。",
    desc: "大きな構想を描き、人や企画をまとめることに向いているタイプです。新しい事業や仕組み作りで力を発揮します。ただし、広げすぎると回収不能になるので、現実に落とす相棒が必要です。",
    goodJobs: ["事業企画","新規事業","プロデューサー","マネージャー","経営補佐"],
    goodEnv:  ["裁量がある環境","構想を形にできる環境","意思決定に関われる環境"],
    badEnv:   ["細かい作業だけを続ける仕事","裁量がない職場","意思決定に関われない環境"],
  },
  analytics: {
    name: "分析改善型", nick: "数字を舐め回すメガネ",
    catch: "データを見る目があれば、勝ち筋は必ず見つかります。",
    desc: "感覚だけでなく、数字やデータをもとに改善していくことが得意なタイプです。結果を分解して、次の打ち手を考えられます。ただし、数字を見すぎて人間の気持ちを忘れないように注意です。",
    goodJobs: ["広告運用","SEO","データ分析","Web改善","CRM運用"],
    goodEnv:  ["データを見られる環境","検証できる環境","改善が評価される環境"],
    badEnv:   ["数字を見ない職場","感覚だけで判断する環境","改善の余地がない仕事"],
  },
  strategy: {
    name: "戦略設計型", nick: "盤面見すぎる将棋ゴリラ",
    catch: "全体像が見える人は、組織にひとりだけです。",
    desc: "目の前の作業だけでなく、全体の流れや勝ち筋を考えるのが得意なタイプです。仕組み化や改善設計に強みがあります。ただし、盤面を見すぎて初手が遅れることがあります。",
    goodJobs: ["戦略設計","業務改善","事業設計","コンサル補佐","Web導線設計"],
    goodEnv:  ["全体設計に関われる環境","仕組み化できる環境","改善提案が歓迎される環境"],
    badEnv:   ["場当たり的な仕事","全体像が見えない仕事","考える時間が与えられない環境"],
  },
  creative: {
    name: "クリエイター型", nick: "センスで殴るカメレオン",
    catch: "センスは才能ではなく、積み重ねた観察の結果です。",
    desc: "文章、画像、動画、デザインなど、表現で力を発揮するタイプです。見せ方や伝え方を工夫することに向いています。ただし、センスだけで殴ると伝わらないこともあるので、目的との接続が大切です。",
    goodJobs: ["デザイナー","動画編集","ライター","SNS運用","LP制作"],
    goodEnv:  ["表現の自由がある環境","制作物が評価される環境","世界観を作れる環境"],
    badEnv:   ["表現の自由が少ない仕事","毎日同じ作業だけの仕事","創意工夫が評価されない職場"],
  },
  branding: {
    name: "世界観職人型", nick: "雰囲気こねくりパンダ",
    catch: "世界観を作れる人は、消耗戦に参加しなくていいです。",
    desc: "ブランド感、空気感、見せ方へのこだわりが強いタイプです。世界観を整え、人に印象を残す仕事に向いています。ただし、こねくりすぎると完成が遅くなるので注意です。",
    goodJobs: ["SNSブランディング","美容・飲食・アパレル系の発信設計","デザイン","店舗ブランディング"],
    goodEnv:  ["見た目や印象が大切にされる環境","ブランド作りに関われる環境"],
    badEnv:   ["雑な見せ方を許容する職場","見た目や印象が軽視される仕事","スピードだけを求められる環境"],
  },
  support: {
    name: "サポート安定型", nick: "ネッチョリ納豆マン",
    catch: "縁の下がなければ、組織は1日で崩れます。",
    desc: "粘り強く支えて、途中で投げ出さないタイプです。派手な主役より、裏側で信頼を積み上げる仕事に向いています。ただし、抱え込みすぎると自分が納豆みたいに絡まります。",
    goodJobs: ["事務","秘書","カスタマーサポート","営業事務","運用アシスタント"],
    goodEnv:  ["役割が明確な環境","丁寧さが評価される環境","継続力が活きる環境"],
    badEnv:   ["常に変化する職場","曖昧な指示が多い環境","スピードだけを求められる仕事"],
  },
  organize: {
    name: "段取り管理型", nick: "予定表握りしめるリス",
    catch: "整理できる人は、混乱している現場の最強戦力です。",
    desc: "スケジュール、タスク、抜け漏れ管理が得意なタイプです。混乱した状況を整理する力があります。ただし、予定が崩れると心の中でリスが暴れます。",
    goodJobs: ["進行管理","ディレクター補佐","営業事務","PM補佐","運用管理"],
    goodEnv:  ["スケジュール管理が必要な環境","タスク整理が評価される環境"],
    badEnv:   ["予定が毎回変わる職場","確認せずに進む文化","責任範囲が曖昧な仕事"],
  },
  freedom: {
    name: "自由裁量型", nick: "首輪ムリムリ野良猫",
    catch: "管理されるほど力が落ちるなら、働く場所を選ぶべきです。",
    desc: "細かく管理されるより、自分で決めて動く方が強いタイプです。自由度があるほど力を発揮しやすい傾向があります。逆に、首輪をつけられると急に弱ります。",
    goodJobs: ["業務委託","フリーランス","副業","営業代行","個人事業"],
    goodEnv:  ["裁量がある環境","成果で評価される環境","やり方を任せてもらえる環境"],
    badEnv:   ["細かく管理される職場","自由度が低い仕事","やり方を固定される環境"],
  },
  pioneer: {
    name: "独立開拓型", nick: "地図読まない冒険キツネ",
    catch: "地図のない場所に進める人は、希少中の希少です。",
    desc: "決まった道を進むより、自分で道を作ることに面白さを感じるタイプです。新しい領域を開拓する仕事に向いています。ただし、地図を読まなすぎると普通に迷子になります。",
    goodJobs: ["個人事業","起業","新規開拓営業","新規事業","副業型キャリア"],
    goodEnv:  ["挑戦できる環境","新しいことを試せる環境","裁量がある環境"],
    badEnv:   ["前例通りしか動けない職場","挑戦が評価されない環境","裁量が少ない仕事"],
  },
  harmony: {
    name: "調整バランス型", nick: "空気読みすぎ甲羅カメ",
    catch: "空気を読む力は才能です。ただし、読みすぎると自分の意思が甲羅の中に消えます。",
    desc: "人間関係や場の空気を読むのが得意なタイプです。人と人の間に入り、バランスを取る仕事に向いています。ただし、空気を読みすぎて本音を甲羅の中にしまい込み、自分の意思が見えなくなりやすい傾向があります。",
    goodJobs: ["人事","採用","カスタマーサポート","チーム調整","店舗運営"],
    goodEnv:  ["人間関係を整える力が評価される環境","調整役が必要な環境","気配りが活きる環境"],
    badEnv:   ["人間関係が荒い職場","意見を強く押し切る文化","気配りが評価されない環境"],
  },
  specialist: {
    name: "専門追求型", nick: "一点掘りモグラ職人",
    catch: "深さは、広さより強い。磨き続ける人はそのことを知っています。",
    desc: "一つの分野を深く掘ることに向いているタイプです。専門性や技術を積み上げる仕事で力を発揮します。ただし、掘りすぎて周りが見えなくならないように注意です。",
    goodJobs: ["エンジニア","士業補助","技術職","専門職","研究・分析系の仕事"],
    goodEnv:  ["専門性が評価される環境","集中できる環境","長期的にスキルを磨ける環境"],
    badEnv:   ["広く浅く対応する仕事","頻繁に役割が変わる職場","専門性が評価されない環境"],
  },
};

// ============================================================
// 4状態タイプ
// ============================================================
const STATE_TYPES = {
  fit: {
    name: "現職フィット型",
    stateDesc: "今の仕事とのズレは比較的少ない状態です。今すぐ退職を考えるより、今の環境で強みを伸ばしたり、条件改善を狙う方向が現実的です。",
    compatibility: "今の仕事との相性は比較的良好です。強みが活かせる環境への投資と、キャリアパスの言語化がこれからのテーマです。",
    next: [
      "自分の強みを言語化して周囲に伝えてみる",
      "今の職場でのキャリアパスを上司と話し合ってみる",
      "さらに力を伸ばせる副業・研修・資格を探してみる",
    ],
    cta: { label: "向いている仕事の詳しい解説を見る", sub: "今の場所でキャリアを最大化するヒント" },
    ctaType: "fit",
    sharp: "あなたが弱いのではなく、今の環境があなたの強みを殺している可能性があります。",
  },
  moya: {
    name: "モヤモヤ見直し型",
    stateDesc: "今の仕事に違和感はあるものの、まだ退職や転職を決める前に整理が必要な状態です。向いている仕事・副業・働き方の選択肢を見直す段階です。",
    compatibility: "今の仕事との相性は中程度です。環境や働き方を少し変えるだけで、体感が大きく変わる可能性があります。",
    next: [
      "仕事の何が合っていて何が合っていないかを書き出す",
      "副業・社内異動など小さな変化から始めてみる",
      "同じ職種の転職事例を調べてみる（情報収集だけでもOK）",
    ],
    cta: { label: "今後の働き方を整理する", sub: "転職前に試せることを確認する" },
    ctaType: "moya",
    sharp: "頑張る方向を間違えると、成果より先にメンタルが削られます。",
  },
  mismatch: {
    name: "現職ミスマッチ型",
    nick: "水槽まちがえた金魚",
    stateDesc: "今の職場との相性が低く、気持ちの重さや将来不安が強くなっている可能性があります。勢いで動くより、転職・退職前にお金・制度・次の働き方を整理することが大切です。",
    compatibility: "今の仕事との相性にズレが生じています。能力不足ではなく、環境との相性かもしれません。",
    next: [
      "退職・転職を「するかしないか」ではなく「いつするか」で考えてみる",
      "転職エージェントに登録して話だけ聞いてみる",
      "退職前に確認すべき給付金・手当の情報を調べておく",
    ],
    cta: { label: "退職前のお金チェックに進む", sub: "辞めるかどうかより、まず整理すべきことがあります" },
    ctaType: "mismatch",
    sharp: "向いていない環境で努力しても、評価される前に疲れ切ることがあります。",
  },
  retire: {
    name: "退職準備優先型",
    nick: "崖前で財布見るペンギン",
    stateDesc: "今の職場とのミスマッチが高く、収入や制度への不安も強い状態です。退職を考える場合は、まず生活費・雇用保険・離職票・手続き時期などを整理してから判断するのがおすすめです。",
    compatibility: "今の職場との相性より、まず自分を守る選択肢の整理が優先の状態です。",
    next: [
      "信頼できる人に現状を正直に話す（一人で抱え込まない）",
      "有給・休職制度の残日数を今日確認する",
      "退職前に受け取れる可能性のある給付金・手当を調べておく",
    ],
    cta: { label: "退職前に確認すべきお金と手続きを無料でチェックする", sub: "辞めるかどうかより、まず整理すべきことがあります" },
    ctaType: "retire",
    sharp: "辞めるかどうかより、まずはお金・制度・次の選択肢を整理することが大切です。",
  },
};

// ============================================================
// 追加チェック7問
// ============================================================
const CHECK_QUESTIONS = [
  {
    text: "現在の雇用形態を教えてください",
    choices: ["正社員", "契約社員", "アルバイト・パート", "業務委託・フリーランス"],
  },
  {
    text: "今の会社での勤務期間を教えてください",
    choices: ["6ヶ月未満", "6ヶ月〜1年未満", "1年〜3年未満", "3年以上"],
  },
  {
    text: "雇用保険に加入していると思いますか？",
    choices: ["加入している", "給与明細に雇用保険の記載がある", "わからない", "入っていないと思う"],
  },
  {
    text: "直近の月収を教えてください",
    choices: ["15万円未満", "15万〜25万円", "25万〜35万円", "35万円以上"],
  },
  {
    text: "退職状況に近いものを選んでください",
    choices: ["まだ退職していない", "退職予定日が決まっている", "すでに退職した", "会社と退職の話し合い中"],
  },
  {
    text: "退職理由に一番近いものを選んでください",
    choices: ["自分の都合で辞めたい", "解雇・雇い止め・退職勧奨", "体調不良・家庭事情・通勤困難など", "まだ決まっていない"],
  },
  {
    text: "退職後、働く意思はありますか？",
    choices: ["すぐ働きたい", "少し休んでから働きたい", "転職活動はする予定", "まだわからない"],
  },
];

// ============================================================
// STATE
// ============================================================
const STEP_SIZE   = 12;
const TOTAL_STEPS = 3;

let currentStep   = 0;
let answers       = new Array(QUESTIONS.length).fill(null);
let currentCheckQ = 0;
let checkAnswers  = {};
let analysisData  = {};
let demographics  = { age: null, employment: null, industry: null };

// ============================================================
// 画面切り替え
// ============================================================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// ============================================================
// 属性質問（デモグラフィクス）
// ============================================================
function showDemographics() {
  demographics = { age: null, employment: null, industry: null };
  showScreen('screen-demographics');
  window.scrollTo(0, 0);
}

function selectDemo(field, value) {
  demographics[field] = demographics[field] === value ? null : value;
  document.querySelectorAll(`#demo-${field} .demo-chip`).forEach(btn => {
    btn.classList.toggle('selected', btn.textContent.trim() === demographics[field]);
  });
}

// ============================================================
// 診断クイズ（12問×3ステップ、最終ステップは11問）
// ============================================================
function startQuiz() {
  currentStep = 0;
  answers     = new Array(QUESTIONS.length).fill(null);
  showScreen('screen-quiz');
  renderStep();
  window.scrollTo(0, 0);
}

function renderStep() {
  const start = currentStep * STEP_SIZE;
  const end   = Math.min(start + STEP_SIZE, QUESTIONS.length);

  // ヘッダー
  document.getElementById('step-label').textContent    = `STEP ${currentStep + 1} / ${TOTAL_STEPS}`;
  const totalAnswered = answers.filter(a => a !== null).length;
  document.getElementById('step-progress').textContent = `${totalAnswered} / ${QUESTIONS.length}問完了`;
  document.getElementById('progress-fill').style.width = `${(start / QUESTIONS.length) * 100}%`;
  document.getElementById('btn-back').disabled = currentStep === 0;

  // 質問リスト
  const stepQs = QUESTIONS.slice(start, end);
  document.getElementById('step-questions').innerHTML = stepQs.map((q, idx) => {
    const gi  = start + idx;
    const sel = answers[gi];
    const scaleLabels = [
      '全く当てはまらない',
      'あまり当てはまらない',
      'どちらとも言えない',
      'やや当てはまる',
      'とても当てはまる',
    ];
    return `
      <div class="question-row" data-gi="${gi}">
        <div class="q-meta">
          <span class="q-num-badge">Q${gi + 1}</span>
        </div>
        <p class="q-text">${q.text}</p>
        <div class="scale-wrap">
          <div class="scale-buttons">
            ${[1,2,3,4,5].map(v => `
              <button
                class="scale-btn${sel === v ? ' selected' : ''}"
                onclick="selectStepChoice(${gi}, ${v})"
                aria-label="${scaleLabels[v-1]}"
              >${v}</button>
            `).join('')}
          </div>
          <div class="scale-labels">
            <span>全く当てはまらない</span>
            <span>とても当てはまる</span>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateStepNextButton();
}

function selectStepChoice(gi, val) {
  answers[gi] = val;

  // その設問のボタンだけ更新
  const row = document.querySelector(`.question-row[data-gi="${gi}"]`);
  if (row) {
    row.querySelectorAll('.scale-btn').forEach((btn, i) => {
      btn.classList.toggle('selected', i + 1 === val);
    });
  }

  // 進捗テキスト更新
  const totalAnswered = answers.filter(a => a !== null).length;
  document.getElementById('step-progress').textContent = `${totalAnswered} / ${QUESTIONS.length}問完了`;

  updateStepNextButton();
}

function updateStepNextButton() {
  const start = currentStep * STEP_SIZE;
  const allAnswered = answers.slice(start, Math.min(start + STEP_SIZE, QUESTIONS.length)).every(a => a !== null);
  const btn = document.getElementById('btn-next');
  btn.disabled    = !allAnswered;
  btn.textContent = currentStep === TOTAL_STEPS - 1 ? '結果を見る' : `STEP ${currentStep + 2} へ進む →`;
}

function nextStep() {
  const start = currentStep * STEP_SIZE;
  if (!answers.slice(start, Math.min(start + STEP_SIZE, QUESTIONS.length)).every(a => a !== null)) return;
  if (currentStep === TOTAL_STEPS - 1) {
    calcAndShowResult();
  } else {
    currentStep++;
    renderStep();
    window.scrollTo(0, 0);
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
    window.scrollTo(0, 0);
  }
}

// ============================================================
// スコア計算・結果判定
// ============================================================
function calcAndShowResult() {
  const axTotals = {};
  const axCounts = {};
  QUESTIONS.forEach((q, i) => {
    if (answers[i] !== null) {
      axTotals[q.axis] = (axTotals[q.axis] || 0) + answers[i];
      axCounts[q.axis] = (axCounts[q.axis] || 0) + 1;
    }
  });

  const axAvgs = {};
  Object.keys(axTotals).forEach(k => {
    axAvgs[k] = +(axTotals[k] / axCounts[k]).toFixed(2);
  });

  // Bayesian補正スコア（設問数の差による偏りを統計的に補正）
  // 1問軸は単一回答に引きずられやすいため、中立値3.0の疑似観測α=1.5を加算
  // 表示用は axAvgs（生スコア）、タイプ判定のみ axAdj を使用
  const BAYES_ALPHA = 1.5, BAYES_MU = 3.0;
  const axAdj = {};
  Object.keys(axTotals).forEach(k => {
    axAdj[k] = (axTotals[k] + BAYES_ALPHA * BAYES_MU) / (axCounts[k] + BAYES_ALPHA);
  });

  const sorted   = [...CAREER_AXIS_KEYS].sort((a, b) => (axAdj[b] || 0) - (axAdj[a] || 0));
  const mainAxis = sorted[0];
  const subAxis  = sorted[1];

  const mismatchAvg = axAvgs['mismatch'] || 1;
  const anxietyAvg  = axAvgs['anxiety']  || 1;

  let stateKey;
  if      (mismatchAvg >= 4.3 && anxietyAvg >= 4.0) stateKey = 'retire';
  else if (mismatchAvg >= 4.3)                       stateKey = 'mismatch';
  else if (mismatchAvg >= 3.3)                       stateKey = 'moya';
  else                                               stateKey = 'fit';

  const jt  = JOB_TYPE_DATA[mainAxis];
  const sub = JOB_TYPE_DATA[subAxis];
  const st  = STATE_TYPES[stateKey];

  analysisData = {
    timestamp:    new Date().toISOString(),
    rawAnswers:   QUESTIONS.map((q, i) => ({ q: i+1, text: q.text, axis: q.axis, value: answers[i] })),
    axisScores:   { ...axTotals },
    axisAverages: { ...axAvgs  },
    mainTypeAxis: mainAxis,
    mainTypeName: jt.name,
    mainTypeNick: jt.nick,
    subTypeAxis:  subAxis,
    subTypeName:  sub.name,
    subTypeNick:  sub.nick,
    mismatchAvg,
    anxietyAvg,
    stateKey,
    stateTypeName:      st.name,
    ctaType:            st.ctaType,
    combinedResultName: `${jt.nick} × ${st.name}`,
    resultLabel:        `${jt.name} × ${st.name}`,
    axisAdjusted:       { ...axAdj },
    demographics:       { ...demographics },
    enteredMoneyCheck:  false,
    moneyCheckAnswers:  null,
    moneyCheckLabels:   null,
    lineClicked:        false,
    feedbackScore:      null,
  };

  console.log('=== 診断完了 ===', JSON.parse(JSON.stringify(analysisData)));
  showResult(mainAxis, subAxis, stateKey);
}

function showResult(mainAxis, subAxis, stateKey) {
  const jt  = JOB_TYPE_DATA[mainAxis];
  const sub = JOB_TYPE_DATA[subAxis];
  const st  = STATE_TYPES[stateKey];
  const $   = id => document.getElementById(id);

  $('badge-type').textContent         = jt.name;
  $('badge-nick').textContent         = `「${jt.nick}」`;
  const charImg = $('result-char-img');
  charImg.src   = `./images/${jt.nick}.PNG`;
  charImg.alt   = jt.nick;
  charImg.style.display = '';
  $('result-state-badge').textContent = st.name;
  $('result-state-badge').className   = `state-badge state-${st.ctaType}`;
  $('badge-result').textContent       = `${jt.nick} × ${st.name}`;
  $('badge-catch').textContent        = jt.catch;

  $('r-desc').textContent          = jt.desc;
  $('r-state-desc').textContent    = st.stateDesc;
  $('r-compatibility').textContent = st.compatibility;
  $('sharp-text').textContent      = st.sharp;

  $('tags-sub').innerHTML     = `<span class="tag sub">${sub.name}</span><span class="tag sub">${sub.nick}</span>`;
  $('tags-good').innerHTML    = jt.goodJobs.map(t => `<span class="tag good">${t}</span>`).join('');
  $('tags-goodenv').innerHTML = jt.goodEnv.map(t  => `<span class="tag good">${t}</span>`).join('');
  $('tags-bad').innerHTML     = jt.badEnv.map(t   => `<span class="tag bad">${t}</span>`).join('');
  $('next-list').innerHTML    = st.next.map(n => `<li>${n}</li>`).join('');

  const needsCheck = st.ctaType === 'mismatch' || st.ctaType === 'retire';
  const ctaOnclick = needsCheck
    ? 'onclick="startCheck()"'
    : `onclick="window.open('${LINE_URL}','_blank');trackLineClick()"`;
  $('cta-block').className = `cta-block cta-${st.ctaType}`;
  $('cta-block').innerHTML = `
    <p class="cta-sub">${st.cta.sub}</p>
    <button class="cta-btn" ${ctaOnclick}>${st.cta.label}</button>
  `;
  $('result-line-section').innerHTML = `
    <p class="line-title">LINE 無料チェック</p>
    <p class="line-desc">診断結果をもとに、確認すべきお金・制度・働き方のポイントをLINEで無料チェックできます。</p>
    <a class="line-btn result-line-btn" href="${LINE_URL}" target="_blank" rel="noopener noreferrer" onclick="trackLineClick()">LINEで無料チェックを受ける</a>
  `;

  showScreen('screen-result');
  window.scrollTo(0, 0);
  renderScoreReport(analysisData.axisAverages, mainAxis);
}

function renderScoreReport(axAvgs, mainAxis) {
  const AXIS_LABELS = {
    sales:      '営業突破力',
    empathy:    '共感提案力',
    planning:   '企画マーケ力',
    venture:    '事業プロデュース力',
    analytics:  '分析改善力',
    strategy:   '戦略設計力',
    creative:   'クリエイター力',
    branding:   '世界観構築力',
    support:    'サポート安定力',
    organize:   '段取り管理力',
    freedom:    '自由裁量志向',
    pioneer:    '独立開拓力',
    harmony:    '調整バランス力',
    specialist: '専門追求力',
  };

  const toPct = avg => Math.round((avg || 1) / 5 * 100);

  const careerRows = (() => {
    const rows = CAREER_AXIS_KEYS
      .map(k => ({ label: AXIS_LABELS[k], pct: toPct(axAvgs[k]), isMain: k === mainAxis }));
    const main  = rows.filter(r => r.isMain);
    const rest  = rows.filter(r => !r.isMain).sort((a, b) => b.pct - a.pct).slice(0, 7);
    return [...main, ...rest];
  })();

  const barHTML = (label, pct, isMain, sub) => `
    <div class="score-row${isMain ? ' score-row-main' : ''}">
      <div class="score-row-head">
        <span class="score-label">${label}</span>
        <span class="score-value">${pct}%</span>
      </div>
      <div class="score-track">
        <div class="score-fill" data-pct="${pct}"></div>
      </div>
      ${sub ? `<p class="score-sub">${sub}</p>` : ''}
    </div>`;

  document.getElementById('score-bars').innerHTML =
    careerRows.map(i => barHTML(i.label, i.pct, i.isMain, null)).join('');

  requestAnimationFrame(() => {
    document.querySelectorAll('#score-summary .score-fill, #score-bars .score-fill').forEach(el => {
      el.style.width = el.dataset.pct + '%';
    });
  });

  analysisData.scorePercents = {
    strength:      toPct(axAvgs[mainAxis]),
    compatibility: Math.round((5 - (axAvgs['mismatch'] || 1)) / 5 * 100),
    anxiety:       toPct(axAvgs['anxiety'] || 1),
    freedom:       toPct(axAvgs['freedom']),
    career:        Object.fromEntries(CAREER_AXIS_KEYS.map(k => [k, toPct(axAvgs[k])])),
  };
}

function submitFeedback(score) {
  analysisData.feedbackScore = score;
  document.querySelectorAll('.fb-star').forEach((btn, i) => {
    btn.classList.toggle('selected', i + 1 === score);
  });
  document.getElementById('feedback-thanks').style.display = 'block';
  console.log('=== フィードバック ===', { feedbackScore: score, resultType: analysisData.mainTypeName });
}

function restart() {
  showScreen('screen-landing');
  window.scrollTo(0, 0);
}

// ============================================================
// 追加チェック（退職前のお金チェック）
// ============================================================
function startCheck() {
  currentCheckQ = 0;
  checkAnswers  = {};
  analysisData.enteredMoneyCheck = true;
  showScreen('screen-check');
  renderCheckQuestion();
  window.scrollTo(0, 0);
}

function renderCheckQuestion() {
  const q     = CHECK_QUESTIONS[currentCheckQ];
  const total = CHECK_QUESTIONS.length;
  const pct   = Math.round(((currentCheckQ + 1) / total) * 100);

  document.getElementById('ck-label').textContent          = `質問 ${currentCheckQ + 1} / ${total}`;
  document.getElementById('ck-pct').textContent            = `${pct}%`;
  document.getElementById('ck-progress-fill').style.width  = `${pct}%`;
  document.getElementById('ck-num').textContent            = `Q${currentCheckQ + 1}`;
  document.getElementById('ck-text').textContent           = q.text;

  const sel = checkAnswers[currentCheckQ];
  document.getElementById('ck-choices').innerHTML = q.choices.map((c, i) => `
    <button class="check-choice${sel === i ? ' selected' : ''}" onclick="selectCheckChoice(${i})">
      <span class="check-dot"></span><span>${c}</span>
    </button>
  `).join('');

  document.getElementById('ck-back').disabled = currentCheckQ === 0;
  updateCheckNextButton();
}

function selectCheckChoice(idx) {
  checkAnswers[currentCheckQ] = idx;
  document.querySelectorAll('.check-choice').forEach((el, i) => {
    el.classList.toggle('selected', i === idx);
  });
  updateCheckNextButton();
}

function updateCheckNextButton() {
  const btn = document.getElementById('ck-next');
  btn.disabled    = checkAnswers[currentCheckQ] === undefined;
  btn.textContent = currentCheckQ === CHECK_QUESTIONS.length - 1 ? '確認事項を見る' : '次へ →';
}

function nextCheckQuestion() {
  if (checkAnswers[currentCheckQ] === undefined) return;
  if (currentCheckQ === CHECK_QUESTIONS.length - 1) {
    showCheckResult();
  } else {
    currentCheckQ++;
    renderCheckQuestion();
  }
}

function prevCheckQuestion() {
  if (currentCheckQ > 0) { currentCheckQ--; renderCheckQuestion(); }
}

function showCheckResult() {
  analysisData.moneyCheckAnswers = { ...checkAnswers };
  analysisData.moneyCheckLabels  = CHECK_QUESTIONS.map((q, i) => ({
    question: q.text,
    answer:   q.choices[checkAnswers[i]],
  }));

  console.log('=== チェック完了 ===', JSON.parse(JSON.stringify(analysisData)));

  document.getElementById('check-items-list').innerHTML = generateCheckItems().map(item => `
    <div class="check-item">
      <p class="check-item-title">${item.title}</p>
      <p class="check-item-content">${item.content}</p>
    </div>
  `).join('');

  showScreen('screen-check-result');
  window.scrollTo(0, 0);
}

function trackLineClick() {
  analysisData.lineClicked = true;
  console.log('=== LINEクリック ===', JSON.parse(JSON.stringify(analysisData)));
}

function generateCheckItems() {
  const emp      = checkAnswers[0];
  const duration = checkAnswers[1];
  const ins      = checkAnswers[2];
  const income   = checkAnswers[3];
  const status   = checkAnswers[4];
  const reason   = checkAnswers[5];
  const intent   = checkAnswers[6];

  return [
    {
      title: "雇用保険の加入状況",
      content: (ins === 3 || emp === 3)
        ? "雇用保険の加入対象外の可能性があります。週20時間以上・31日以上の雇用見込みがあれば加入義務があります。詳細はハローワークへ確認することをおすすめします。"
        : ins === 2
          ? "給与明細や会社への問い合わせで、雇用保険被保険者番号の有無を確認しましょう。加入していた場合、退職時に「雇用保険被保険者証」の受け取りが必要です。"
          : "雇用保険に加入していることが確認できています。退職時に「雇用保険被保険者証」と「離職票」を会社から受け取るよう、事前に依頼しておきましょう。",
    },
    {
      title: "勤務期間と受給条件",
      content: duration === 0
        ? "一般的に雇用保険の基本手当を受給するには、離職前2年間に12ヶ月以上の被保険者期間が必要です。勤務期間が6ヶ月未満の場合、条件を満たさない可能性があります。ハローワークで正確な状況を確認してください。"
        : duration === 1
          ? "特定理由離職者に該当する場合、6ヶ月以上の被保険者期間で受給できるケースがあります。退職理由によって条件が変わるため、ハローワークで確認してください。"
          : "受給条件を満たしている可能性が高い勤務期間です。退職後は早めにハローワークへ手続きに行きましょう。",
    },
    {
      title: "退職理由の確認",
      content: reason === 0
        ? "自己都合退職の場合、ハローワーク登録後に給付制限期間が発生する場合があります。退職前に生活費の確保を十分に行ってください。"
        : reason === 1
          ? "会社都合・解雇・退職勧奨の場合、給付制限なしで早期に受給できる可能性があります。離職票に記載された退職理由を必ず確認し、事実と異なる場合はハローワーク窓口に相談しましょう。"
          : reason === 2
            ? "病気・家庭事情などによる退職は「特定理由離職者」に該当する可能性があります。自己都合でも給付制限が免除されるケースがあります。ハローワークで相談してください。"
            : "退職理由によって受給の条件・時期が変わります。退職が決まったら早めにハローワークで確認しましょう。",
    },
    {
      title: "離職票の内容",
      content: "退職後に会社から発行される「離職票（1・2）」はハローワークでの手続きに必須の書類です。発行に2週間前後かかる場合があります。退職理由の記載内容が事実と異なると感じた場合は、ハローワーク窓口に相談することができます。",
    },
    {
      title: "退職後の生活費",
      content: income === 0
        ? "月収が低めの場合、退職後の生活費の確保が特に重要です。失業給付を受給できる場合でも、初回支給まで時間がかかります。最低でも2〜3ヶ月分の生活費を確保しておくことをおすすめします。"
        : income === 3
          ? "収入水準が高い場合でも、退職後の社会保険切り替えや翌年の住民税（在職中の収入をもとに算定）への備えが必要です。"
          : "退職後は国民健康保険・国民年金の支払いも始まります。収入がゼロになる期間の生活費として、3〜6ヶ月分の準備をしておくと安心です。",
    },
    {
      title: "ハローワークでの手続き時期",
      content: status === 2
        ? "すでに退職している場合、できるだけ早くハローワークへ求職申込みを行うことをおすすめします。手続きが遅れると受給可能期間が短くなる可能性があります。"
        : status === 0 || status === 3
          ? "退職後は速やかに（原則として退職翌日から）ハローワークへ手続きに行くことが推奨されます。必要書類（離職票・雇用保険被保険者証・写真・印鑑・本人確認書類）を事前に確認しておきましょう。"
          : "退職予定日が確定したら、必要書類の準備を進めておきましょう。早めに動くことで、受給開始が早まる場合があります。",
    },
    {
      title: "次の働き方",
      content: intent === 1
        ? "体を休めることも大切です。ただし、失業給付を受けるためには「働く意思と能力がある状態」であることが条件です。求職活動ができる状態になったらハローワークへ相談しましょう。"
        : intent === 3
          ? "まだ方向性が決まっていない場合でも、手続きには期限があります。退職後は早めにハローワークへ相談し、状況を伝えることをおすすめします。"
          : "失業給付を受けながら就職・転職活動をするためには、定期的な求職活動の実績が必要です。ハローワークでの認定日を確認しながら活動しましょう。",
    },
  ];
}
