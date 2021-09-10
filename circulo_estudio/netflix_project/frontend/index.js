function fetchMovies() {
  fetch("http://localhost:8080/getMovies")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      insertMovies(data);
    });
}

const container = document.getElementById("container");

function insertMovies(movies) {
  const nodes = movies.map(function (movie) {
    return `
      <div class="card col-3 text-white m-2">
        <img src="${movie.picture}" class="card-img">
        <div class="card-img-overlay">
          <h5 class="card-title">${movie.title}</h5>
          <p class="card-text">${movie.actors.join(", ")}</p>
        </div>
      </div>
    `;
  });

  container.innerHTML = nodes.join("");
}

fetchMovies();
