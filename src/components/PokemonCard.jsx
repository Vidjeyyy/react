import PropTypes from "prop-types";

function PokemonCard({ props }) {


    return <figure>
        {props.imgSrc === undefined ? <p>???</p> : <img src={props.imgSrc} />}
        <figcaption>{props.name}</figcaption>
    </figure>

}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgSrc: PropTypes.string,
    }).isRequired,
}



export default PokemonCard;