let searchMenu = document.getElementsByClassName("search-menu")[0];
let filmSearch = document.getElementById("film-search");
let search = document.getElementsByClassName("search")[0];

search.addEventListener("click", () => {
  searchMenu.classList.toggle("hide");
});

searchMenu.addEventListener("mouseover", (e) => {
  searchMenu.classList.toggle("hide");
});

search.addEventListener("mouseout", (e) => {
  searchMenu.classList.toggle("hide");
});
