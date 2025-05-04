const quizData = [
  {
    question: "Which of the following is used to define a function in Python?",
    options: ["func", "function", "def", "define"],
    answer: "def",
  },
  {
    question: "What is the default value of a boolean variable in Java?",
    options: ["true", "false", "0", "undefined"],
    answer: "false",
  },
  {
    question:
      "In C++, what is the size of an integer data type on a 64-bit system?",
    options: ["2 bytes", "4 bytes", "8 bytes", "16 bytes"],
    answer: "4 bytes",
  },
  {
    question:
      "Which of the following is a correct syntax to declare a constant in Java?",
    options: [
      "const int x = 5;",
      "final int x = 5;",
      "int final x = 5;",
      "constant int x = 5;",
    ],
    answer: "final int x = 5;",
  },
  {
    question:
      "Which of the following data types can be used to store a floating-point number in C?",
    options: ["float", "double", "long", "All of the above"],
    answer: "All of the above",
  },
  {
    question:
      "What is the output of the following Python code?\n\na = [1, 2, 3]\nb = a\nb[0] = 5\nprint(a)",
    options: ["[5, 2, 3]", "[1, 2, 3]", "[5, 2, 3] and b", "[5, 2, 3] and a"],
    answer: "[5, 2, 3]",
  },
  {
    question:
      'In JavaScript, what does the "this" keyword refer to inside a method?',
    options: [
      "The method itself",
      "The object that owns the method",
      "The global object",
      "Undefined",
    ],
    answer: "The object that owns the method",
  },
  {
    question: "Which of the following is true about a function in Python?",
    options: [
      "Functions must always return a value",
      "Functions can have default argument values",
      "Functions in Python can only take one argument",
      "Functions can only return numbers",
    ],
    answer: "Functions can have default argument values",
  },
  {
    question:
      "In C++, which of the following is the correct way to declare a pointer to an integer?",
    options: ["int *p;", "pointer int p;", "int p*;", "int pointer p;"],
    answer: "int *p;",
  },
  {
    question:
      "What is the time complexity of a binary search algorithm in the worst case?",
    options: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    answer: "O(log n)",
  },
  {
    question:
      "In Java, which of the following is used to define an abstract class?",
    options: [
      "abstract class ClassName",
      "interface ClassName",
      "abstract interface ClassName",
      "final class ClassName",
    ],
    answer: "abstract class ClassName",
  },
  {
    question:
      "Which of the following methods is used to add an element at the end of a list in Python?",
    options: ["add()", "append()", "insert()", "push()"],
    answer: "append()",
  },
  {
    question: 'What is the purpose of the "super" keyword in Java?',
    options: [
      "To call a method from the parent class",
      "To define a new class",
      "To initialize variables in a class",
      "To stop a loop",
    ],
    answer: "To call a method from the parent class",
  },
  {
    question:
      "In C, which header file is required to use the printf() function?",
    options: ["stdlib.h", "iostream.h", "conio.h", "stdio.h"],
    answer: "stdio.h",
  },
  {
    question: "Which of the following is true about Java arrays?",
    options: [
      "Arrays in Java can have elements of different data types",
      "Arrays in Java are dynamically sized",
      "The size of an array in Java cannot be changed after creation",
      "Arrays in Java do not store references to objects",
    ],
    answer: "The size of an array in Java cannot be changed after creation",
  },
  {
    question:
      'In Python, what is the output of the following code?\n\na = "Hello"\nb = "World"\nprint(a + b)',
    options: ["Hello World", "HelloWorld", "Error", "Hello + World"],
    answer: "HelloWorld",
  },
  {
    question:
      "Which of the following C++ classes are used to handle input/output?",
    options: ["inputstream", "outputstream", "cin and cout", "file stream"],
    answer: "cin and cout",
  },
  {
    question:
      'What is the result of the following JavaScript expression: 5 + "5"?',
    options: ["10", "55", '"55"', "Error"],
    answer: '"55"',
  },
  {
    question:
      "In C++, which of the following will allocate memory for a 2D array dynamically?",
    options: [
      "int **arr = new int[5][5];",
      "int arr[5][5];",
      "int *arr = new int[5 * 5];",
      "int *arr = new int[5][5];",
    ],
    answer: "int **arr = new int[5][5];",
  },
  {
    question:
      "Which of the following is the correct syntax for a while loop in Python?",
    options: [
      "while (x < 10) { }",
      "while x < 10:",
      "while x < 10 do { }",
      "while x < 10 do",
    ],
    answer: "while x < 10:",
  },
  {
    question:
      'What is the output of the following C code?\n\nint main() {\n    int x = 3;\n    int y = 2;\n    printf("%d", x / y);\n    return 0;\n}',
    options: ["1", "1.5", "2", "Error"],
    answer: "1",
  },
  {
    question:
      "Which of the following Java methods is used to find the length of an array?",
    options: ["length()", "size()", "getLength()", "length"],
    answer: "length",
  },
  {
    question:
      "In Python, which of the following will raise an exception if you attempt to access an undefined variable?",
    options: ["NameError", "ValueError", "TypeError", "SyntaxError"],
    answer: "NameError",
  },
  {
    question: "What is the correct way to create an object in Java?",
    options: [
      "new ClassName()",
      "create ClassName()",
      "ClassName.new()",
      "instantiate ClassName()",
    ],
    answer: "new ClassName()",
  },
  {
    question:
      "In SQL, which command is used to retrieve all records from a table?",
    options: [
      "SELECT ALL FROM table;",
      "GET ALL FROM table;",
      "SELECT * FROM table;",
      "SHOW ALL FROM table;",
    ],
    answer: "SELECT * FROM table;",
  },
];

let currentQuestion = 0;
let score = 0;
let userName = "";
let clgName = "";
let rollno = "";
let timer;
let timeLeft = 20;
function startQuiz() {
  userName = document.getElementById("username").value.trim();
  clgName = document.getElementById("clg").value.trim();
  rollno = document.getElementById("rollno").value.trim();
  if (!userName || !clgName || !rollno) {
    alert("Please enter Details");
    return;
  }
  document.querySelector(".rules").style.display = "none";
  document.getElementById("quizSection").style.display = "block";
  showQuestion();
}
function showQuestion() {
  clearInterval(timer);
  timeLeft = 20;
  updateTimerDisplay();
  const container = document.getElementById("questionContainer");
  container.innerHTML = "";
  const q = quizData[currentQuestion];
  const questionEl = document.createElement("h3");
  questionEl.textContent = currentQuestion + 1 + ". " + q.question;
  container.appendChild(questionEl);
  q.options.forEach((opt, i) => {
    const label = document.createElement("label");
    label.setAttribute("for", `${i}`);
    label.classList.add("question-holder");
    label.innerHTML = `<input type="radio" name="option" value="${opt}" id="${i}"><span>${opt}</span>`;
    container.appendChild(label);
    container.appendChild(document.createElement("br"));
  });
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(timer);
      autoMoveToNext();
    }
  }, 1000);
}
function updateTimerDisplay() {
  document.getElementById("timer").textContent = `Time left: ${timeLeft}s`;
}
function nextQuestion() {
  clearInterval(timer);
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === quizData[currentQuestion].answer) {
    score++;
  }
  goToNext();
}
function autoMoveToNext() {
  const selected = document.querySelector('input[name="option"]:checked');
  if (selected && selected.value === quizData[currentQuestion].answer) {
    score++;
  }
  goToNext();
}
function goToNext() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    document.getElementById("quizSection").style.display = "none";
    document.getElementById("resultSection").style.display = "block";
    document.getElementById(
      "scoreText"
    ).textContent = `Well done, ${userName}! Your score is
    ${score}/${quizData.length}.`;
    saveScore(userName, score, clgName);
  }
}
function saveScore(name, score, clgName) {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  leaderboard.push({ name, score, clgName, rollno });
  leaderboard.sort((a, b) => b.score - a.score);
  localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}
function showLeaderboard() {
  document.getElementById("resultSection").style.display = "none";
  document.getElementById("leaderboardSection").style.display = "block";
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  const list = document.getElementById("leaderboardList");
  // list.innerHTML = "";
  leaderboard.slice(0, 10).forEach((entry) => {
    const tr = document.createElement("tr");
    const td1 = document.createElement("td");
    const td2 = document.createElement("td");
    const td3 = document.createElement("td");
    const td4 = document.createElement("td");
    td1.innerText = entry.name;
    td3.innerText = entry.clgName;
    td2.innerHTML = entry.rollno;
    td4.innerText = entry.score;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    list.appendChild(tr);
  });
}
