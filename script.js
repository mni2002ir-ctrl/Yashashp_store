let cart = [];
let total = 0;
let selectedPayment = null;

function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  renderCart();
}

function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price} تومان`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

function selectPayment(method) {
  selectedPayment = method;
  const box = document.getElementById("payment-box");

  if (method === "rial") {
    box.innerHTML = "<p>پرداخت ریالی انتخاب شد ✅ (فعلاً شبیه‌سازی)</p>";
  } 
  else if (method === "usdt") {
    box.innerHTML = "<p>آدرس کیف پول USDT: <code>0x123...abc</code></p>";
  } 
  else if (method === "ton") {
    box.innerHTML = `
      <p>پرداخت با TON:</p>
      <p><strong>آدرس ولت:</strong> <code>UQA4BwipUCSS3MchI_I2DJFv0EI8ew8mGd9l-gXvPw1XjXbr</code></p>
      <img src="assets/ton-qr.png" alt="TON QR" width="150">
    `;
  }
}