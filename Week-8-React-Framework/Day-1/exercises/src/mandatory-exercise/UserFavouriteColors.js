import React from 'react';


            function UserFavoriteColors(props) {
                const { user } = props;
              
                const animalItems = user.map((animal, index) => (
                  <li key={index}>{animal}</li>
                ));
              
                return (
                  <div>
                    <h1>User Favorite Animals</h1>
                    <ul>{animalItems}</ul>
                  </div>
                );
              }
              

  export default UserFavoriteColors;