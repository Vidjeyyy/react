import PropTypes from "prop-types";

function PokemonCard({ name, imgSrc }) {


    return <figure>
        {imgSrc === undefined ? <p>???</p> : <img src={imgSrc} />}
        <figcaption>{name}</figcaption>
    </figure>

}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}



export default PokemonCard;