let userScore=0;
let compScore=0;

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const genCompChoice = () =>{
    const options = ["rock","paper","scissor"];
    const randonIdx = Math.floor(Math.random() * 3);
    return options[randonIdx];

}

const drawGame = ()=> {
    console.log("Game was draw.");
    msg.innerText= "Game Draw!";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText= userScore;
        console.log("You Win!!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice} `;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText= compScore;
        console.log("You Lose!!");
        msg.innerText = `You Lose, ${compChoice} beats your ${userChoice} `;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    console.log("Your choice is", userChoice);
    const compChoice = genCompChoice();
    console.log("Computer choice is", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "paper"){
            userWin = compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
    showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});