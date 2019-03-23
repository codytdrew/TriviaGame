    //Trivia Game 
    // The user will be prompted with 10 multiple choice questions
    // After timer runs out (60s), the page reveals the number of questions that the player answer correctly and incorrectly
    // User can only pick one answer per question
    var score = 0
window.onload = function() {
    
        // When the start button is pressed, we begin the countdown
    $("#start").click(function() {
    start();
    $('#start').hide(start);
    });
};

    $('input').on('click', function(event) {
        var isCorrect = $(this).data('correct')
        console.log(isCorrect);
        $(this).parent().addClass('answered')
        if (isCorrect) {
            score++
        }
        var questionsAnswered = $('.answered').length
        console.log('q', questionsAnswered)
        if (questionsAnswered === 10) {
            // We done
            alert('You got this many right: ' + score)
        }
    })

    // Variable that sets our number counter to 60
    var timeLeft = 60;

    // Variable that holds our interval ID upon start of quiz
    var interValId;
    
    // prevents clock from being sped up
    var clockRunning = false;

    // This is the start function that sets our interval
    // Runs a decrement once a second
    function start() {

        if (!clockRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}
    // This is the decrement function
    function decrement () {
        timeLeft--;

    $("#display").html("<h2>" + "Time Remaining: " + timeLeft + "</h2>");

    if(timeLeft === 0) {
    function timeUp() {
        // in the element with an id of display add an h2 saying Time's Up!
        // console log done

        clockRunning = false;
        console.log("done");
        $("#display").append("<h2>" + "Time's Up!" + "</h2>");
        console.log("time is up");
        clearInterval(intervalId);
    }
    timeUp();
}
    }

