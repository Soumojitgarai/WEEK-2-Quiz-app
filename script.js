const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin", "Madrid"],
      correctAnswer: "Paris"
    },
    {
        question: "What does HTML stand for?",
        answers: ["HyperText Markup Language", "HyperText Machine Language", "HyperTool Markup Language", "HyperText Main Language"],
        correctAnswer: "HyperText Markup Language"
      },
      {
        question: "Which JavaScript framework is maintained by Facebook?",
        answers: ["next js", "Angular", "React", "Mmber"],
        correctAnswer: "React"
      },
      {
        question: "Name a popular NoSQL database.",
        answers: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
        correctAnswer: "MongoDB"
      },
      {
        question: "What is the primary use of SQL?",
        answers: ["Designing web pages", "Managing and querying relational databases", "Creating mobile apps", "Writing server-side scripts"],
        correctAnswer: "Managing and querying relational databases"
      },
      {
        question: "Which company developed the V8 JavaScript engine?",
        answers: ["Microsoft", "Apple", "Google", "Mozilla"],
        correctAnswer: "Google"
      },
      {
        question: "What is the main purpose of Node.js?",
        answers: ["To create mobile applications", " To execute JavaScript code server-side", "To design user interfaces", "To design user interfaces"],
        correctAnswer: " To execute JavaScript code server-side"
      },
      {
        question: "Which language is primarily used for Android app development?",
        answers: ["Swift", "Java (or Kotlin)", "Python", "Ruby"],
        correctAnswer: "PJava (or Kotlin)"
      },
      {
        question: "What is the name of Apple,s programming language for iOS development?",
        answers: ["Objective-C", "Swift", "C#", "JavaScript"],
        correctAnswer: "Swift"
      },
       {
      question: "What does API stand for?",
      answers: ["Application Programming Interface", "Application Process Interface", "Application Protocol Interface", "Application Program Interface"],
      correctAnswer: " Application Programming Interface"
    },
    // Add more questions here
  ];
  
  
  const questionElement = document.getElementById('question');
  const answerButtons = document.getElementById('answer-buttons');
  const nextButton = document.getElementById('next-btn');
  const scoreElement = document.getElementById('score');
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    showQuestion();
  }
  
  function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerText = questionNo + '. ' + currentQuestion.question;
  
    currentQuestion.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer;
      button.classList.add('btn');
      button.addEventListener('click', () => selectAnswer(button.innerText));
      answerButtons.appendChild(button);
    });
  }
  
  function resetState() {
    nextButton.style.display = 'none';
    while (answerButtons.firstChild) {
      answerButtons.removeChild(answerButtons.firstChild);
    }
  }

  function selectAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      score++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    resetState();
    questionElement.innerText = `You scored ${score} out of ${questions.length}`;
    displayAnswers();
  }
  
  function displayAnswers() {
    questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.innerText = `${index + 1}. ${question.question} - Correct Answer: ${question.correctAnswer}`;
      answerButtons.appendChild(questionElement);
    });
  }
 
  
  startQuiz();

  /*"The correct answers are: 
  1. Paris
  2. HyperText Markup Language
  3. React
  4. MongoDB
  5. Managing and querying relational databases
  6. Google
  7. To execute JavaScript code server-side
  8. Java (or Kotlin)
  9. Swift
  10. Application Programming Interface"*/