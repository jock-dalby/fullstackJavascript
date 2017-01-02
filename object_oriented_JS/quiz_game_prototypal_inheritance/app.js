const questions = [
  new Question("A or B", ["A", "B"], "B"),
  new Question("A or B", ["A", "B"], "A")
];

const quiz = new Quiz(questions);

QuizUI.displayNext();
