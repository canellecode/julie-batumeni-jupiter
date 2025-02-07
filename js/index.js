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

// 1. Get the repositories in GitHub
fetch("https://api.github.com/users/canellecode/repos") 
  .then(response => response.json())  // Convert the response into JSON
  .then(data => {  
    console.log(data); // Log the repositories in the console 

    // Create the section for projects
    let projectSection = document.createElement("section");
    projectSection.id = "projects";
    
    let projectHeading = document.createElement("h2");
    projectHeading.textContent = "My GitHub Repositories";
    projectSection.appendChild(projectHeading);
    
    let projectList = document.createElement("ul");
    
    // Loop through the repositories and create links
    data.forEach(repo => {
        let repoItem = document.createElement("li");
        let repoLink = document.createElement("a");
        
        repoLink.href = repo.html_url; // Link to the repo
        repoLink.textContent = repo.name; // Name of the repo
        repoLink.target = "_blank"; // Open in a new tab
        
        repoItem.appendChild(repoLink);
        projectList.appendChild(repoItem);
    });

    projectSection.appendChild(projectList);
    document.body.appendChild(projectSection); // Add to the HTML page
  })
  .catch(error => console.error("Error:", error)); // Handle errors
