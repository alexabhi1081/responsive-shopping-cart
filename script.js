const products = [
  { id: 1, name: "Shoes", price: 1500 },
  { id: 2, name: "T-shirt", price: 800 },
  { id: 3, name: "Watch", price: 2500 }
];

const cart = [];

function renderProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(p => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${p.name}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    productList.appendChild(div);
  });
}

function renderCart() {
  const cartDiv = document.getElementById("cart");
  const totalDiv = document.getElementById("total");
  cartDiv.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price;
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      <button onclick="removeFromCart(${item.id})">Remove</button>
    `;
    cartDiv.appendChild(div);
  });
  totalDiv.innerText = `Total: ₹${total}`;
}

function addToCart(id) {
  const item = products.find(p => p.id === id);
  cart.push(item);
  renderCart();
}

function removeFromCart(id) {
  const index = cart.findIndex(i => i.id === id);
  if (index > -1) {
    cart.splice(index, 1);
    renderCart();
  }
}

renderProducts();
