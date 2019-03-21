//Trivia Game 

    // The user will be prompted with True/False or multiple choice questions
            // After timer runs out, the page reveals the number of questions that the player answer correctly and incorrectly
        // User can only pick one answer per question
        //include a countdown timer

    window.onload = function() {
        $("#start").on("click", start);
    };

    //  Variable that will hold our setInterval that runs the countdown
    var askQuestion;
    
    function reset() {

        time = 60;
      
    // DONE: Change the "display" div to "0."
    $("#display").text("60");
      

    var wrongGuesses = [];
    
// Player has a limited amount of time to finish this quiz
// The game ends when the timer runs out.

// setTimeout(tenSeconds, 1000 * 10);
// setTimeout(twentySeconds, 1000 * 20);
// setTimeout(thirtySeconds, 1000 * 30);
// setTimeout(fortySeconds, 1000 * 40);
// setTimeout(fiftySeconds, 1000 * 50);
// setTimeout(timeUp, 1000 * 60);

