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

const showMyPokemons = () => {
    return myPokemons.length
}

const showYourPokemons = () => {
    return yourPokemons.length
}

const deleteAll = () => {
    myPokemons.splice(0, myPokemons.length)
    yourPokemons.splice(0, yourPokemons.length)
}
