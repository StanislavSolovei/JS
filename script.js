const movies = [
  { id: 1, title: "Интерстеллар", isWatched: false },
  { id: 2, title: "Матрица", isWatched: false },
  { id: 3, title: "Дюна", isWatched: false }
];

const containerMovies = document.querySelector(".container");
const movieWriten = document.querySelector("#movieInput");
const send = document.querySelector("#addBtn");
const movieLenght = movies.length;

function renderMovies(){
  containerMovies.textContent = "";
  movies.forEach((movie) => {
    const section = document.createElement("section");
    const paragraf = document.createElement("p");
    const button = document.createElement("button"); 
    paragraf.textContent = movie.title;
    button.textContent = "Просмотренно";
    section.classList.add("movie");
    button.addEventListener('click', () => {
        paragraf.classList.add("isWatched")    
        movie.isWatched = true;
    })
    if(movie.isWatched === true){
        paragraf.classList.add("isWatched")
    } 
    section.appendChild(paragraf);
    section.appendChild(button);
    containerMovies.appendChild(section);
  })  
}

send.addEventListener('click', () => {
    const text = movieWriten.value;
    const newMovie = {
        id: movies.lenght + 1,
        title: text,
        isWatched: false
    }
    movies.push(newMovie);
    renderMovies();
})

renderMovies();