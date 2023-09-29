let shop2 = document.getElementById("pro-container2");



let generateShop2 = () => {
    const generatedHTML = productsSet2.map((x) => {
      let { productId, brand, name, color, price, image } = x;
      return `
          <div class="pro">
            <div id="pro-${productId}">
              <img src="${image}" alt="" onclick="window.location.href='product-details.html';">
              <div class="description" data-brand="${brand}" data-name="${name}" data-color="${color}" data-price="${price}" onclick="window.location.href='product-details.html';">
                <span class="data-brand">${brand}</span>
                <h5 class="data-name">${name}</h5>
                <p class="data-color">${color}</p>
                <div class="star">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <h4 class="data-price">₱${price}</h4>
              </div>
              <i class="fas fa-shopping-cart cart" onclick="addToCart({ productId: ${productId}, name: '${name}', price: ${price}, image: '${image}' })"></i>
            </div>
    
        </div>
      `;
    }).join("");
  
    // Set the generated HTML as the innerHTML of the element with class "pro-container"
    document.querySelector(".pro-container2").innerHTML = generatedHTML;

  }
  
  // Call the generateShop function to generate and display product items
  generateShop2();