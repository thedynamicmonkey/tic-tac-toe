let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true; //PlayerX and playerO
let count = 0; //To track draw

let winnPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];



const resetGame = () => {
    turnO = true;
    count = 0;
    enableBtns();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO) { //playerO
            box.innerText = "O";
            turnO = false;
            box.style.color = "black";
        } else { //playerX
            box.innerText = "X";
            turnO = true;
            box.style.color = "red";
        }
        box.disabled = true;
        count++;


        let isWinner = checkWinner();

        if(count === 9 && !isWinner) {
            gameDraw();
        }
    });
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBtns();
};


const disableBtns = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBtns = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};


const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBtns();
};

const checkWinner = () => {
    for (let pattern of winnPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;  
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}; 

const checkDraw = () => {
     for(let moves of allMoves) {
        console.log(moves);
    }
};



newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);