const ids = [
  "firstName",
  "lastName",
  "userName",
  "email",
  "password"
]
const divs = ids.map((id) => document.getElementById(id)) //------getting all id------//


const submitButton = document.getElementById("submitBTN")

divs.forEach((div) => div?.addEventListener("input", handleChange))

function handleChange(e) {
  if (divs.some((div) => div.value === "")) {
    console.log("empty")
    submitButton.disabled = true
  } else {
    submitButton.disabled = false
  }
}