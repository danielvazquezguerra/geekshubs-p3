
const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
const baseUrl = 'https://api.themoviedb.org/3/search/movie?'; 
let busqueda = 'amor';
const lista = '&language=en-US&query=';
let rootFetch = baseUrl+key+lista+busqueda;
let container = document.querySelector('.container');



axios.get(rootFetch)
.then(res =>{
    let peliculas = res.data.results
    console.log(peliculas)

    for(pelicula of peliculas) {

        let rutaImg = 'https://image.tmdb.org/t/p/w500'+pelicula.poster_path;
        console.log(pelicula)
       
        container.innerHTML = '<div><img class="fotopeli" src='+rutaImg+'></div>';

    }

    
})
