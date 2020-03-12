let busqueda = 'maria';
const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
const baseUrl = 'https://image.tmdb.org/t/p/'; 
const imageSize = 'w500/';
fetch(`${baseUrl}${imageSize}${key}&query=${busqueda}`)

.then(res => res.json())
.then(res => {

    let peliculas = res.results;

    console.log(peliculas);
    

});


