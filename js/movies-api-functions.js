let movies = [];
// export async function getMovies() {
//     try {
//         const response = await fetch('http://localhost:3000/movies');
//         return response.json();
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }


    document.getElementById('toggleButton').addEventListener('click', function () {
        let form = document.getElementById('myForm');
        if (form.style.display === 'none') {
            form.style.display = 'block';
        } else {
            form.style.display = 'none';
        }
    });

function displayMovies() {
    const movieContainer = document.querySelector('#movie-card');
    movieContainer.innerHTML = "";

    movies.forEach(cardData => {
        const movieCard = document.createElement('div');
        // for (let i = 0; i < movies, length; i++) {


            const movieImage = document.createElement('img');
            const movieTitle = document.createElement('h3');
            const movieRating = document.createElement('h5');
            const movieSum = document.createElement('p');
            const movieGenre = document.createElement('h6')
            const dButton = document.createElement("button");
            const editButton = document.createElement("button");
            editButton.addEventListener("click", function () {
                let form = document.getElementById("myForm");
                if (form.style.display === 'none') {
                    form.style.display = 'block';
                } else {
                    form.style.display = 'none';
                }
            });
            const form1 = document.getElementById("myForm");
            form1.querySelectorAll("input").forEach(input => {
                if (input.id in movies) {
                    input.value = movies[input.id];
                }
            });

            const editForm = document.createElement("form");
            const editInputs1 = document.createElement("input");
            const editInputs2 = document.createElement("input");
            const editInputs3 = document.createElement("input");
            const editInputs4 = document.createElement("input");


            editInputs1.setAttribute("data-title", cardData.id);
            editInputs1.innerText="edit title";
            editForm.classList.add("edit-form")
            editButton.setAttribute("data-id", cardData.id);
            editButton.classList.add("edit-button");
            editButton.innerText = `Edit`;
            dButton.setAttribute("data-id", cardData.id);
            dButton.classList.add("delete-button");
            dButton.innerText = `DELETE`;
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
            movieCard.appendChild(dButton);
            movieCard.appendChild(editButton);
            movieContainer.appendChild(movieCard);


        // }
        // editButton.addEventListener("click", function () {
        //     const movieId = this.getAttribute("data-id");
        //     movieCard.update()
        //     updateJson(movieId);
        // })
        dButton.addEventListener("click", function() {
                // console.log(this);
            const movieId = this.getAttribute("data-id");
                movieCard.remove()
                deleteFromJson(movieId);
        })
    });
}


async function updateJson (id, cardData) {
    try {
        const url =" http://localhost:3000/movies/" + id;
        const options = {
            method: 'PUT',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(cardData)
        };
        const response = await fetch(url, options);
        const updateMovie = await response.json();
        return updateMovie;
    }catch (error) {
        console.log(error);
    }
}
async function deleteFromJson (id)  {

    try {
        const url = "http://localhost:3000/movies/" + id;
        const options = {
            method: "DELETE"
        };
        const response = await fetch(url, options);
        const deletedMovie = await response.json();
        return deletedMovie;
    } catch (error) {
        console.log(error);
    }
}
fetch('http://localhost:3000/movies')
        .then(response => response.json())
        .then(cardsData => {
            movies = cardsData;
            displayMovies();
        });


// document.querySelector(".delete-button").addEventListener("click", deleteMovie);
document.querySelector("#form-button").addEventListener("click", (event) => {
    event.preventDefault();

 // let deleteButton = document.createElement("button");
 // deleteButton.textContent ="Delete";
 // deleteButton.addEventListener("click", deleteMovie);

let newTitle = document.querySelector("#title").value;
let newGenre = document.querySelector("#genre").value;
let newRating = document.querySelector("#rating").value;
let newSummary = document.querySelector("#summary").value;
let newMovie = {
    "title": newTitle,
    "rating": newRating,
    "genre": newGenre,
    "movieSummary": newSummary,
}

    // console.log(newMovie);
movies.push(newMovie);
displayMovies();
addMovieToJson(newMovie);
//     let movieElement = document.createElement("div");
//     movieElement.textContent = `${newTitle} - ${newGenre} - ${newRating}`;
//     movieElement.appendChild(deleteButton);
//     document.querySelector("#movie-list").appendChild(movieElement);
});


const addMovieToJson = async (newMovie) => {
    try {
        const url = "http://localhost:3000/movies";
        const options = {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
        };
        console.log("Sending POST request", options);
        const response = await fetch(url, options);
        const addedMovie = await response.json();
        return addedMovie;
    } catch (error) {
        console.log(error);
    }



}





// document.querySelector("button").addEventListener("click", deleteMovie);
//
// let jasonString = JSON.stringify(movies);

