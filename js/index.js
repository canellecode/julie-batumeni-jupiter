// 1. Add Footer with Copyright
let today = new Date();  // Create a Date object to get the current date
let thisYear = today.getFullYear();  // Get the current year dynamically

// Select the footer element in the DOM
let footer = document.querySelector("footer");

// Create a new paragraph element for the copyright text
let copyright = document.createElement("p");

// Set the content of the paragraph (including the copyright symbol)
copyright.innerHTML = `© Julie Batumeni ${thisYear}`;

// Append the new paragraph to the footer
footer.appendChild(copyright);

// 2. Create Skills List Dynamically
let skills = ["JavaScript", "HTML", "CSS", "GitHub", "Salesforce", "Project Management"];  // Array of skills

// Select the skills section and the unordered list (ul) inside it
let skillsSection = document.querySelector("#skills");
let skillsList = skillsSection.querySelector("ul");

// Loop through the skills array and create a list item for each skill
skills.forEach(function(skill) {
    let skillItem = document.createElement("li");  // Create a new <li> element
    skillItem.textContent = skill;  // Set the text content to the current skill from the array
    skillsList.appendChild(skillItem);  // Append the <li> to the <ul>
});
