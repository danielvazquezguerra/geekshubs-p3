let busqueda = 'el mago de oz';

fetch('https://api.themoviedb.org/3/search/movie?api_key=f213488ae3f21d01f82fcbb8d801c399&query='+busqueda)

.then(res => res.json())
.then(res => {

    let peliculas = res.results;

    for (let pelicula of peliculas) {
        
        console.log(pelicula.poster_path);

        let container = document.querySelector('.container');
        let peli = document.createElement('article');
        container.append(peli);
        console.log(peli);
        


    }
    

});


