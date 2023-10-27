
// export async function getMovies() {
//     try {
//         const response = await fetch('http://localhost:3000/movies');
//         return response.json();
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

document.getElementById('toggleButton').addEventListener('click', function() {
    var form = document.getElementById('myForm');
    if (form.style.display === 'none') {
        form.style.display = 'block';
    } else {
        form.style.display = 'none';
    }
});



fetch('http://localhost:3000/movies').then(response => response.json())
    .then(cardsData => {
        const movieContainer = document.querySelector('#movie-card');


        cardsData.forEach(cardData => {
            const movieCard = document.createElement('div');

            const movieImage = document.createElement('img');
            const movieTitle = document.createElement('h3');
            const movieRating = document.createElement('h5');
            const movieSum = document.createElement('p');
            const movieGenre = document.createElement('h6')

            movieGenre.innerHTML = `Genre: ${cardData.genre}`;
            movieCard.classList.add('card');
            movieImage.classList.add('card-img');
            movieImage.src = cardData.image;
            movieTitle.innerHTML = `Title: ${cardData.title}`;
            movieRating.innerHTML = `Rating: ${cardData.rating}`;
            movieSum.innerHTML = `Summary: ${cardData.movieSummary}`;


            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieRating);
            movieCard.appendChild(movieGenre);
            movieCard.appendChild(movieSum);
            movieContainer.appendChild(movieCard);
        });
    });





