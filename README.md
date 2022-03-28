# poketrader-pokeapi

- Trocas de pokémon usando a [pokeapi](https://pokeapi.co)

## Modelo
- `id`: Numero de indentificação único(gerado auto pelo MongoBD Atlas);
- `myPoke`: _String_ Referenciando os pokemons do jogador número 1 usados na troca;
- `yourPoke`: _String_ Referenciandoos pokemons do jogador número 2 usados na troca;

[mais sobre...](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/models/historyTrade.js)

____

## Métodos

- ### Cadastro da troca de pokémon(create trade)

| Method     | URI                               | File                         | View                      |
|------------|-----------------------------------|------------------------------|---------------------------|
| `POST`     | `/pokemon`                               | [`src\index.js`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/index.js)     | [`public/index.html`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/public/index.html)   |

- ### Data(read trade)
 
| Method     | URI                               | File                         | View                      |
|------------|-----------------------------------|------------------------------|---------------------------|
| `GET` | `/historic`                           | [`src\index.js`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/index.js)     | [`src/views/historic.ejs`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/views/historic.ejs)    |

____

## Regras

- Deve haver pelo menos UM pokémon em cada lado da troca

____

## FAQs
- Como adicionar uma troca na base de dados?
  - Vá para pagina inicial
  - Insira os pokémons que deseja trocar
  - Clique no botão `Fazer a troca`
- Como ver as trocas feitas?
  - Na página inicial clique no botão `Histórico`
  - Você será redirecionado para /historic e lá estarão as trocas

____

## Ferramentas usadas:
  - [Mongoose](https://www.npmjs.com/package/mongoose)
  - [MongoDB](https://www.npmjs.com/package/mongodb)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [Expressjs](https://www.npmjs.com/package/express)
  - [ejs](https://www.npmjs.com/package/ejs)
  - [dotenv](https://www.npmjs.com/package/dotenv)
