fetch("https://pokeapi.co/api/v2/pokemon?limit=151%27")
    .then(function(pokedex)
    {
return pokedex.json();

    })
    .then(function(pokedexEntry)
    {
       console.log(pokedexEntry);
    })