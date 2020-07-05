

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели", "");
        }
    },
    rememberMyFilms: function () {
        for (i = 0; i < 2; i++) {
            const a = prompt("Один из последних просмотренных фильмов?", "");
            const b = prompt("На сколько оцените его", "");
            if (a != null && b != null && a !== "" && b != "" && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log("done");
            } else {
                i--;
                console.log("error");
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический кинозритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (i = 1; i <= 3; i++) {
            const genres = prompt(`Ваш любимый жанр под номером ${i}`, "").toLowerCase();

            if (genres != null &&  genres !== "") {
                personalMovieDB.genres[i - 1] = genres;
                console.log("done");                                                   
            } else {
                i--;
                console.log("error");
            }
        }
    

        //     // for (i = 1; i < 2; i++) {
        //     //     const genres = prompt(`Ваш любимые жанры через запятую`, "");
        //     //     if (genres != null &&  genres !== "") {
        //     //         personalMovieDB.genres = genres.split(",");
        //     //         personalMovieDB.genres.sort();
        //     //         console.log("done");                                      вариант с методом split и sort
        //     //     } else {
        //     //         i--;
        //     //         console.log("error");
        //     //     }

            
        
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${++i} : это ${item}`);
            });
        }
    
};


// start(); 
// personalMovieDB.writeYourGenres();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();  

// personalMovieDB.showMyDB(personalMovieDB.privat);
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB(personalMovieDB.privat);

