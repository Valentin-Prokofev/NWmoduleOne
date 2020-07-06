const box = document.getElementById("box"),
    btns = document.getElementsByTagName("button"),
    circles = document.getElementsByClassName("circle"),
    hearts = document.querySelectorAll(".heart"),
    oneheart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper");



//  box.style.backgroundColor = "blue";  
//  box.style.width = "500px";

box.style.cssText = "background-Color: blue; width: 500px";

btns[1].style.borderRadius = "100%";

circles[0].style.backgroundColor = "red";

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }

hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement("div");

// const text = document.createTextNode("I was here");

div.classList.add("black");

document.body.append(div);

// document.querySelector(".wrapper").append(div); 

// wrapper.prepend(div);

// hearts[0].before(div);
// hearts[0].after(div);

// circles[0].remove();
// hearts[0].replaceWith(circles[0]);

div.innerHTML = "<h1>Hello world</h1>";
// div.textContent = "hello";

div.insertAdjacentHTML("beforeend", "<h2>Hello</h2>");
