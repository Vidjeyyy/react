import { useState } from "react";



function NavBar({ pokemonList, setIndex, index }) {


    /*let handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);

    }
    let handleOnClick = () => {
        {
            (index === 0) ? setIndex((prevIndex) => (prevIndex + (pokemonList.length - 1))) :
                setIndex((prevIndex) => (prevIndex - 1) % pokemonList.length);
        }
    }*/









    return <div>


        {pokemonList.map((pokemon, index) => (

            <button key={pokemon.name} onClick={() => { setIndex(index) }}>{pokemon.name}</button>

        ))}

    </div>


}

export default NavBar;