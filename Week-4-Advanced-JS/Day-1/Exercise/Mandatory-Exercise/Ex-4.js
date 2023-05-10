const color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

for (let i = 0; i < color.length; i++) {
  console.log(`${i + 1}# choice is ${color[i]}.`);
}

if (color.includes("Violet")) {
  console.log("Yeah");
} else {
  console.log("No...");
}
