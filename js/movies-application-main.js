fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(movies => console.log(movies))
    .catch(error => console.error(error));
