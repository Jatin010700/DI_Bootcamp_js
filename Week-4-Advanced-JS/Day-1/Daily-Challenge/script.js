const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//-----------------------------------------//

const usernames = [];

gameInfo.forEach(player => {
  const username = `${player.username}!`;
  usernames.push(username);
});

console.log(usernames); 

//-----------------------------------------------//

const highScorers = [];

gameInfo.forEach((player) => {
  if (player.score > 5) {
    highScorers.push(player.username);
  }
});

console.log(highScorers);

//------------------------------------------------//

let totalScore = 0;

gameInfo.forEach((player) => {
  totalScore += player.score;
});

console.log(totalScore);