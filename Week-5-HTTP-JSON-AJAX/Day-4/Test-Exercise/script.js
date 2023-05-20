const ulTag = document.querySelector('ul')
const para = document.querySelector('p')

const getCategories = () => {
fetch("https://api.chucknorris.io/jokes/random?category={category}")
.then(resp => {
    if (resp.ok) {
        return resp.json();
    }
    throw new Error ('Oops')
})

}