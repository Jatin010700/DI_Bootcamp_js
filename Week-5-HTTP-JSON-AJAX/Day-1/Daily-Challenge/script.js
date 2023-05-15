let form = document.forms.profile.send
// console.log(form)
form.addEventListener("click", (e) => {
    e.preventDefault();
    let firstName = document.forms[0].fName
    let lastName = document.forms[0].lName

    const jsonFirst = JSON.stringify(firstName.value);
    const jsonLast = JSON.stringify(lastName.value);

    let para = document.createElement("p");
    para.innerText = jsonFirst + jsonLast;
    document.body.appendChild(para);
    
    // console.log(jsonFirst)
    // console.log(jsonLast)
    // console.log(firstName.value)
    // console.log(lastName.value)
})
