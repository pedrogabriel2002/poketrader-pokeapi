var myXP = 0
var yourXP = 0

const formOne = document.querySelector('#form-one')
const formTwo = document.querySelector('#form-two')
const submit = document.querySelector('#submit')

const search = document.querySelector('#pokemon-one')
const searchTwo = document.querySelector('#pokemon-two')
const myPoke = document.querySelector('#myPoke')
const yourPoke = document.querySelector('#yourPoke')

const buttonAddOne = document.querySelector('#btn-add')
const buttonAddTwo = document.querySelector('#btn-add-two')

const base = document.querySelector('#base')
const baseTwo = document.querySelector('#base-two')

const playerOneXP = document.querySelector('#player-one')
const playerTwoXP = document.querySelector('#player-two')

const pokemonTemplate = document.querySelector('#pokemonTemplate').innerHTML

function toCompareXP() {
    let compare = myXP - yourXP
    if (Math.sign(compare) == -1) {
        compare = compare * -1;
        if (compare > 80){
            return alert('Troca Injusta')
        } else {
            return alert('Troca Justa')
        }
    } else if (compare > 80) {
        return alert('Troca Injusta')
    } else {
        return alert('Troca Justa')
    }
}

formOne.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    fetch('https://pokeapi.co/api/v2/pokemon/' + encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                if (showMyPokemons() === 6) {
                    return alert('Quantidade Máxima de Pokémons Alcançada')
                }
                addMyPokemon(data.name)
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name,
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default
                })
                myXP += data.base_experience
                myPoke.value = myPokemons.toString()
                playerOneXP.textContent = 'Experiência Total: ' + myXP

                base.insertAdjacentHTML('beforeend', html)
            }
        })
    })
})

formTwo.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = searchTwo.value

    fetch('https://pokeapi.co/api/v2/pokemon/' + encodeURI(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                alert(data.error)
            } else {
                if (showYourPokemons() === 6) {
                    return alert('Quantidade Máxima de Pokémons Alcançada')
                } 
                addYourPokemon(data.name)
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name,
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default
                })
                yourXP += data.base_experience
                yourPoke.value = yourPokemons.toString()
                playerTwoXP.textContent = 'Experiência Total: ' + yourXP

                baseTwo.insertAdjacentHTML('beforeend', html)
            }
        })
    })
})

function required() {
    if (myPoke.value == "" && yourPoke.value == "") {
        alert('É necessário ao menos um pokémon envolvido na troca');
    }
}

function removeAll() {
    const pkInfo = document.querySelectorAll('.pokemonInfo');
    deleteAll()

    myPoke.value = ''
    yourPoke.value = ''

    myXP = 0
    yourXP = 0

    playerOneXP.textContent = 'Experiência Total: 0'
    playerTwoXP.textContent = 'Experiência Total: 0'

    pkInfo.forEach(pkInfo => {
        pkInfo.remove();
    });
}