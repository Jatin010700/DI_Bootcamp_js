const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

for (let i = 0; i < colors.length; i++) {
    const order = i + 1;
    const suffixIndex = (order > 3 && order < 21) ? 0 : order % 10;
    const suffix = ordinal[suffixIndex];
  
    console.log(`${order}${suffix} choice is ${colors[i]}.`);
  }
  
  const hasViolet = colors.includes("Violet");
  console.log(hasViolet ? "Yeah" : "No...");