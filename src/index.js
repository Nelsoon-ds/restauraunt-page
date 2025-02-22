import loadHome from "./home";
import loadAbout from "./about";
import loadMenu from "./menu";


/* Navigation */

/* The home button */
/* loadHome();
 */

/* The about button */
/* loadAbout()
 */
/* The menu button */
/* loadMenu();
 */
function addButtons () {

    const currentDiv = document.getElementById("content"); 
    const homeButton = document.getElementById('home');
    const aboutButton = document.getElementById('about');
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

addButtons();

