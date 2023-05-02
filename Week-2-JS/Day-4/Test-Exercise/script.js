function life() {
    return"Life is good";
}

console.log(life());

//------------------------------

  function myButton() {
    const message = "life is good";
    document.getElementById("output").innerHTML = message;
    return message;
  }

//------------------------------

function laugh() {
    var laughter = "";
    for (var i = 0; i < 10; i++) {
      laughter += "ha";
    }
    return laughter + "!";
  }
  console.log(laugh())

  //---------------------------

  function hasEnoughPlayers(team) {
    return team.length >= 5;
  }
  let team = ['Cantona', 'Zidane', 'Salah', 'Messi'];
  console.log(hasEnoughPlayers(team));

  //-------------------------------

  function sumArray(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  function sumArray(arr) {
    let sum = 0;
    let i = 0;
    while(i < arr.length) {
      sum += arr[i];
      i++;
    }
    return sum;
  }
  function sumArray(arr) {
    let sum = 0;
    arr.forEach(function(num) {
      sum += num;
    });
    return sum;
  }
  let numbers = [10, 20, 30, 88, 95];
console.log(sumArray(numbers)); 