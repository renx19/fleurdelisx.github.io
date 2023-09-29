const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active');
    });
  }
  

function validateLogin() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email === "" || password === "") {
      alert("Please enter both email and password.");
  } else {
      // Simulating successful login (replace with your actual logic)
      alert("Login successful!");
      // Redirect to a different page after successful login
      window.location.href = "dashboard.html"; // Replace with your desired URL
  }
}

// Adding click event listeners to icon links
var facebookIcon = document.getElementById("facebook-icon");
var googleIcon = document.getElementById("google-icon");
var linkedinIcon = document.getElementById("linkedin-icon");

facebookIcon.addEventListener("click", function() {
  alert("Redirecting to Facebook login...");
  // Perform redirection logic here
});

googleIcon.addEventListener("click", function() {
  alert("Redirecting to Google login...");
  // Perform redirection logic here
});

linkedinIcon.addEventListener("click", function() {
  alert("Redirecting to LinkedIn login...");
  // Perform redirection logic here
});

