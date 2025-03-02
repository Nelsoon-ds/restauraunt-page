import tiramisuImg from "./images/tiramisu.jpg";
import butterSteak from "./images/Buttersteak.jpg";
import mezzePlatter from "./images/mezze-platter.jpg";
import spicybbqburger from "./images/spicy-korean-burger.jpg";
import trufflerisotto from "./images/truffle-rissotto.jpg";
import citrusSalmon from "./images/Citrus-salmon.jpg";
function loadMenu() {
  // Reset the content
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Create the DOM structure
  const menuContainer = document.createElement("div");
  menuContainer.id = "menu-container";
  contentDiv.appendChild(menuContainer);

  // All about the header //
  const headerContent = document.createElement("h1");
  headerContent.textContent = "Yaris Menu options";
  menuContainer.appendChild(headerContent);

  // Food object

  const foodItems = [
    {
      name: ["Garlic Butter Steak with Herb Roasted Potatoes"],
      img: [butterSteak],
    },
    {
      name: ["Honey Glazed Salmon with Citrus Quinoa Salad"],
      img: [citrusSalmon],
    },
    { name: ["Truffle Mushroom Risotto"], 
        img: [trufflerisotto] },
    { name: "Spicy Korean Fried Chicken Burger", 
        img: [spicybbqburger] },
    { name: "Mediterranean Mezze Platter", 
        img: [mezzePlatter] },
    { name: "Classic Tiramisu", 
        img: [tiramisuImg] },
  ];
  foodItems.forEach(item => {

    const menuItemWrapper = document.createElement("div");
    menuItemWrapper.classList = "menu-item-wrapper";

    
    // Generate text for each food
    const p = document.createElement("p");
    p.textContent = item.name;
    p.classList = "menu-item";

    // Create the images associated with each food
    const image = document.createElement("img");
    image.src = item.img;
    image.classList = "menu-image";

    // Append image and text 
    menuItemWrapper.appendChild(image);
    menuItemWrapper.appendChild(p);

    menuContainer.appendChild(menuItemWrapper);

  })
}

export default loadMenu;
