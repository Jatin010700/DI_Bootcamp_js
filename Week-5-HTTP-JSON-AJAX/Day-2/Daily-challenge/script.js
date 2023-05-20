const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const gifContainer = document.getElementById('gifContainer');
const deleteAllButton = document.getElementById('deleteAllButton');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const searchQuery = searchInput.value.trim();
  if (searchQuery !== '') {
    fetchGif(searchQuery);
  }
});

function fetchGif(category) {
  const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${category}`;
  
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const gifUrl = data.data.images.fixed_height.url;
      appendGif(category, gifUrl);
    })
    .catch(error => console.log(error));
}

function appendGif(category, gifUrl) {
  const gifElement = document.createElement('div');
  gifElement.innerHTML = `
    <img src="${gifUrl}" alt="${category}">
    <button class="deleteButton">Delete</button>
  `;

  const deleteButton = gifElement.querySelector('.deleteButton');
  deleteButton.addEventListener('click', function() {
    gifElement.remove();
  });

  gifContainer.appendChild(gifElement);
}

deleteAllButton.addEventListener('click', function() {
  gifContainer.innerHTML = '';
});

