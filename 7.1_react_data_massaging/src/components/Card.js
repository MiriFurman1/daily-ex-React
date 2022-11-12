import React from 'react';
function Card({ personsArr }) {
  console.log(personsArr);
  return (
    <div className='cards'>
      {personsArr.map((person) => (
        <div className='card'>
          <h3>{person.name}</h3>
          <h4>{person.birthday}</h4>
          <ul>
            <b>Favorite meat</b>
            {person.favoriteFoods.meats.map((meat) => (
              <li>{meat}</li>
            ))}
          </ul>
          <ul>
            <b>Favorite fish</b>
            {person.favoriteFoods.fish.map((fish) => (
              <li>{fish}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Card;
