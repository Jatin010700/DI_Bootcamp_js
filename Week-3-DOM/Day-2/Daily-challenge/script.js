
let form = document.querySelector('#libform');
let nounInput = document.querySelector('#noun');
let adjInput = document.querySelector('#adjective');
let personInput = document.querySelector('#person');
let verbInput = document.querySelector('#verb');
let placeInput = document.querySelector('#place');
let storySpan = document.querySelector('#story');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  let nounValue = nounInput.value.trim();
  let adjValue = adjInput.value.trim();
  let personValue = personInput.value.trim();
  let verbValue = verbInput.value.trim();
  let placeValue = placeInput.value.trim();

  if (nounValue === '' || adjValue === '' || personValue === '' || verbValue === '' || placeValue === '') {
    console.error('All fields are required.');
    return;
  }

  console.log(nounValue, adjValue, personValue, verbValue, placeValue);

  let story = `${personValue} went to ${placeValue} and saw a ${adjValue} ${nounValue}. ${personValue} ${verbValue} and was very happy.`;
  storySpan.textContent = story;
});