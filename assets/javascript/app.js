//array of objects that include the question, answers, correct answer, explanation & img url
var triviaQuestions = [
    {
        question: "What is Harry known for?",
        answers: {
            a: "The Boy Who Lied",
            b: "The Boy Who Lived",
            c: "The Boy Who Laughed",
            d: "The Boy Who Loved"
        },
        correctAnswer: "b",
        explanation: "When Voldemort, a powerful dark wizard, failed to kill Harry when he was a baby, people in the wizarding world named him as \"The Boy Who Lived.\"",
        url: "https://giphy.com/embed/V2Quy9utov4RO"
    },
    {
        question: "How many siblings does Ron Weasley have?",
        answers: {
            a: "8",
            b: "7",
            c: "6",
            d: "3"
        },
        correctAnswer: "c",
        explanation: "Ron has six siblings: Bill, Charlie, Percy, twins Fred and George, and a younger sister, Ginny.",
        url: "https://giphy.com/embed/13ncHUGj2wtdKg"
    },
    {
        question: "What is a Muggle?",
        answers: {
            a: "A person that is non-magical",
            b: "A person that is vegetarian",
            c: "A person that has a puggle",
            d: "A person that has a lot of mugs"
        },
        correctAnswer: "a",
        explanation: "A Muggle is a person who lacks any sort of magical ability and was not born in a magical family.",
        url: "https://giphy.com/embed/RtQUhSo7B5pyo"
    },
    {
        question: "Albus Dumbledore is the headmaster of which school?",
        answers: {
            a: "Harvard",
            b: "Beauxbatons",
            c: "Ilvermorny",
            d: "Hogwarts"
        },
        correctAnswer: "d",
        explanation: "Dumbledore is the headmaster of Hogwarts School of Witchcraft and Wizardry. It is the British wizarding school, located in the Highlands of Scotland.",
        url: "https://giphy.com/embed/THS0CXw1xkgow"
    }, 
    {
        question: "Who is Harry\'s other best friend besides Ron Weasley?",
        answers: {
            a: "Cho Chang",
            b: "Hermione Granger",
            c: "Minerva McGonagall",
            d: "Bellatrix Lestrange"
        },
        correctAnswer: "b",
        explanation: "Harry, Ron and Hermione quickly became best friends after an incident with a mountain troll. She often uses her quick wit, deft recall, and encyclopedic knowledge to help them.",
        url: "https://giphy.com/embed/qOWqY8BR3A9K8"
    },
    {
        question: "Which team sport does Harry play in Hogwarts?",
        answers: {
            a: "Quidditch",
            b: "Football",
            c: "Basketball",
            d: "Hockey"
        },
        correctAnswer: "a",
        explanation: "Quidditch is a wizarding sport played on broomsticks. It is the most popular game and most well-known game among wizards and witches",
        url: "https://giphy.com/embed/w5FqzCaXpW0tq"
    },
    {
        question: "Who is Hedwig?",
        answers: {
            a: "Harry\'s friend that lives in a hut",
            b: "The house-elf that was freed",
            c: "A snowy owl",
            d: "The flying creature that\'s half eagle and half horse"
        },
        correctAnswer: "c",
        explanation: "Hedwig is Harry Potter\'s pet Snowy Owl. Hedwig was an 11th birthday gift from Hagrid to Harry.",
        url: "https://giphy.com/embed/6cmaghxnGdjj2"
    },
    {
        question: "Which creatures can Harry speak to in their language?",
        answers: {
            a: "Hippogriffs",
            b: "Dragons",
            c: "Phoenixes",
            d: "Serpents"
        },
        correctAnswer: "d",
        explanation: "Harry can speak Parseltongue to serpents. It is the language of serpents. An individual who can speak parseltongue is known as a Parselmouth.",
        url: "https://giphy.com/embed/si9QFUXkItieY"
    },
    {
        question: "What does the charm, Wingardium Leviosa, do?",
        answers: {
            a: "It makes objects fly or levitate",
            b: "It unlocks doors",
            c: "It fetches things for you",
            d: "It turns your wand into a flashlight"
        },
        correctAnswer: "a",
        explanation: "The Levitation Charm, Wingardium Leviosa, is a charm used to make objects fly, or levitate.",
        url: "https://giphy.com/embed/RyLtUMBdogHvO"
    },
    {
        question: "What are the four houses of Hogwarts?",
        answers: {
            a: "Diagon, Grimmauld, Godric, and Spinner",
            b: "Gryffindor, Hufflepuff, Ravenclaw, and Slytherin",
            c: "Horned Serpent, Wampus, Thunderbird and Pukwudgie",
            d: "Gryffindor, Hogsmeade, Marauder, and Snape"
        },
        correctAnswer: "b",
        explanation: "Hogwarts School of Witchcraft and Wizardry was divided into four houses, each bearing the last name of its founder: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin.",
        url: "https://giphy.com/embed/oaOhFJkKoiuZi"
    }
];

var correctTotal = 0; //number of total correct answers
var wrongTotal = 0; //number of total wrong answers
var unansweredTotal = 0; //number of total unanswered
var seconds = 25; //number of seconds to start for timer
var timer; //variable for the setInterval 
var shortTimer; //variable for the setTimeout
var button; //variable for button tags
var index = 0; //index for the objects in the triviaQuestions array
var answer = ""; //variable for trivia answer
var phrase = ""; //variable for trivia phrase
var runTimer = false; //countdown starts if function is called and this is false

//display seconds before countdown begins
$('#countdownTimer').text(seconds);

//function to start subtracting 1 from the seconds 
function countdown() {
    seconds--;
    $('#countdownTimer').text(seconds);

    if (seconds == 0) {
        answer = "zeroTime"; //the "zeroTime" phrase displays on screen from answerPhrase()
        unansweredTotal++; // add 1 to unansweredTotal var
        stopCountdown(); //executes to stop the timer
        answerPhrase(); //phrase from function executes
        displayAnswer(); //executes to display the answer div
    }
}

//start the countdown if runTimer is false then run the setInterval
function startCountdown() {
    if (!runTimer) {
        timer = setInterval(countdown, 1000);
        runTimer = true;
    }
}

//when stopCountDown is executed...
function stopCountdown() {
    runTimer = false; //make runTimer false
    clearInterval(timer); //clear the setInterval
    seconds = 25; //reset the seconds var back to 25
    $('#countdownTimer').text(seconds); //display 25 for seconds on screen
}

function displayQuestion() { 
    $('.triviaAnswer').hide(); //hides triviaAnswer div
    $('.finalResultDiv').hide(); //hides finalResultDiv div
    $('.triviaDiv').show(); //shows the triviaDiv 

    //adds the question to display on html
    $('#triviaQuestion').text(triviaQuestions[index]["question"]);

    // for loop for the answer options in the object
    for (var key in triviaQuestions[index]["answers"]) {
        button = $('<button>');
        var buttonText = triviaQuestions[index]["answers"][key];
        var buttonClass = "btn btn-secondary btn-lg btn-block answerButtons";

        //creates button with the text, attribute, and adds data-value
        button.text(buttonText).addClass(buttonClass).attr('data-val', key);

        //appends the button to the div in html
        $('.answersButtonsDiv').append(button);
    }
    //execute the countdown function
    startCountdown();
}

//function to select the phrase shown when the answer div displays in html
function answerPhrase() {
    $('#phrase').empty();

    if(answer === "correct") {
        phrase = "You're correct!";
    } else if (answer === "zeroTime") {
        phrase = "Sorry, you're out of time!"
    } else if (answer === "wrong") {
        phrase = "Oops, you're wrong!";
    }

    $('#phrase').text(phrase);
}

//displays the answer and giphy 
function displayAnswer() {
    $('.triviaAnswer').show();
    $('.triviaDiv').hide();

    var answerLetter = triviaQuestions[index]["correctAnswer"];

    $('#finalAnswer').text("The answer is: " + triviaQuestions[index]["answers"][answerLetter]);
    $('#answerExp').text(triviaQuestions[index]["explanation"]);
    $('#giphy-embed').attr('src', triviaQuestions[index]["url"]);

    index++; //adds 1 to index to iterate to the next question
    $('.answersButtonsDiv').empty();
    
    clearInterval(shortTimer); 
    shortTimer = setTimeout(isFinalResult, 6000); 
    //setTimeout to run the function isFinalResult after 6 sec
}

//function to check if quiz is done, or else execute the next question
function isFinalResult() {
    if (index === triviaQuestions.length) {
        $('.triviaAnswer').hide();
        $('.finalResultDiv').show();

        $("#correctTotal").text(correctTotal);
        $("#wrongTotal").text(wrongTotal);
        $("#unansweredTotal").text(unansweredTotal);
    } else {
        displayQuestion();
    }
}

//function for playAgain button
$('#playAgain').on('click', function() {
    //reset the variables
    correctTotal = 0;
    wrongTotal = 0;
    unansweredTotal = 0;
    seconds = 26;
    index = 0;

    displayQuestion();
});

//when you click the start button the first question displays
$('#startButton').on('click', function() {
    $('#startDiv').hide();

    displayQuestion();
});

//to select the document so that the buttons work after adding them to html
$(document).on('click', '.answerButtons', function(){
    var clickAnswer = $(this); //user clicks and that button = this
    var answerVal = clickAnswer.attr('data-val'); //store the data-val from that button

    //if the data-val matches the correctAnswer then
    if (answerVal === triviaQuestions[index]["correctAnswer"]) {
        answer = "correct"; //the "correct" phrase displays on screen from answerPhrase()
        correctTotal++; // add 1 to correctTotal var
        stopCountdown(); 
        answerPhrase(); 
        displayAnswer();
    } else { //if user selects the wrong answer
        answer = "wrong"; //the "wrong" phrase displays on screen from answerPhrase()
        wrongTotal++; // add 1 to wrongTotal var
        stopCountdown(); 
        answerPhrase();
        displayAnswer();
    }
});

