const API_URL = 'https://pokeapi.co/api/v2/';

//Generar un nro aleatorio entre [1,898]. Eso es el total de los pokemones
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//Haciendo las peticiones a la API de los pokemones
fetch(`${API_URL}pokemon/${randomNumber(1, 898)}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    //Objeto con las propiedades de los pokemones
    const pokemon = {
      myName: data.name,
      id: data.id,
      img: data.sprites.other.dream_world.front_default,
      hp: data.stats[0].base_stat,
      exp: data.base_experience,
      ataque: data.stats[1].base_stat,
      defensa: data.stats[2].base_stat,
      especial: data.stats[3].base_stat
    };

    //Imprimiendo el nombre del pokemon
    const name = document.querySelector('.card__name');
    name.prepend(document.createTextNode(pokemon.myName));

    //Imprimiendo el id del pokemon
    const id = document.querySelector('.card__id');
    id.append(document.createTextNode(pokemon.id));

    //Imprimiendo la imagen del pokemon
    const img = document.querySelector('.card__image');
    img.src = pokemon.img;

    //Imprimiendo la descripcion del pokemon

    //Imprimiendo el HP del pokemon
    const hp = document.querySelector('.card__description');
    hp.prepend(document.createTextNode(pokemon.hp));

    //Ataque del pokemon
    const ataque = document.querySelectorAll('.card__features h2')[0];
    ataque.append(document.createTextNode(pokemon.ataque));

    //Ataque especial del pokemon
    const especial = document.querySelectorAll('.card__features h2')[1];
    especial.append(document.createTextNode(pokemon.especial));

    //Defensa del pokemon
    const defensa = document.querySelectorAll('.card__features h2')[2];
    defensa.append(document.createTextNode(pokemon.defensa));
  })
  .catch(() => {
    document.body.innerHTML = '<h1>No se encontraron los recursos que solicitastes</h1>';
  });
