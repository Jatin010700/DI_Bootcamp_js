

    const promise1 = Promise.resolve(3);
    const promise2 = 42;
    const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'foo');
    });

    const allPromise =  [promise1, promise2, promise3];

    Promise.all(allPromise)
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

//   We create three promises: promise1, promise2, and promise3. promise1 is a resolved promise with the value 3, promise2 is a non-promise value 42, and promise3 is a promise that resolves with the value 'foo' after a delay of 3 seconds.
//   We create an array called promises and populate it with the three promises.
//   We call Promise.all(promises), passing in the array of promises. This returns a new promise.
//   We chain a .then() method to the returned promise to handle the successful resolution of all promises.
//   Inside the .then() callback, we log the results, which is an array containing the resolved values of all the promises in the same order as the input array.
//   We chain a .catch() method to the returned promise to handle any rejections that might occur during the execution of the promises.
//   Inside the .catch() callback, we log the error if any of the promises are rejected.

  //-------------------part 2----------------------//


const form = document.getElementById('city-form');
const sunriseTimesDiv = document.getElementById('sunrise-times');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const getCityId = document.getElementById('city1-lat').value;
  const getCityId1 = document.getElementById('city1-lon').value;
  const getCityId2 = document.getElementById('city2-lat').value;
  const getCity2 = document.getElementById('city2-lon').value;

  const getApiCity1 = fetch(`https://api.sunrise-sunset.org/json?lat=${getCityId}&lng=${getCityId1}`)
    .then(response => response.json())
    .then(data => data.results.sunrise);

  const getApiCity2 = fetch(`https://api.sunrise-sunset.org/json?lat=${getCityId2}&lng=${getCity2}`)
    .then(response => response.json())
    .then(data => data.results.sunrise);

  Promise.all([getApiCity1, getApiCity2])
    .then(sunriseTimes => {
      sunriseTimesDiv.textContent = `Sunrise Time for City 1: ${sunriseTimes[0]}, Sunrise Time for City 2: ${sunriseTimes[1]}`;
    })
    .catch(error => {
      sunriseTimesDiv.textContent = 'Error retrieving sunrise times.';
      console.error(error);
    });
});



// const form = document.getElementById('city-form');
// const sunriseTimesDiv = document.getElementById('sunrise-times');

// form.addEventListener = ('submit', function(event) {
// event.preventDefault();

// const getIDcity1 = document.getElementById("city1-lat").value;
// const getID1 = document.getElementById("city1-lon").value;
// const getIDcity2 = document.getElementById("city2-lat").value;
// const getID2 = document.getElementById("city2-lon").value;

// const getApiCity1 = fetch(`https://api.sunrise-sunset.org/json?lat=${getIDcity1}&lng=${getID1}`)
// .then(resp => resp.json())
// .then(data => data.results.sunrise);

// const getApiCity2 = fetch(`https://api.sunrise-sunset.org/json?lat=${getIDcity2}&lng=${getID2}`)
// .then(resp => resp.json())
// .then(data => data.results.sunrise);

// Promise.all([getApiCity1, getApiCity2])
// .then(sunriseTimes => {
//     sunriseTimesDiv.textContent = `Sunrise Time for City 1: ${sunriseTimes[0]}, Sunrise Time for City 2: ${sunriseTimes[1]}`;
// })
// .catch(error => {
// sunriseTimesDiv.textContent = "Error retrieving sunrise times.";
// console.error(error);
//     });
// }); 
