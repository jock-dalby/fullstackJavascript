const QuizUI = {
  displayNext: function () {
    if (quiz.hasEnded()) {
      this.displayScore();
    } else {
      this.displayQuestion();
      this.displayChoices();
      this.displayProgress();
    }
  },
  displayQuestion: function() {
    this.populateIdWithHTML("question", quiz.getCurrentQuestion().text);
  },
  displayChoices: function() {
    const choices = quiz.getCurrentQuestion().choices;

    for (let i = 0; i < choices.length; i++) {
      this.populateIdWithHTML("choice" + i, choices[i]);
      this.guessHandler("guess" + i, choices[i]);
    }
  },
  displayScore: function() {
    let gameOverHTML ="<h1>GameOver</h1>";
    gameOverHTML += "<h2> Your score is : " + quiz.score + "</h2>";
    this.populateIdWithHTML("quiz", gameOverHTML);
  },

  populateIdWithHTML: function(id, text) {
    const element = document.getElementById(id);
    element.innerHTML = text;
  },
  guessHandler: function(id, guess) {
    const button = document.getElementById(id);
    button.onclick = function () {
      quiz.guess(guess);
      QuizUI.displayNext();
    }
  },
  displayProgress: function () {
    const currentQuestionNumber = quiz.currentQuestionIndex + 1;
    this.populateIdWithHTML("progress", "Question " + currentQuestionNumber + " of " + quiz.questions.length);
  }
}
