// API/TMDBApi.js

export function uriSearchedText (per_page, page, text) { // https://api.drl-dev.com/wpmovie  http://localhost/projets/wprest-api
  return 'https://api.drl-dev.com/wpmovie/wp-json/wp/v2/movie?_fields=id,date,excerpt,title,link,imageUrl,taxonomies,postMeta&per_page=' + per_page + '&page=' + page +'&search=' + text
}


export function getBestFilmsFromApi (page) {
  return fetch('https://api.themoviedb.org/3/discover/movie?api_key=' + API_TOKEN + '&vote_count.gte=1000&sort_by=release_date.desc&language=fr&page=' + page)
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

export function getImageFromApi (name) {
  return 'https://image.tmdb.org/t/p/w300' + name
}
