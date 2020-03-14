
const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
const baseUrl = 'https://api.themoviedb.org/3/search/movie?'; 
let busqueda = 'the godfather';
const lista = '&language=en-US&query=';
let rootFetch = baseUrl+key+lista+busqueda;
let container = document.querySelector('.container-grid');



axios.get(rootFetch)
.then(res => {
    let peliculas = res.data.results;
    peliculas = peliculas.slice(0,6);

    console.log(peliculas)
    
    for (pelicula of peliculas) {
        

        console.log(pelicula.title);

        if (pelicula.poster_path != null){

            let rutaImg = 'https://image.tmdb.org/t/p/w300'+pelicula.poster_path;
            container.innerHTML += `<div class="fotopeli"><img src="${rutaImg}"></div>` 
    
        }
        
       
    }

})
