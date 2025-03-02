function loadContact () {
    
    const currentDiv = document.getElementById("content"); 
    currentDiv.innerHTML  = ""; // Reset the content


    const contactHeader = document.createElement("h1");
    contactHeader.textContent = "Contact details";

    const contactDetails = [
        "Telephone: 25 25 25 25",
        "E-mail: David.magister.mail@gmail.com",
        "Fax: Fax me",    
    ]

    contactDetails.forEach(contact => {
        const p = document.createElement("p");
        p.textContent = contact;
        p.classList = "contact-info";

        currentDiv.appendChild(p);
    })

/* 
    const textDiv = document.createElement("div");
    const textContent = document.createTextNode("This is the home page."); 
    
    textDiv.appendChild(textContent);

    currentDiv.appendChild(textContent); */
    
    }

    export default loadContact;