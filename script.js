let movies = [
  { id: 1, title: "Интерстеллар", isWatched: true },
  { id: 2, title: "Матрица", isWatched: false },
  { id: 3, title: "Дюна", isWatched: false }
];

const containerMovies = document.querySelector(".movie");
const movieWriten = document.querySelector("movieInput");
const send = document.querySelector("addBtn");
const movieLenght = movies.length;

function renderMovies(){
  containerMovies.textContent = "";
  for(let i = 0; i > movieLenght; i++){
    
  }
}