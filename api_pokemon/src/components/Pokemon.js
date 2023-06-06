import {useState, useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000")
            .then(response => setPokemon(response.data))
    }, []);
    console.log(pokemon.results, '------------------------------------')


    return (
        <div>
            {pokemon.results.length > 0 && pokemon.results.map((pokes, index) => {
                return (<div key = {index}>{pokes.name}</div> )
            })}
        </div>
    )
}

export default Pokemon


