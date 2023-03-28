
function PokemonCard(props) {

    console.log(props);

    return <figure>
        {props.imgSrc === undefined ? <p>???</p> : <img src={props.imgSrc} />}
        <figcaption>{props.name}</figcaption>
    </figure>

}




export default PokemonCard;