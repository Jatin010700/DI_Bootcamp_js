const task = []

const addTask = () => {
    let getClass = document.getElementsByClassName("listTasks")

    let inputValue = document.forms[0].elements[0].value;
    console.log(inputValue)

    if (inputValue || inputValue === "") {
        return;
    }

    

    let para = document.createElement("p")
    getClass[0].appendChild(para)
    para.innerHTML = inputValue

}
let id = document.getElementById("addButton")
id.addEventListener("click", RespondClick)
function RespondClick(e) {
    console.log("Test" + e.target.innerHTML)
}


