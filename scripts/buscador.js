
// Evento click que captura los datos del input. 

document.querySelector('#buscar').addEventListener('click', ()=>{

    let container = document.querySelector('.container-grid');

    container.innerHTML = ""; /*para actualizar el grid y vaciar la busqueda anterior*/

    const baseUrl = 'https://api.themoviedb.org/3/search/movie?';
    const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
    const lista = '&language=en-US&query=';
    let input = document.querySelector('#input-busqueda').value;

    let busqueda = input;
    let rootFetch = baseUrl+key+lista+busqueda;
    
   
    // Peticion a la API 

    axios.get(rootFetch)

    .then(res => {

        let peliculas = res.data.results;
        peliSlice = peliculas.slice(0,5);
        let peliFondo = peliculas[0];

    console.log(peliculas)

    let fondoPeli = document.querySelector('.fondo-peli');
    let imgBusqueda = document.querySelector('.imgBusqueda');
    let title = document.querySelector('#title');
    let description = document.querySelector('#description');
    let actor = document.querySelector('#actor');
    title.innerHTML = peliculas[0].title;
    description.innerHTML = peliculas[0].overview;
    actor.innerHTML = peliculas[0].vote_average;
    
    console.log(input);
    const imgRootBase = `https://image.tmdb.org/t/p/w500`;
    
// Asignacion de fondo para el Wrapper. 

    imgBusqueda.innerHTML = `<img class='img-busqueda' src ='${imgRootBase}${peliculas[0].poster_path}')>`;


// Recorrido del ARRAY y peticion de solo los 5 primeros o los menos de 5. 
    
    for (pelicula of peliSlice) {
        

        if (pelicula.poster_path != null) {

            let rutaImg = imgRootBase+pelicula.poster_path;
            container.innerHTML += `<div class="fotopeli"><img class="foto-down" id='img-index' src="${rutaImg}"></div>` 
    
        }
       
    }

    // Filtros para los fondos. 

    fondoPeli.style.background = `url('${imgRootBase}${peliFondo.poster_path}')`;
    fondoPeli.style.backgroundSize = 'cover';
    fondoPeli.style.filter = 'grayscale(100%)';


})



})