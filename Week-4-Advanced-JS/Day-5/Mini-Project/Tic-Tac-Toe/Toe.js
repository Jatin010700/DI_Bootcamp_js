
press = "X";
function box1() {
    if (press == "X") {
        B1.value = "X";
        B1.disabled = true;
        press = "O";
    }
    else {
        B1.value = "O";
        B1.disabled = true;
        press = "X";
    }
}
  
function box2() {
    if (press == "X") {
        B2.value = "X";
        B2.disabled = true;
        press = "O";
    }
    else {
        B2.value = "O";
        B2.disabled = true;
        press = "X";
    }
}
  
function box3() {
    if (press == "X") {
        B3.value = "X";
        B3.disabled = true;
        press = "O";
    }
    else {
        B3.value = "O";
        B3.disabled = true;
        press = "X";
    }
}
  
function box4() {
    if (press == "X") {
        B4.value = "X";
        B4.disabled = true;
        press = "O";
    }
    else {
        B4.value = "O";
        B4.disabled = true;
        press = "X";
    }
}
  
function box5() {
    if (press == "X") {
        B5.value = "X";
        B5.disabled = true;
        press = "O";
    }
    else {
        B5.value = "O";
        B5.disabled = true;
        press = "X";
    }
}
  
function box6() {
    if (press == "X") {
        B6.value = "X";
        B6.disabled = true;
        press = "O";
    }
    else {
        B6.value = "O";
        B6.disabled = true;
        press = "X";
    }
}
  
function box7() {
    if (press == "X") {
        B7.value = "X";
        B7.disabled = true;
        press = "O";
    }
    else {
        B7.value = "O";
        B7.disabled = true;
        press = "X";
    }
}
  
function box8() {
    if (press == "X") {
        B8.value = "X";
        B8.disabled = true;
        press = "O";
    }
    else {
        B8.value = "O";
        B8.disabled = true;
        press = "X";
    }
}
  
function box9() {
    if (press == "X") {
        B9.value = "X";
        B9.disabled = true;
        press = "O";
    }
    else {
        B9.value = "O";
        B9.disabled = true;
        press = "X";
    }
}

function reset(){
  location.reload();



  const winCombos = [
    [B1, B2, B3],
    [B4, B5, B6],
    [B7, B8, B9],
    [B1, B4, B7],
    [B2, B5, B8],
    [B3, B6, B9],
    [B1, B5, B9],
    [B7, B5, B3]

]
const B1 = document.getElementsByID("B1").value;
const B2 = document.getElementsByID("B2").value;
const B3 = document.getElementsByID("B3").value;
const B4 = document.getElementsByID("B4").value;
const B5 = document.getElementsByID("B5").value;
const B6 = document.getElementsByID("B6").value;
const B7 = document.getElementsByID("B7").value;
const B8 = document.getElementsByID("B8").value;
const B9 = document.getElementsByID("B9").value;
const boxFunc = document.getElementsByClassName("grid")  

    boxFunc = () => {
    if (B1,B2,B3 == "O") {
        document.getElementById("main-box")
        .innerHTML("Player 1 has won!!!")
        B4,B5,B6,B7,B8,B9.disabled = true;
        window.alert("player 1 has woN!!!")
    }
}
}


