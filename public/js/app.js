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
    let compare = getMyTotalXP() - getYourTotalXP()
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
                addMyPokemon({pokemonName: data.name, pokemonXP: data.base_experience, pokemonSprite: data.sprites.front_default})
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name,
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default
                })

                myPoke.value = JSON.stringify(myPokemons)
                playerOneXP.textContent = 'Experiência Total: ' + getMyTotalXP()

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
                addYourPokemon({pokemonName: data.name, pokemonXP: data.base_experience, pokemonSprite: data.sprites.front_default})
                const html = Mustache.render(pokemonTemplate, {
                    pokemonName: data.name,
                    pokemonXP: data.base_experience,
                    pokemonSprite: data.sprites.front_default
                })

                yourPoke.value = JSON.stringify(yourPokemons)
                playerTwoXP.textContent = 'Experiência Total: ' + getYourTotalXP()

                baseTwo.insertAdjacentHTML('beforeend', html)
            }
        })
    })
})

function required() {
    if (myPoke.value == "" && yourPoke.value == "") return alert('É necessário ao menos um pokémon envolvido na troca');
}

function removeAll() {
    const pkInfo = document.querySelectorAll('.pokemonInfo');
    deleteAll()

    myPoke.value = ''
    yourPoke.value = ''

    playerOneXP.textContent = 'Experiência Total: 0'
    playerTwoXP.textContent = 'Experiência Total: 0'

    pkInfo.forEach(pkInfo => {
        pkInfo.remove();
    });
}