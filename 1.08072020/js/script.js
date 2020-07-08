/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// const movieDB = {
//     movies: [
//         "Логан",
//         "Лига справедливости",
//         "Ла-ла лэнд",
//         "Одержимость",
//         "Скотт Пилигрим против...",
//         "Аретмия"
//     ]
// };



// let adv = document.querySelectorAll('.promo__adv img'),
//     poster = document.querySelector(".promo__bg"), 
//     genre = poster.querySelector(".promo__genre"),
//     movieList = document.querySelector(".promo__interactive-list");


// genre.textContent = "драма";

// adv.forEach(item => {
//      item.remove();
// });

// poster.style.backgroundImage = "url('img/bg.jpg')";

// movieList.innerHTML = "";

// movieDB.movies.sort();

// movieDB.movies.forEach((film, i) => {
//      movieList.innerHTML += `
//           <li class="promo__interactive-item">${++i} ${film}
//               <div class="delete"></div>
//           </li> 
// `;
// });

// Следующее задание

document.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против...",
            "Аретмия"
        ]
    };



    let adv = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector(".promo__bg"),
        genre = poster.querySelector(".promo__genre"),
        movieList = document.querySelector(".promo__interactive-list"),
        addForm = document.querySelector("form.add "),
        addInput = addForm.querySelector(".adding__input"),
        checkBox = addForm.querySelector("[type = 'checkbox']");


    addForm.addEventListener("submit", (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkBox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}... `;
            }
            if (favorite) {
                  console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMoviesList(movieDB.movies, movieList);
        }



        event.target.reset();

    });



    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });

    };


    const makeChanges = () => {
        poster.style.backgroundImage = "url('img/bg.jpg')";

        genre.textContent = "драма";
    };


    const sortArr = (arr) => {
        arr.sort();
    };



    function createMoviesList(films, parent) {
        parent.innerHTML = "";

        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                 <li class="promo__interactive-item">${++i} ${film}
                      <div class="delete"></div>
                 </li> 
             `;
        });

        document.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMoviesList(films, parent);
            });

           
        });
    }




    deleteAdv(adv);
    makeChanges();
    
    createMoviesList(movieDB.movies, movieList);
});