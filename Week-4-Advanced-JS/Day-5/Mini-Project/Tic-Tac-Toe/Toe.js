const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#statusText");
const restartBtn = document.querySelector("#restartBtn");
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

initializeGame();

function initializeGame(){
    cells.forEach(cell => cell.addEventListener("click", cellClicked));
    restartBtn.addEventListener("click", restartGame);
    statusText.textContent = `${currentPlayer}'s turn`;
    running = true;
}
function cellClicked(){
    const cellIndex = this.getAttribute("cellIndex");

    if(options[cellIndex] != "" || !running){
        return;
    }

    updateCell(this, cellIndex);
    checkWinner();
}
function updateCell(cell, index){
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}
function changePlayer(){
    currentPlayer = (currentPlayer == "X") ? "O" : "X";
    statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
    let roundWon = false;

    for(let i = 0; i < winConditions.length; i++){
        const condition = winConditions[i];
        const cellA = options[condition[0]];
        const cellB = options[condition[1]];
        const cellC = options[condition[2]];

        if(cellA == "" || cellB == "" || cellC == ""){
            continue;
        }
        if(cellA == cellB && cellB == cellC){
            roundWon = true;
            break;
        }
    }

    if(roundWon){
        statusText.textContent = `${currentPlayer} wins!`;
        running = false;
    }
    else if(!options.includes("")){
        statusText.textContent = `Draw!`;
        running = false;
    }
    else{
        changePlayer();
    }
}
function restartGame(){
    currentPlayer = "X";
    options = ["", "", "", "", "", "", "", "", ""];
    statusText.textContent = `${currentPlayer}'s turn`;
    cells.forEach(cell => cell.textContent = "");
    running = true;
}


//---------------NOT COMPLETED----------------//

// const B1 = document.getElementsByID("B1").value;
// const B2 = document.getElementsByID("B2").value;
// const B3 = document.getElementsByID("B3").value;
// const B4 = document.getElementsByID("B4").value;
// const B5 = document.getElementsByID("B5").value;
// const B6 = document.getElementsByID("B6").value;
// const B7 = document.getElementsByID("B7").value;
// const B8 = document.getElementsByID("B8").value;
// const B9 = document.getElementsByID("B9").value;
// const boxFunc = document.querySelector("grid")  

//   const winCombos = [
//     [B1, B2, B3],
//     [B4, B5, B6],
//     [B7, B8, B9],
//     [B1, B4, B7],
//     [B2, B5, B8],
//     [B3, B6, B9],
//     [B1, B5, B9],
//     [B7, B5, B3]

// ]

// press = "X";
// function box1() {
//     if (press == "X") {
//         B1.value = "X";
//         B1.disabled = true;
//         press = "O";
//     }
//     else {
//         B1.value = "O";
//         B1.disabled = true;
//         press = "X";
//     }
// }
  
// function box2() {
//     if (press == "X") {
//         B2.value = "X";
//         B2.disabled = true;
//         press = "O";
//     }
//     else {
//         B2.value = "O";
//         B2.disabled = true;
//         press = "X";
//     }
// }
  
// function box3() {
//     if (press == "X") {
//         B3.value = "X";
//         B3.disabled = true;
//         press = "O";
//     }
//     else {
//         B3.value = "O";
//         B3.disabled = true;
//         press = "X";
//     }
// }
  
// function box4() {
//     if (press == "X") {
//         B4.value = "X";
//         B4.disabled = true;
//         press = "O";
//     }
//     else {
//         B4.value = "O";
//         B4.disabled = true;
//         press = "X";
//     }
// }
  
// function box5() {
//     if (press == "X") {
//         B5.value = "X";
//         B5.disabled = true;
//         press = "O";
//     }
//     else {
//         B5.value = "O";
//         B5.disabled = true;
//         press = "X";
//     }
// }
  
// function box6() {
//     if (press == "X") {
//         B6.value = "X";
//         B6.disabled = true;
//         press = "O";
//     }
//     else {
//         B6.value = "O";
//         B6.disabled = true;
//         press = "X";
//     }
// }
  
// function box7() {
//     if (press == "X") {
//         B7.value = "X";
//         B7.disabled = true;
//         press = "O";
//     }
//     else {
//         B7.value = "O";
//         B7.disabled = true;
//         press = "X";
//     }
// }
  
// function box8() {
//     if (press == "X") {
//         B8.value = "X";
//         B8.disabled = true;
//         press = "O";
//     }
//     else {
//         B8.value = "O";
//         B8.disabled = true;
//         press = "X";
//     }
// }
  
// function box9() {
//     if (press == "X") {
//         B9.value = "X";
//         B9.disabled = true;
//         press = "O";
//     }
//     else {
//         B9.value = "O";
//         B9.disabled = true;
//         press = "X";
//     }
// }

// function reset(){
//   location.reload();

