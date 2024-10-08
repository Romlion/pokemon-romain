import PropTypes from "prop-types"

  
function PokemonCard ({pokemon}) {
    return (
       <figure className="card">
        {pokemon.imgSrc ? (
            <img src={pokemon.imgSrc} alt={`Pokemon ${pokemon.name}`} className="card-img" />
        ) : (
            <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
       </figure>
    );
}

PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
        imgSrc: PropTypes.string,
        name: PropTypes.string.isRequired,
    })
}

export default PokemonCard