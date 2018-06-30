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
        explanation: "When Voldemort, a powerful dark wizard, failed to kill Harry when he was a baby, people in the wizarding world named him as \"The Boy Who Lived.\""
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
        explanation: "A Muggle is a person who lacks any sort of magical ability and was not born in a magical family."
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
        explanation: "Dumbledore is the headmaster of Hogwarts School of Witchcraft and Wizardry. It is the British wizarding school, located in the Highlands of Scotland. It takes students from the United Kingdom of Great Britain and Northern Ireland, and Ireland."
    }, 
    {
        question: "Who is Harry\’s other best friend besides Ron Weasley?",
        answers: {
            a: "Cho Chang",
            b: "Hermione Granger",
            c: "Minerva McGonagall",
            d: "Bellatrix Lestrange"
        },
        correctAnswer: "b",
        explanation: "Hermione stepped in to take the blame from Ron and Harry after they had saved her from a mountain troll in the girls\’ toilets. Harry and Ron were surprised, but grateful and the three quickly became best friends. She often uses her quick wit, deft recall, and encyclopedic knowledge to help them."
    },
    {
        question: "Which team sport does Harry play in Hogwarts?",
        answers: {
            a: "Quidditch",
            b: "Football",
            c: "Baseball",
            d: "Hockey"
        },
        correctAnswer: "a",
        explanation: "Quidditch is a wizarding sport played on broomsticks. It is the most popular game and most well-known game among wizards and witches"
    },
    {
        question: "Who is Hedwig?",
        answers: {
            a: "Harry’s friend that lives in a hut",
            b: "The house-elf that was freed",
            c: "A snowy owl",
            d: "The flying creature that’s half eagle and half horse"
        },
        correctAnswer: "c",
        explanation: "Hedwig is Harry Potter\'s pet Snowy Owl. Hedwig was an 11th birthday gift from Hagrid to Harry."
    },
    {
        questions: "Which creatures can Harry speak to in their language?",
        answers: {
            a: "Hippogriffs",
            b: "Dragons",
            c: "Phoenixes",
            d: "Serpents"
        },
        correctAnswer: "d",
        explanation: "Harry can speak Parseltongue to serpents. It is the language of serpents (as well as other magical serpent-based creatures, like the Runespoor and Basilisk) and those who can converse with them. An individual who can speak parseltongue is known as a Parselmouth."
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
        explanation: "The Levitation Charm, Wingardium Leviosa, is a charm used to make objects fly, or levitate."
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
        explanation: "Hogwarts School of Witchcraft and Wizardry was divided into four houses, each bearing the last name of its founder: Godric Gryffindor, Helga Hufflepuff, Rowena Ravenclaw and Salazar Slytherin."
    }
];

var correctTotal = 0;
var wrongTotal = 0;
var unansweredTotal = 0;
var seconds = 0;
var timer;
var shortTimer;
var button;
var index = 0;
var answer = "";
var phrase = "";

$('#startButton').on('click', function() {
    $('#startButton').hide();

    displayQuestion();
})

function startCountdown() {
    seconds--;
    $('#countdownTimer').text(seconds);

    if (seconds === 0) {
        answer = "out of time";
        unansweredTotal++;
        answerPhrase();
        displayAnswer();
    }
}

function displayQuestion() { 
    seconds = 30;

    $('.triviaAnswer').hide();
    $('.triviaDiv').show();

    $('#triviaQuestion').text(triviaQuestions[index]["question"]);

    for (var key in triviaQuestions[index]["answers"]) {
        button = $('<button>');
        var buttonText = triviaQuestions[index]["answers"][key];
        var buttonClass = "btn btn-secondary btn-lg btn-block";

        button.text(buttonText).addClass(buttonClass).attr('data-val', key);

        $('.answersButtons').append(button);

    }

    $('#countdownTimer').text(seconds);

    timer = setInterval(startCountdown, 1000);

    console.log(correctTotal);
}




function answerPhrase() {
    $('#phrase').empty();

    if(answer === "correct") {
        phrase = "You're correct!";
    } else if (answer === "out of time") {
        phrase = "Sorry, you're out of time!"
    } else if (answer === "wrong") {
        phrase = "Oops, you're wrong!";
    }

    $('#phrase').text(phrase);
}

function displayAnswer() {
    
    var answerLetter = triviaQuestions[index]["correctAnswer"];

    $('.triviaAnswer').show();
    $('.triviaDiv').hide();

    $('#finalAnswer').text("The answer is: " + triviaQuestions[index]["answers"][answerLetter]);
    $('#answerExp').text(triviaQuestions[index]["explanation"]);

    index++;
    $('.answersButtons').empty();
    
    clearInterval(shortTimer); 
    shortTimer = setTimeout(displayQuestion, 5000);
}


$(document).on('click', '.btn', function(){
    var clickAnswer = $(this);
    var answerVal = clickAnswer.attr('data-val');

    if (answerVal === triviaQuestions[index]["correctAnswer"]) {
        answer = "correct";
        correctTotal++;
        answerPhrase();
        displayAnswer();
    } else {
        answer = "wrong";
        wrongTotal++;
        answerPhrase();
        displayAnswer();
    }
});

