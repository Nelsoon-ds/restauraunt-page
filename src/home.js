function loadHome () {
    
    const currentDiv = document.getElementById("content"); 
    currentDiv.innerHTML  = ""; // Reset the content


    const textDiv = document.createElement("div");
    
    const textContent = document.createTextNode("This is the home page."); 
    
    textDiv.appendChild(textContent);

    currentDiv.appendChild(textContent);
    
    }

    export default loadHome;