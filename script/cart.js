let basket = JSON.parse(localStorage.getItem("data")) || [];

let calcBasket = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x,y) => x + y, 0));
}

calcBasket();