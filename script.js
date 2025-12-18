let currentQuestionIndex = 0;
let answersInPage = 0;

const score = {
  strategist: 0,
  wanderer: 0,
  guardian: 0,
  sage: 0,
  artist: 0,
  ruler: 0
};

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const progressText = document.getElementById("progress");
const nextButton = document.getElementById("next-btn");
const quizContainer = document.getElementById("quiz");
const resultContainer = document.getElementById("result");

function showQuestion() {
  const q = questions[currentQuestionIndex];

  questionText.textContent = q.text;
  optionsContainer.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option.text;
    btn.className = "option-btn";
    btn.onclick = () => selectOption(option.type);
    optionsContainer.appendChild(btn);
  });

  progressText.textContent = `${currentQuestionIndex + 1} / ${questions.length}`;
  nextButton.style.display = "none";
}

function selectOption(type) {
  score[type]++;
  answersInPage++;

  // 次の質問へ
  currentQuestionIndex++;

  // 5問ごとに「次へ」ボタン表示
  if (answersInPage === 5) {
    nextButton.style.display = "block";
    answersInPage = 0;
  } else {
    showQuestion();
  }

  // 全問終了
  if (currentQuestionIndex >= questions.length) {
    showResult();
  }
}

nextButton.addEventListener("click", () => {
  showQuestion();
});

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";

  // メインタイプ決定
  const sorted = Object.entries(score).sort((a, b) => b[1] - a[1]);
  const mainType = sorted[0][0];
  const subType = sorted[1][0];

  const resultKey = `${mainType}_${subType}`;

  // 仮表示（results.js 後で差し替え）
  resultContainer.innerHTML = `
    <h2>あなたの前世タイプ</h2>
    <h1>${mainType} × ${subType}</h1>
    <p>あなたの前世は、この2つの性質を併せ持つ存在でした。</p>
    <p>結果は後日さらに詳細になります。</p>
  `;
}

// 初期表示
showQuestion();
