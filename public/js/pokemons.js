const myPokemons = []
const yourPokemons = []

const addMyPokemon = ({pokemonName, pokemonXP}) => {
    const myPokemon = {pokemonName, pokemonXP}
    myPokemons.push(myPokemon)
    return { myPokemon }
}

const addYourPokemon = ({pokemonName, pokemonXP}) => {
    const yourPokemon = {pokemonName, pokemonXP}
    yourPokemons.push(yourPokemon)
    return { yourPokemon }
}

const showMyPokemons = () => {
    return myPokemons.length
}

const showYourPokemons = () => {
    return yourPokemons.length
}

const getMyTotalXP = () => {
    let sum = 0
    for (let index = 0; index < myPokemons.length; index++) {
        sum += myPokemons[index].pokemonXP;
    }
    return sum
}

const getYourTotalXP = () => {
    let sum = 0
    for (let index = 0; index < yourPokemons.length; index++) {
        sum += yourPokemons[index].pokemonXP;
    }
    return sum
}

const deleteAll = () => {
    myPokemons.splice(0, myPokemons.length)
    yourPokemons.splice(0, yourPokemons.length)
}
