/*
*   shop, product, basket, ++, --
*/
let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let genShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, sDesc, img, lk} = x;
    let search = basket.find((x) => x.id === id) || [];
    return `
    <div id=product-id-${id} class="item">
			<a href="${lk}"><img src="${img}" alt="burger" width="400"></a>
			<div class="details">
				<h2>${name}</h2>
				<p>${sDesc}</p>
				<div class="priceQuantity">
					<h2>$ ${price}</h2>
					<div class="quantityButtons">
						<div onclick="decrement(${id})" class="minus">-</div>
						<div id=${id} class="quantity">${search.item === undefined? 0 : search.item}</div>
						<div onclick="increment(${id})" class="plus">+</div>
					</div>
				</div>
			</div>
		</div>`
  }).join(""));
};

genShop();

let increment = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) {
    basket.push({
      id: id,
      item: 1
    });
  } else {
    search.item += 1;
  }
  update(id);
  localStorage.setItem("data", JSON.stringify(basket));
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
  basket = basket.filter((x) => x.item !== 0);
  localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => { 
  let search = basket.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  calcBasket();
  console.log(basket);
  console.log(search.item);
};

let calcBasket = () => {
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML = (basket.map((x) => x.item).reduce((x,y) => x + y, 0));
}

calcBasket();