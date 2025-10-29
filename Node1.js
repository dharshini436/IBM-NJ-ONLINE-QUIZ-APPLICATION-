// IBM Online Quiz Application
// Language: Node.js
const readline = require('readline');
// Create interface for input/output
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
});
// Quiz Questions
const quiz = [
{
question: "1. What does IBM stand for?",
options: ["A) International Business Machines", "B) Indian Banking Management", "C) Internet
Based Model", "D) Information Binary Machine"],
answer: "A"
},
{
question: "2. Node.js is built on which JavaScript engine?",
options: ["A) SpiderMonkey", "B) V8 Engine", "C) Chakra", "D) Nashorn"],
answer: "B"
},
{
question: "3. Which command initializes a new Node.js project?",
options: ["A) node start", "B) npm init", "C) node install", "D) npm create"],
answer: "B"
},
{
question: "4. Which company developed Node.js?",
options: ["A) Microsoft", "B) Joyent", "C) IBM", "D) Google"],
answer: "B"
},
{
question: "5. Which module is used to create a web server in Node.js?",
options: ["A) http", "B) fs", "C) url", "D) os"],
answer: "A"
}
];

let score = 0;
let currentQuestion = 0;
console.log("👋 Welcome to the IBM Online Quiz Application!");
console.log("==============================================\n");
function askQuestion() {
const q = quiz[currentQuestion];
console.log(q.question);
q.options.forEach(opt => console.log(opt));
rl.question("\nYour Answer (A/B/C/D): ", (userAns) => {
if (userAns.trim().toUpperCase() === q.answer) {
console.log("✅ Correct!\n");
score++;
} else {
console.log(`❌ Wrong! The correct answer was ${q.answer}.\n`);
}
currentQuestion++;
if (currentQuestion < quiz.length) {
askQuestion();
} else {
console.log("👋 Quiz Completed!");
console.log(`Your Final Score: ${score}/${quiz.length}`);
if (score === quiz.length) {
console.log("👋 Excellent! You are an IBM Quiz Master!");
} else if (score >= 3) {
console.log("👋 Good job! Keep improving!");
} else {
console.log("👋 You need more practice. Try again!");
}
rl.close();
}
});
}
askQuestion();

// Use IntelliSense to learn about possible attributes.
// Hover to view descriptions of existing attributes.
// For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
"version": "0.2.0",
"configurations": [
{
"type": "chrome",
"request": "launch",
"name": "Launch Chrome against localhost",
"url": "http://localhost:8080",
"webRoot": "${workspaceFolder}"
}
]
}
