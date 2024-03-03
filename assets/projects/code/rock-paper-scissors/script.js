var playerScore = 0;
    var cpuScore = 0;

    var score = document.getElementById("score");
    var cpuscore = document.getElementById("cpuscore");

    function rock(){
        var cpuChoice = Math.random(0, 1);
        if (cpuChoice < 0.33333){
            cpuChoice = "rock";
        }
        if (cpuChoice < 0.66666){
            cpuChoice = "paper";
        }
        if (cpuChoice < 1){
            cpuChoice = "scissors";
        }
        alert("The CPU has chosen to play " + cpuChoice);

        if (cpuChoice == "rock"){
            alert("nobody wins this round");
        }
        if (cpuChoice == "paper"){
            alert("you lose this round");
            cpuScore = cpuScore + 1;
        }
        if (cpuChoice == "scissors"){
            alert("you win this round");
            playerScore = playerScore + 1;
        }
            score.innerHTML = playerScore;
            cpuscore.innerHTML = cpuScore;

    }
    function paper(){
        var cpuChoice = Math.random(0, 1);
        if (cpuChoice < 0.33333){
            cpuChoice = "rock";
        }
        if (cpuChoice < 0.66666){
            cpuChoice = "paper";
        }
        if (cpuChoice < 1){
            cpuChoice = "scissors";
        }
        alert("The CPU has chosen to play " + cpuChoice);

        if (cpuChoice == "rock"){
            alert("you win this round");
            playerScore = playerScore + 1;
        }
        if (cpuChoice == "paper"){
            alert("nobody wins this round");
        }
        if (cpuChoice == "scissors"){
            alert("you lose this round");
            cpuScore = cpuScore + 1;
        }
            score.innerHTML = playerScore;
            cpuscore.innerHTML = cpuScore;

    }
    function scissors(){
        var cpuChoice = Math.random(0, 1);
        if (cpuChoice < 0.33333){
            cpuChoice = "rock";
        }
        if (cpuChoice < 0.66666){
            cpuChoice = "paper";
        }
        if (cpuChoice < 1){
            cpuChoice = "scissors";
        }
        alert("The CPU has chosen to play " + cpuChoice);

        if (cpuChoice == "rock"){
            alert("you lose this round");
            cpuScore = cpuScore + 1;
        }
        if (cpuChoice == "paper"){
            alert("you win this round");
            playerScore = playerScore + 1;
        }
        if (cpuChoice =="scissors"){
            alert("nobody wins this round");
        }
            score.innerHTML = playerScore;
            cpuscore.innerHTML = cpuScore;

    }