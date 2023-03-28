import PropTypes from "prop-types";

function PokemonCard({ name, imgSrc }) {


    return <figure>
        {imgSrc === undefined ? <p>???</p> : <img src={imgSrc} />}
        <figcaption>{name}</figcaption>
    </figure>

}

PokemonCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string,

}




export default PokemonCard;