let page = 1;
const APIURL =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=";

const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const main = document.querySelector('main')
const form = document.querySelector('form')
const search = document.getElementById('search')
const btn = document.querySelectorAll('.btn')

async function getMovies(url) {
  const response = await fetch(url);

  const respData = await response.json();
  showMovies(respData.results); 
}

const showMovies = (movies) => {
  main.innerHTML = "";
  console.log(movies)
  movies.forEach((movie) => {
    const { poster_path, title, vote_average ,overview} = movie;
    const movieEl = document.createElement("DIV");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
       <img src="${IMGPATH + poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassDependsRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
          <h4> Overview </h4>
          ${overview}
        </div>
        `;
    main.appendChild(movieEl);
  });
}
const getClassDependsRate = (rate) => {
    if(rate >= 8){
        return 'green';
    }else if (rate >= 5){
        return 'yellow'
    }else{
        return 'red'
    }
}
getMovies(APIURL + page);
form.addEventListener('submit', function(e){
    e.preventDefault()
    const searchVal = search.value;
    if(searchVal){
      getMovies(SEARCHAPI+ searchVal)
      search.value = "";
    }
})

btn.forEach(button => {
  button.addEventListener('click',function(e){
    e.preventDefault()
    if(button.innerText === "Prev"){
      if(page > 1){
      page--;
      getMovies(APIURL + page)
    }
    }else{
      page++
      getMovies(APIURL + page)
    }
  })
});