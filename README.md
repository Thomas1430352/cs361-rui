# cs361-Thomas (Rui Microservice)
This microservice allows users to get addition questions and input the their answer to see if it is correct or not.

Communication contract is through calling http://localhost:3001/generate-question
To request data from the microservice, you will send a GET request to the appropriate endpoint using a library or tool capable of making HTTP requests
ex.
app.get('http://localhost:3001/generate-question')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error('Error fetching question:', error);
    });

Handling the GET Request: The microservice will receive the GET request at the specified endpoint (/generate-question). It will generate a random addition question and its correct answer and send them back as a JSON response.
ex.
{
    "question": "6 + 9",
    "answer": 15
}

If interacting with the microservice requires a POST request for certain operations (likechecking the user's answer), you would similarly send a POST request to the appropriate endpoint (/check-answer) with the necessary data.
ex.
app.post('http://localhost:3001/check-answer', {
    answer: userAnswer,
    correctAnswer: correctAnswer
})
.then(response => {
    console.log(response.data);
})
.catch(error => {
    console.error('Error checking answer:', error);
});
