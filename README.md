# poketrader-pokeapi

## Modelo
- `id`: Numero de indentificação único(gerado auto pelo MongoBD Atlas);
- `myPoke`: _String_ Referenciando os pokemons do jogador número 1 usados na troca;
- `yourPoke`: _String_ Referenciandoos pokemons do jogador número 2 usados na troca;

[mais sobre...](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/models/historyTrade.js)

## Métodos

- ### Cadastro da troca de pokémon(create trade)

| Method     | URI                               | File                         | View                      |
|------------|-----------------------------------|------------------------------|---------------------------|
| `POST`     | `/pokemon`                               | [`src\index.js`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/index.js)     | [`public/index.html`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/public/index.html)   |

- ### Data(read trade)
 
| Method     | URI                               | File                         | View                      |
|------------|-----------------------------------|------------------------------|---------------------------|
| `POST` | `/historic`                           | [`src\index.js`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/index.js)     | [`src/views/historic.ejs`](https://github.com/pedrogabriel2002/poketrader-pokeapi/blob/main/src/views/historic.ejs)    |
