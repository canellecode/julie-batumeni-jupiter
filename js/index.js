// 1️⃣ Add Footer with Copyright
let today = new Date();
let thisYear = today.getFullYear();
let footer = document.querySelector("footer");
let copyright = document.createElement("p");
copyright.innerHTML = `&copy; Julie Batumeni ${thisYear}`;
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
    .catch(error => {
        console.error("Error fetching GitHub projects:", error);
        // Fallback content if GitHub API fails
        let projectList = document.getElementById("projectsList");
        let fallbackItem = document.createElement("li");
        fallbackItem.textContent = "GitHub repositories could not be loaded. Please check back later.";
        projectList.appendChild(fallbackItem);
    });

// 4️⃣ Message Form Functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const messageForm = document.querySelector('form[name="leave_message"]');
    const messagesList = document.getElementById('messagesList');
    const messagesSection = document.getElementById('messages');
    
    // Handle form submission
    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get form values
        const name = document.getElementById('usersName').value;
        const email = document.getElementById('usersEmail').value;
        const message = document.getElementById('usersMessage').value;
        
        // Add message to the messages list
        addMessageToList(name, email, message);
        
        // Reset form
        messageForm.reset();
    });
    
    // Function to add a message to the list
    function addMessageToList(name, email, message) {
        // Create message item
        const messageItem = document.createElement('li');
        messageItem.className = 'message-item';
        
        // Create author link
        const authorLink = document.createElement('a');
        authorLink.href = `mailto:${email}`;
        authorLink.textContent = name;
        authorLink.className = 'author-name';
        
        // Create message text
        const messageText = document.createElement('p');
        messageText.textContent = message;
        messageText.className = 'message-text';
        
        // Create remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-btn';
        removeButton.addEventListener('click', function() {
            messagesList.removeChild(messageItem);
            
            // If no messages left, hide the messages section
            if (messagesList.children.length === 0) {
                messagesSection.style.display = 'none';
            }
        });
        
        // Append elements to message item
        messageItem.appendChild(authorLink);
        messageItem.appendChild(messageText);
        messageItem.appendChild(removeButton);
        
        // Append message item to messages list
        messagesList.appendChild(messageItem);
        
        // Show messages section if it was hidden
        messagesSection.style.display = 'block';
    }
});