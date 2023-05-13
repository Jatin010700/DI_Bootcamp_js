const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];

const robotContainer = document.getElementById("robot-container");
const searchFilter = document.getElementById('mySearch');

const searchRobots = (robots) => {
robotContainer.innerHTML = "";

robots.forEach(robot => {
  const robotCard = document.createElement('div');
  robotCard.classList.add('robot-card');

  const robotImage = document.createElement('img');
  robotImage.src = robot.image;

  const robotName = document.createElement('h3');
  robotName.textContent = robot.name;

  const robotUsername = document.createElement('p');
  robotUsername.textContent = `@${robot.username}`;

  const robotEmail = document.createElement('p');
  robotEmail.textContent = robot.email;

  robotCard.appendChild(robotImage);
  robotCard.appendChild(robotName);
  robotCard.appendChild(robotUsername);
  robotCard.appendChild(robotEmail);

  robotContainer.appendChild(robotCard);
})};

const filterRobots = () => {
    const searchQuery = searchFilter.value.toLowerCase();
    const filteredRobots = robots.filter(robot => {
      const name = robot.name.toLowerCase();
      const username = robot.username.toLowerCase();
      return name.includes(searchQuery) || username.includes(searchQuery);
    });
    searchRobots(filteredRobots);
  };
  
searchFilter.addEventListener('input', filterRobots);

searchRobots(robots);

