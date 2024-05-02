let userScore = 0
let compScore = 0
let gameDraw = 0
let choices = document.querySelectorAll(".choice")

let userscore = document.querySelector("#user-score")

let compscore = document.querySelector("#comp-score")

let reset = document.querySelector(".reset")
console.log(reset);

const msg = document.querySelector("#msg")

choices.forEach(function(choice){
    choice.addEventListener("click",function(){
        const Userchoice = choice.getAttribute("id")

       console.log("choice was clicked",Userchoice);
        playgame(Userchoice)
    })
})

const genComputerchoice = ()=> {
let options = ['rock','paper','scissors']
const random = Math.floor(Math.random() * 4 )
return options[random]
}


function drawGame(){
    gameDraw++
    console.log('game was draw');
    msg.innerText = `Game Draw ${gameDraw}`
    msg.style.backgroundColor = '#081b31'
    msg.style.border = '4px solid #7facff'
}

const playgame = (userChoice) => {
    console.log('user choice = ',userChoice);
    // generate computer choice => modular
    const computerChoice = genComputerchoice()
    console.log('computer choice = ',computerChoice);

    if (userChoice === computerChoice) {
        drawGame()
    }else{
        let userwin = true;
        if (userChoice === 'rock') {
            // scissors, paper
            userwin = computerChoice === 'paper' ? false : true

        }else if(userChoice === 'paper'){
            // rock, scissor

         userwin = compScore === 'scissors' ? false : true
        }else{
         userwin = compScore === 'rock' ? false : true

        }

        showWinner(userwin,userChoice,computerChoice)
    }
}

function showWinner(userWin,userChoice,computerChoice){
    if (userWin) {
        userScore++;
        userscore.innerText = userScore;
       msg.innerText = `You win ! Your ${userChoice} beats ${computerChoice}`
       msg.style.backgroundColor = 'green'
       msg.style.border = '4px solid black'

    }else{
        compScore++;
        compscore.innerText = compScore;
        console.log('you loss');
        msg.innerText = `You lose.  ${computerChoice} beats Your ${userChoice}`
      
       msg.style.border = '4px solid white'
       msg.style.backgroundColor = 'red'

    }
}


reset.addEventListener("click",function(){
    userscore.innerText = '0';
    compscore.innerText = '0';
    userScore = 0
    compScore = 0
    gameDraw = 0
    msg.innerText = 'play your move'
   msg.style.border = '4px solid #7facff'
    msg.style.backgroundColor = '#081b31';
})


//+++++++++++++++++++++++++++++++++++++++++

// practice



// let choices = document.querySelectorAll(".choice")

// const genCompChoice = () =>{
//     let options = ['rock','paper','scissors']
//     let random = Math.floor(Math.random() * 3)
//     return options[random]
// }

// function drawGame(){
//     console.log('game draw');
// }

// function showWinner(userWin,userChoice,compChoice){
// if (userWin) {
//     console.log('you win');
// }else{
//     console.log('you lose');
// }
// }

// function playGame(userChoice){
//     console.log('user choice',userChoice);

//     let compChoice = genCompChoice()
//     console.log('computer choice',compChoice);

//     if (userChoice === compChoice) {
//         drawGame()
//     }else{
//         let userWin = true
//         if (userChoice === 'rock') {
//            userWin = compChoice === 'paper'?false:true
//         }else if (userChoice === 'paper') {
//            userWin = compChoice === 'scissors'?false:true
            
//         }else{
//            userWin = compChoice === 'rock'?false:true

//         }

//         showWinner(userWin,userChoice,compChoice)
//     }

// }

// choices.forEach(function(choice){
//     choice.addEventListener("click",function(){
//         let userChoice = choice.getAttribute("id")
//         // console.log('choices clicked',userChoice);

//         playGame(userChoice)
//     })
// })
