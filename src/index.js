import loadHome from "./contact";
import loadAbout from "./about";
import loadMenu from "./menu";
import './style.css';


function loadButtons () {
    const currentDiv = document.getElementById("content"); 
    const homeButton = document.getElementById('contact');
    const aboutButton = document.getElementById('about-button');
    const menuButton = document.getElementById('menu');


    homeButton.addEventListener("click", (e) => {
        loadHome();
    })

    aboutButton.addEventListener("click", (e) => {
        loadAbout();
    })

    menuButton.addEventListener("click", (e) => {
        loadMenu();
    })

}

loadButtons();

