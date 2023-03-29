import MyTitle from "./components/MyTitle"
import './App.css';
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";


/*const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];*/

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
  },
];


function App() {
  let [index, setIndex] = useState(0);
  let handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);

  }
  let handleOnClick = () => {
    {
      (index === 0) ? setIndex((prevIndex) => (prevIndex + (pokemonList.length - 1))) :
        setIndex((prevIndex) => (prevIndex - 1) % pokemonList.length);
    }


  }

  const pokemon = pokemonList[index];

  return (
    <div>
      <PokemonCard props={pokemon} />
      <button onClick={handleOnClick}>Precedent</button>
      <button onClick={handleClick}>Suivant</button>

    </div>

  )

}




export default App
