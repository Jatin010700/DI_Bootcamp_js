
let form = document.querySelector('#libform');
let nounInput = document.querySelector('#noun');
let adjInput = document.querySelector('#adjective');
let personInput = document.querySelector('#person');
let verbInput = document.querySelector('#verb');
let placeInput = document.querySelector('#place');
let storySpan = document.querySelector('#story');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let nounValue = nounInput.value;
  let adjValue = adjInput.value;
  let personValue = personInput.value;
  let verbValue = verbInput.value;
  let placeValue = placeInput.value;

  if (nounValue === '' || adjValue === '' || personValue === '' || verbValue === '' || placeValue === '') {
    console.error('All fields are required.');
    return;
  }

  console.log(nounValue, adjValue, personValue, verbValue, placeValue);

  let story = `${personValue} went to ${placeValue} and saw a ${adjValue} ${nounValue}. ${personValue} ${verbValue} and was very happy.`;
  storySpan.textContent = story;
});