let button = document.querySelector('#button');
let names = document.querySelector('#name');
let height = document.querySelector('#height');
let gender = document.querySelector('#gender');
let birthYear = document.querySelector('#birth-year');
let homeWorld = document.querySelector('#home-world');
let container = document.querySelector('info-container');


const getInfo = async () => {
let randomNumber = Math.floor((Math.random() * 83) + 1);
let getApiUrl = `https://www.swapi.tech/api/people/${randomNumber}`;

  updateWithLoading();// <------------- loading //
  
    try{
      const response = await fetch(getApiUrl);
      const data = await response.json();
      const character = data.result.properties;
      await displayCharacterInfo(character);
    } 
    catch (error) {
      // updateInfoWithError();
      console.log(`There was an ERROR data ${error}`);
    }
}
  const displayCharacterInfo = async (character) => {
    names.textContent = character.name;
    height.textContent = character.height;
    gender.textContent = character.gender;
    birthYear.textContent = character.birth_year;
    await getHomeWorld(character.homeWorld);
  }
  async function getHomeWorld(homeWorldUrl) {
    try {
      const response = await fetch(homeWorldUrl);
      const data = await response.json();
      homeWorld.textContent = data.result.properties.name;
    }
    catch (error) {
      console.log(`There was an ERROR!!!`);
    }
  }
function updateWithLoading(){
    names.innerHTML = '<i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i> <p>Loading...</p>';
    height.innerText = ''
    gender.innerText = ''
    birthYear.innerText = ''
    homeWorld.innerText = ''
}

// function updateInfoWithError(){
//   names.innerText = 'Oh No! That person isnt available.';
//   height.innerText = ''
//   gender.innerText = ''
//   birthYear.innerText = ''
//   homeWorld.innerText = ''
// }

button.addEventListener('click', getInfo);

