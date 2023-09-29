   
    document.addEventListener("DOMContentLoaded", function () {
        const cartItems = [];
    
        // Function to add a product to the cart
        function addToCart(productId) {
         
          const productToAdd = (productsSet1, productsSet2).find((x) => x.productId === productId);
          let { productId, brand, name, color, price, image } = x;
          cartItems.push(productToAdd);
          updateCartDisplay();
        }
        
        // Function to update the cart display
        function updateCartDisplay() {
          // Get the cartTable element after the DOM has fully loaded
          let cartTable = document.getElementById("cart-items");
         
        
        
          // Clear the existing content in the cart table body
         
        
          // Generate and add rows for each product in the cartItems array
      // Generate and add rows for each product in the cartItems array
      cartItems.forEach((product) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td width="150"><img src="${image}" alt="${name}" width="100"></td>
          <td width="360">${name}</td>
          <td width="150">₱${price}</td>
          <td width="150">
            <input type="number" min="1" value="${quantity}" class="quantity-input" data-productId="${productId}">
          </td>
          <td width="150">
            <i class="fas fa-trash" onclick="removeFromCart(${productId})"></i>
          </td>
        `;
        cartTable.appendChild(row);
      });
      console.log("cartTable:", cartTable);
      console.log("cartItems:", cartItems);
      
        }
    
        
        // Find all shopping cart icons within product items
        const cartIcons = document.querySelectorAll(".fas.fa-shopping-cart.cart");
        
        // Loop through each cart icon and add a click event listener
        cartIcons.forEach(function (cartIcon) {
          cartIcon.addEventListener("click", function () {
            // Get the productId associated with the clicked cart icon
            const productIdAttr = this.parentNode.querySelector(".description").getAttribute("data-productId");
            console.log("data-productId attribute value:", productIdAttr);
        
            // Try to parse the productId
            const productId = parseInt(productIdAttr);
            console.log("Parsed Product ID:", productId);
        
            // Call the addToCart function with the productId to add the product to the cart
            addToCart(productId);
        
            // Update the cart display
            updateCartDisplay();
          });
        });
        });
        // Add a DOMContentLoaded event listener to ensure the code runs after the HTML is fully loaded
        document.addEventListener("DOMContentLoaded", function () {
          // This function runs when the DOM is ready, i.e., when the document has been parsed
        
          // Find the input element with the class "quantity-input"
          const quantityInput = document.querySelector('.quantity-input');
        
          if (quantityInput) {
            // Add a "change" event listener to the input element
            quantityInput.addEventListener('change', function (event) {
              // Handle the change event here
              const newValue = event.target.value;
              console.log(`New quantity value: ${newValue}`);
            });
          }
        });
        
        // Function to remove a product from the cart
        function removeFromCart(productId) {
          const index = cartItems.findIndex((product) => product.productId === productId);
          if (index !== -1) {
            cartItems.splice(index, 1);
            updateCartDisplay();
          }
        }
        
    
        
        // Find all shopping cart icons within product items
    
      
        // Add a DOMContentLoaded event listener to ensure the code runs after the HTML is fully loaded
        document.addEventListener("DOMContentLoaded", function () {
          // This function runs when the DOM is ready, i.e., when the document has been parsed
        
          // Find the input element with the class "quantity-input"
          const quantityInput = document.querySelector('.quantity-input');
        
          if (quantityInput) {
            // Add a "change" event listener to the input element
            quantityInput.addEventListener('change', function (event) {
              // Handle the change event here
              const newValue = event.target.value;
              console.log(`New quantity value: ${newValue}`);
            });
          }
        });
        
        // Function to remove a product from the cart
        function removeFromCart(productId) {
          const index = cartItems.findIndex((product) => product.productId === productId);
          if (index !== -1) {
            cartItems.splice(index, 1);
            updateCartDisplay();
          }
        }
        