



document.querySelector('#buscar').addEventListener('click', ()=>{
    
    let container = document.querySelector('.container-grid');
    container.innerHTML = "";

    const baseUrl = 'https://api.themoviedb.org/3/search/movie?';
    const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
    const lista = '&language=en-US&query=';
    let input = document.querySelector('#input-busqueda').value;
    let busqueda = input;
    let rootFetch = baseUrl+key+lista+busqueda;
    
   
    axios.get(rootFetch)

    .then(res => {

        let peliculas = res.data.results;
        peliSlice = peliculas.slice(0,6);
        let peliFondo = peliculas[0];

    console.log(peliculas)

    
    let containerUp = document.querySelector('.container-up');
    let img = document.createElement('img');
    let imgBusqueda = document.querySelector('.imgBusqueda');
    
    console.log(input);
    const imgRootBase = `https://image.tmdb.org/t/p/w500`;
    

    imgBusqueda.innerHTML = `<img class='img-busqueda' src ='${imgRootBase}${peliculas[0].poster_path}')>`;

    
    for (pelicula of peliSlice) {
        

        if (pelicula.poster_path != null) {

            let rutaImg = imgRootBase+pelicula.poster_path;
            container.innerHTML += `<div class="fotopeli"><img class="foto-down" id='img-index' src="${rutaImg}"></div>` 
    
        }

        
        
       
    }

    containerUp.style.background = `url('${imgRootBase}${peliFondo.poster_path}')`;
    containerUp.style.backgroundSize = 'cover';
    containerUp.style.background.filter = 'grayscale(100%)';


})



})