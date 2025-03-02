function loadAbout() {
  // Reset the content
  const contentDiv = document.getElementById("content");
  contentDiv.innerHTML = "";

  // Create the DOM structure
  const aboutDiv = document.createElement("div");
  aboutDiv.id = "about";
  contentDiv.appendChild(aboutDiv);

  // All about the header //
  const headerContent = document.createElement("h1");
  headerContent.textContent = "About Yaris";
  aboutDiv.appendChild(headerContent);

  // Writing the paragraphs for the about page
  const paragraphs = [
    "Welcome to Yaris, a place where flavors meet passion. Nestled in the heart of the city, our restaurant is dedicated to serving exquisite dishes crafted from the finest ingredients. Whether you're here for a casual lunch or a romantic dinner, Yaris offers a warm and inviting atmosphere that makes every visit special.",
    "At Yaris, we take pride in our unique blend of traditional and modern cuisine. Our menu features an array of handcrafted dishes inspired by global flavors, from sizzling grilled meats to delicate seafood creations. Don’t miss our signature dish, the Yaris Special, a fusion of bold spices and fresh, locally sourced ingredients.",
    "Beyond the food, Yaris is an experience. Our cozy, elegant decor is designed to transport you to a place of comfort and delight. Whether you're enjoying a candlelit dinner, a family gathering, or a weekend brunch with friends, we promise an atmosphere that complements the flavors on your plate. Join us and make every meal a memory!",
  ];

  paragraphs.forEach((text) => {
    const p = document.createElement("p");
    p.textContent = text;
    p.classList.add("about-box");
    aboutDiv.appendChild(p);
  });
}

export default loadAbout;
