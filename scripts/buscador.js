
const key = 'api_key=f213488ae3f21d01f82fcbb8d801c399';
const baseUrl = 'https://api.themoviedb.org/3/search/movie?'; 
let busqueda = 'amor';
const lista = '&language=en-US&query=';
let rootFetch = baseUrl+key+lista+busqueda;



axios.get(rootFetch)
.then(res =>{
    let peliculas = res.data.results
    console.log(peliculas)
})
