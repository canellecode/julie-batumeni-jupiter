// 1️⃣ Add Footer with Copyright
let today = new Date();
let thisYear = today.getFullYear();

let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `© Julie Batumeni ${thisYear}`;
footer.appendChild(copyright);

// 2️⃣ Create Skills List Dynamically
let skills = ["JavaScript", "HTML", "CSS", "GitHub", "Salesforce", "Project Management"];

let skillsList = document.getElementById("skillsList");

skills.forEach(skill => {
    let skillItem = document.createElement("li");
    skillItem.textContent = skill;
    skillsList.appendChild(skillItem);
});

// 3️⃣ Fetch and Display GitHub Repositories
fetch("https://api.github.com/users/canellecode/repos")
    .then(response => response.json())
    .then(repositories => {
        let projectList = document.getElementById("projectsList");

        repositories.forEach(repo => {
            let projectItem = document.createElement("li");
            let projectLink = document.createElement("a");

            projectLink.href = repo.html_url;
            projectLink.textContent = repo.name;
            projectLink.target = "_blank";

            projectItem.appendChild(projectLink);
            projectList.appendChild(projectItem);
        });
    })
    .catch(error => console.error("Error fetching GitHub projects:", error));
