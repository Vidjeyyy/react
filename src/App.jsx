import MyTitle from "./components/MyTitle"
import './App.css';
import PokemonCard from "./components/PokemonCard";
import { useState } from "react";
import NavBar from "./components/NavBar";



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
  const pokemon = pokemonList[index];

  return (
    <div>
      <PokemonCard props={pokemon} />
      <NavBar pokemonList={pokemonList} setIndex={setIndex} index={index} />

    </div>

  )

}




export default App



/*let [index, setIndex] = useState(0);
  let handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);

  }
  let handleOnClick = () => {
    {
      (index === 0) ? setIndex((prevIndex) => (prevIndex + (pokemonList.length - 1))) :
        setIndex((prevIndex) => (prevIndex - 1) % pokemonList.length);
    }


  }*/