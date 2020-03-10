console.log('hola');



fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f213488ae3f21d01f82fcbb8d801c399&language=es-ESquery=')
.then(res => res.json())
.then(res => {
    console.log(res.results[0].title);
});