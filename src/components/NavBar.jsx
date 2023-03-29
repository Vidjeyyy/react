import { useState } from "react";
import PropTypes from "prop-types";



function NavBar({ pokemonList, setIndex, index }) {
    let handleClick = () => {
        setIndex((prevIndex) => (prevIndex + 1) % pokemonList.length);

    }
    let handleOnClick = () => {
        {
            (index === 0) ? setIndex((prevIndex) => (prevIndex + (pokemonList.length - 1))) :
                setIndex((prevIndex) => (prevIndex - 1) % pokemonList.length);
        }


    }
    //const pokemon = pokemonList[index];

    return <div>
        <button onClick={handleOnClick}>Precedent</button>
        <button onClick={handleClick}>Suivant</button>
    </div>


}

export default NavBar;