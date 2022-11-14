import { useEffect, useState } from 'react';
import axios from 'axios';

function Joke() {
  const [randomJoke, setRandomJoke] = useState('');
  const [categories, setCategories] = useState([]);
  const [chosenCategory, setChosenCategory]=useState("")
  const [randomJokeFromCategory, setRandomJokeFromCategory]=useState("")
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.chucknorris.io/jokes/random/');
      setRandomJoke(data.value)
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('https://api.chucknorris.io/jokes/categories');
      setCategories(data);
    };
    fetchData();
  }, []);

  useEffect((props) => {
    const fetchData = async () => {
        console.log(chosenCategory);
      const { data } = await axios.get(`https://api.chucknorris.io/jokes/random?category=${chosenCategory}`);
      setRandomJokeFromCategory(data.value);
    };
    fetchData();
  }, [chosenCategory]);


  function handleClick(e){
    setChosenCategory(e.target.innerHTML)
  }
  return (
    <div>
      <h1>Chuck Norris Jokes</h1>
      {randomJoke && <h3>random joke: {randomJoke}</h3>}
      {!randomJoke && <h3>My spinner</h3>}
      {categories.map(category=>{
        return <h3 onClick={handleClick}>{category}</h3>
      })}
      {randomJokeFromCategory&&<h4> random joke from category {chosenCategory}: {randomJokeFromCategory}</h4>}

    </div>
  );
}

export default Joke;