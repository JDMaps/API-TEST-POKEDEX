fetch("https://hpplussport.com/api/products")
    .then(function(response)
    {
return response.json();

    })
    .then(function(jsonData)
    {
       console.log(jsonData);
       
       
    })