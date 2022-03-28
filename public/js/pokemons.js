const myPokemons = []
const yourPokemons = []

const addMyPokemon = (pokemonName) => {
    myPokemons.push(pokemonName)
    return myPokemons
}

const addYourPokemon = (pokemonName) => {
    yourPokemons.push(pokemonName)
    return yourPokemons
}

const deleteAll = () => {
    myPokemons.splice(0, myPokemons.length)
    yourPokemons.splice(0, yourPokemons.length)
}
