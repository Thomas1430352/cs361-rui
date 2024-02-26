//(http://localhost:3001/generate-question)
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

// Function to generate random integer between min and max (inclusive)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to generate addition question with two random numbers
function generateQuestion() {
    const num1 = getRandomInt(1, 10); // Generate random number between 1 and 10
    const num2 = getRandomInt(1, 10); // Generate random number between 1 and 10
    const question = `${num1} + ${num2}`;
    const answer = num1 + num2;
    return { question, answer };
}

// Route to handle GET requests to /generate-question
app.get('/generate-question', (req, res) => {
    const question = generateQuestion();
    res.json(question); // Send the question as JSON response
});

// Route to handle POST requests to /check-answer
app.post('/check-answer', (req, res) => {
    const userAnswer = parseFloat(req.body.answer);
    const correctAnswer = parseFloat(req.body.correctAnswer);
    const isCorrect = userAnswer === correctAnswer;
    res.json({ isCorrect }); // Send whether the answer is correct or not as JSON response
});
// Main function to run the game
function runGame() {
    const question = generateQuestion();
    const userAnswer = parseFloat(prompt(`What is ${question.question}?`)); // Prompt user for answer

    if (isNaN(userAnswer)) {
        console.log("Please enter a valid number!"); // Log if user enters invalid input
        runGame(); // Restart the game
        return;
    }

    const correctAnswer = parseFloat(question.answer); // Parse the correct answer as float

    console.log(`User's answer: ${userAnswer}`);
    console.log(`Correct answer: ${correctAnswer}`);

    if (userAnswer === correctAnswer) {
        console.log("Correct! Well done!"); // Log if user's answer is correct
    } else {
        console.log(`Incorrect! The correct answer is ${correctAnswer}`); // Log if user's answer is incorrect
    }
}

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static('public'));

// Start the server on port 3001
const port = 3001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
