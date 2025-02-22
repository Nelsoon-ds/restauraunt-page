function loadAbout () {

    const contentDiv = document.getElementById("content"); 
    contentDiv.innerHTML  = ""; // Reset the content

    const textDiv = document.createElement("div");


    // All about the header //
    const headerContent = document.createElement('h1');
    const headerText = document.createTextNode('Yaris Familiehave');
    headerContent.appendChild(headerText);


    contentDiv.appendChild(headerContent);

    // Text example
    const aboutText = document.createElement('div');
    aboutText.setAttribute("id", "family-description");
    const textContent = document.createTextNode("We are a small family owned restaurant based in Copenhagen, Denmark"); 
    
    aboutText.appendChild(textContent);

    contentDiv.appendChild(aboutText);
    
    
    }


export default loadAbout;