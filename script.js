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
  

  // Function to update the subtotal and total quantity and price
function updateSubtotal(input) {
  const price = 200; // Replace with the actual price of the product
  const quantity = parseInt(input.value);
  const subtotalElement = input.parentElement.nextElementSibling;

  const subtotal = price * quantity;
  subtotalElement.textContent = `₱${subtotal}`;

  updateTotal();
}

// Function to update the total quantity and price
function updateTotal() {
  const quantityInputs = document.querySelectorAll("#cart input[type='number']");
  let totalQuantity = 0;
  let totalPrice = 0;

  quantityInputs.forEach((input) => {
      totalQuantity += parseInt(input.value);
      totalPrice += parseInt(input.value) * 200; // Replace with the actual price of the product
  });

  const totalQuantityElement = document.getElementById("total-quantity");
  const totalPriceElement = document.getElementById("total-price");

  totalQuantityElement.textContent = totalQuantity;
  totalPriceElement.textContent = `₱${totalPrice}`;
}

// Function to apply the coupon code (Implement this function as per your requirements)
function applyCoupon() {
  // Implement coupon code logic here
  // Update the total price if needed
  updateTotal();
}

// Function for checkout (Implement this function as per your requirements)
function checkout() {
  // Implement checkout logic here
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