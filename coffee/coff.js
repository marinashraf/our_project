

let navbar =document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active');
    card.classList.remove('active');
    search.classList.remove('active');
}

let card =document.querySelector('.cart-item-container');
document.querySelector('#cart-btn').onclick =() =>{
    card.classList.toggle('active');
    navbar.classList.remove('active');
    search.classList.remove('active');
}
let search =document.querySelector('.search-form');
document.querySelector('#search-btn').onclick =() =>{
    search.classList.toggle('active');
    navbar.classList.remove('active');
    card.classList.remove('active');
}
window.onscroll =() =>{
    navbar.classList.remove('active');
    card.classList.remove('active');
    search.classList.remove('active');
}

 let cartItemsData = [];
    let total = 0;

    function addToCart(name,imgSrc, price) {
      cartItemsData.push({ name, imgSrc, price });
      total +=  Number(price);
     updateCart()
    }



    function removeFromCart(index) {
      total -= cartItemsData[index].price;
        cartItemsData.splice(index, 1);
      updateCart();
    }

    function updateCart() {
      const cartItemsContainer = document.getElementById("cart-items");
      cartItemsContainer.innerHTML = '';

       cartItemsData.forEach((item, index) => {
            const itemDiv = document.createElement("div");
    itemDiv.innerHTML += `
    <div class="flex-item">
      <img src="${item.imgSrc}"  class="cart-item-img">
      <div class=item-details>
      <span class="cart-item-name">${item.name}</span>
      <span class="cart-item-price"> $${item.price}</span>
        <span class="remove-btn" onclick="removeFromCart(${index})">❌</span>
      
      </div>
     
      </div>
    `;
    cartItemsContainer.appendChild(itemDiv);
  });

  document.getElementById('cart-total').textContent = `Total: ${total.toFixed(2)}`;
};


    
    console.log("السلة اشتغلت");
