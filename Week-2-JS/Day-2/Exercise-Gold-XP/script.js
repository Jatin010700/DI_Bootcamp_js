let user = prompt("Which language do you speak");
switch (user) {
            case "French":
              console.log("Bonjour");
                break;
            case "English":
              console.log("Hello");
                break;
            case "Hebrew":
              console.log("Shalom");
                break;
            default:
            console.log("01110011 01101111 01110010 01110010 01111001");
    }

    //------------------------------

let grade = prompt("Exam Result");
if (grade > 90) {
    console.log("A")
}
else if (grade >= 80){
    console.log("B")
}
else if (grade >= 70){
    console.log("C")
}
else {
    console.log("D")
}

//-------------------------------------


let verb = prompt("Please enter a verb:");

if (verb.length >= 1) {
  if (!verb.endsWith("ing")) {
    verb += "ing";
    console.log("", verb);
  } else {
    verb += "ly";
    console.log("", verb);
  }
} else {
  console.log("No action taken. Your verb:", verb);
}
