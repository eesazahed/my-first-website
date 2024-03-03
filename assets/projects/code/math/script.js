function startTheGame(){     

    var Scoreboard = document.querySelector("#Scoreboard"); 
    var rate = document.querySelector("#rate");

    var score = 0;

    for (var i = 0; i < 10; i++){
        var numbera = Math.random(1, 10);
        var number1 = Math.round(numbera * 10);
        var numberb = Math.random(1, 10);
        var number2 = Math.round(numberb * 10);
        var times = number1 * number2;
        var question = "What is " + number1 + " times " + number2 + "? (or press cancel to quit playing)";
        var guess = prompt(question);
        if(guess == times){ score = score + 1; }
        if(guess !== times){ score = score; }
        if(guess === null){ break; }
    var bad_Score = "Aw, man. You scored " + score + ". Try again";
    var good_Score = "Pretty cool. You scored " + score + ". Keep trying!";
    var great_Score = "Thats awesome! You answered all 10 questions correctly!";
    Scoreboard.innerHTML = score;  

    if(score < 5){ rate.innerHTML = bad_Score; }
    if(score > 5){ rate.innerHTML = good_Score; } 
    if(score == 10){ rate.innerHTML = great_Score; }       
    }
}