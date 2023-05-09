import { MoviesAPI } from './MoviesAPI';
import { createMovies } from '/src/js/catalog-functions/weekly-markup';
import { createUpcomingMovies } from '/src/js/catalog-functions/upcoming-markup';
import { onScroll, onToTopBtn, scrollPage } from './scroll';

const moviesAPI = new MoviesAPI();
const weeklyGallery = document.querySelector('.weekly-list');

// скрол
onScroll();
onToTopBtn();

async function onRenderPage() {
  try {
    const respons = await moviesAPI.getTrendMoviesWeek();
    // console.log(respons);

    const responsData = respons.results;
    // console.log(responsData.movie_id);

    //  отримуємо три рамдомних фільми
    let responsMovies = [];

    const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));

    while (responsMovies.length != 3) {
      let index = getRandomInt(responsData.length);
      responsMovies.push(responsData[index]);
      responsMovies = responsMovies.filter((v, i, arr) => arr.indexOf(v) == i);
    }

    const markup = responsMovies.reduce(
      (markup, responsMovies) => markup + createMovies(responsMovies),
      ''
    );

    // console.log(markup.length);

    updateNewsList(markup);
    // скрол
    scrollPage();
  } catch (err) {
    console.log(err);
  }
}
onRenderPage();
// console.log(onRenderPage());

function updateNewsList(markup) {
  weeklyGallery.innerHTML = markup;
}

// ===секція "нові фільми"===

const upcomingCard = document.querySelector('.upcoming-cover');

async function onRenderNewMovie() {
  try {
    const responsNewMovie = await moviesAPI.getUpcomingFilms();
    // console.log(respons);

    const responsDataMovie = responsNewMovie.results;
    // console.log(responsDataMovie);
    // console.log(responsData.length);

    // отримуємо один рамдомний фільм
    let randomNewMovie = [];

    const getRandomFilm = max => Math.floor(Math.random() * Math.floor(max));

    while (randomNewMovie.length != 1) {
      let index = getRandomFilm(responsDataMovie.length);
      randomNewMovie.push(responsDataMovie[index]);
      randomNewMovie = randomNewMovie.filter(
        (v, i, arr) => arr.indexOf(v) == i
      );
    }

    const markupNewMovie = randomNewMovie.reduce(
      (markup, randomNewMovie) => markup + createUpcomingMovies(randomNewMovie),
      ''
    );

    updateNewMovies(markupNewMovie);
    // скрол
    scrollPage();
  } catch (err) {
    console.log(err);
  }
}

onRenderNewMovie();
// console.log(onRenderPage());

function updateNewMovies(markup) {
  upcomingCard.innerHTML = markup;
}
