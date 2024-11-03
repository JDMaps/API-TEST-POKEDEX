fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php")
    .then(function(response)
    {
return response.json();

    })
    .then(function(jsonData)
    {
       console.log(jsonData);
       
       
    })