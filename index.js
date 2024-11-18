"use strict";

let numberOfFilms;

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    while (
      numberOfFilms == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
    personalMovieDB.count = numberOfFilms;
  },
  rememberMyFilms: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", "");
      const b = +prompt("На сколько оцените его?", "");

      if (a !== "" && b !== "" && a !== null && b !== null && a.length <= 50) {
        personalMovieDB.movies[a] = b;
      } else {
        i--;
        console.log("Error");
      }
    }
  },
  writeYourGenres: () => {
    for (let i = 1; i <= 3; i++) {
      const genres = prompt(`Ваш любимый жанр под номером ${i}?`, "");
      if (genres !== "" && genres !== null) {
        personalMovieDB.genres[i - 1] = genres;
      } else {
        i--;
        console.log("Error");
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`Любимый жанр ${i + 1} - это ${item}`);
    });
  },
  detectPersonalLevel: () => {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },
  showMyDB: () => {
    if (!personalMovieDB.private) {
      console.log(personalMovieDB.private);
    } else {
      console.log("Данные приватны и не могут быть показаны.");
    }
  },
  toggleVisibleMyDB: () => {
    personalMovieDB.private = !personalMovieDB.private;
  },
};
