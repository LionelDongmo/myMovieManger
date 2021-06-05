// API/TMDBApi.js
import React from 'react'

export function uriSearchedText (per_page, page, text) { // https://api.drl-dev.com/wpmovie  http://localhost/projets/wprest-api
  return 'https://api.drl-dev.com/wpmovie/wp-json/wp/v2/movie?_fields=id,date,excerpt,title,link,imageUrl,taxonomies,postMeta&per_page=' + per_page + '&page=' + page +'&search=' + text
}


function movie_caracteristiques(){
  return fetch('http://localhost/projets/wprest-api/wp-json/wp/v2/movie?meta_key=_is_popular_movie&meta_value=yes&_fields=id,date,excerpt,title,link,imageUrl,taxonomies,postMeta') 
  .then((response) => response.json())
  .catch((error) => console.error(error))
}

export const uriPopularMovie = ()=>{
  const [list, setList] = React.useState([])
  movie_caracteristiques().then(data => {
    setList([...list, ...data])
  })
  console.log(list);
}

export const uriNewMovie= '' 

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
