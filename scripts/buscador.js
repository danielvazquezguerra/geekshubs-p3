
const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
const baseUrl = 'https://api.themoviedb.org/3/search/movie?'; 
let busqueda = 'bad boys';
const lista = '&language=en-US&query=';
let rootFetch = baseUrl+key+lista+busqueda;
let container = document.querySelector('.container-grid');
let containerUp = document.querySelector('.container-up');
let img = document.createElement('img');
let imgBusqueda = document.querySelector('.imgBusqueda');
const imgRootBase = `https://image.tmdb.org/t/p/w500`;


axios.get(rootFetch)
.then(res => {
    let peliculas = res.data.results;
    peliSlice = peliculas.slice(1,6);
    let peliFondo = peliculas[0];

    console.log(peliculas)

    imgBusqueda.innerHTML = `<img class='img-busqueda' src ='${imgRootBase}${peliculas[0].poster_path}')>`;


    
    for (pelicula of peliSlice) {
        

        console.log(pelicula.title);

        if (pelicula.poster_path != null) {

            let rutaImg = imgRootBase+pelicula.poster_path;
            container.innerHTML += `<div class="fotopeli"><img class="foto-down" id='img-index' src="${rutaImg}"></div>` 
    
        }
        
       
    }

    containerUp.style.background = `url('${imgRootBase}${peliFondo.poster_path}')`;
    containerUp.style.backgroundSize = 'cover';
    containerUp.style.background.filter = 'grayscale(100%)';


})
