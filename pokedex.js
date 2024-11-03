<<<<<<< HEAD
fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
    .then(function(pokedex)
    {
return pokedex.json();

    })
    .then(function(pokedexEntry)
    {
       console.log(pokedexEntry);
=======
fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
    .then(function(pokedex)
    {
return pokedex.json();

    })
    .then(function(pokedexEntry)
    {
       console.log(pokedexEntry);
>>>>>>> bb5664aa0474de995f7cc20cb783ef8fec1f6cd4
    })