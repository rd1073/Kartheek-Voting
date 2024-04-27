document.addEventListener("DOMContentLoaded", async function() {
  const registerForm = document.getElementById("registerForm");
  
  registerForm.addEventListener("submit", async function(event) {
      event.preventDefault();
      
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;
      const adhaarID = document.getElementById("adhaarID").value; // Corrected variable name
      const voterID = document.getElementById("voterID").value; // Corrected variable name

      if (password !== confirmPassword) {
          alert("Passwords do not match");
          return;
      }

      try {
        const response = await fetch('http://localhost:3000/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ username, password , email, adhaarID, voterID}) // Corrected variable name
        });
        if (response.ok) {
          console.log("registered successfully");
          window.location.href = 'hobbies.html'; // Redirect upon successful registration
        } else {
          const errorMessage = await response.text();
          alert(errorMessage);
        }
      } catch (error) {
        console.error('Error registering:', error);
        alert('An error occurred while registering. Please try again later.');
      }
  });
});



  
  document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
      if (response.ok) {
        window.location.href = '/dashboard';
      } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password';
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  });
  
  
  /*document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault(); 
        
        
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
       
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        
        window.location.href = "practice.html";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const registerForm = document.getElementById("registerForm");
    
    registerForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
        const adhaarID = document.getElementById("Adhaar ID").value;
        const voterID = document.getElementById("Voter ID").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("adhaarID", adhaarID);
        localStorage.setItem("voterID", voterID);
        
        
        window.location.href = "hobbies.html"; 
    });
});

*/