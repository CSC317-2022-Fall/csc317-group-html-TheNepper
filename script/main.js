/*
*   shop, product, basket, ++, --
*/
let shop = document.getElementById("shop");

let shopItemsData = [
  {
    id: "0",
    name: "Animal Burger",
    price: 999.99,
    sDesc: "Learn animal speech, lose human speech",
    bDesc: "The burger grants the ability to understand and communicate with animals. Conversing with animals becomes natural to the user. The drawback is that the user is unable to understand and communicate with humans while under the effects.",
    img: "images/product1.png",
    lk: "products/animal.html",
    rlk: "animal.html",
  },
  {
    id: "1",
    name: "Bouncy Burger",
    price: 999.99,
    sDesc: "Become extremely bouncy",
    bDesc: "The burger grants the ability to become extremely bouncy. The skin gains bouncy properties which are similar to a bouncy ball. The drawback is that the user can hurt themselves or others while bouncing around.",
    img: "images/product1.png",
    lk: "products/bouncy.html",
    rlk: "bouncy.html",
  },
  {
    id: "2",
    name: "Fall Burger",
    price: 999.99,
    sDesc: "Fall slowly like an angel",
    bDesc: "The burger grants the ability to fall extremely slow. The force of gravity becomes extremely weak on the user regardless of how much the user weighs. The drawback is that the user might waste a lot of time being airborne.",
    img: "images/product1.png",
    lk: "products/fall.html",
    rlk: "fall.html",
  },
  {
    id: "3",
    name: "Gills Burger",
    price: 999.99,
    sDesc: "Breathe like a fish",
    bDesc: "The burger grants the ability to breathe underwater. The lungs gain the ability to temporarily breathe underwater like a fish until the effects wear off. The drawback is that the user is unable to breathe in normal air and will suffocate if not underwater.",
    img: "images/product1.png",
    lk: "products/gills.html",
    rlk: "gills.html",
  },
  {
    id: "4",
    name: "Gravity Burger",
    price: 999.99,
    sDesc: "Fall upwards towards space",
    bDesc: "The burger grants the ability to reverse gravity. The concept of gravity becomes inverted for the user leading to the user falling towards space. The drawback is that the user might fall towards space and suffocate if not indoors or held by a roof.",
    img: "images/product1.png",
    lk: "products/gravity.html",
    rlk: "gravity.html",
  },
  {
    id: "5",
    name: "Hallucinate Burger",
    price: 999.99,
    sDesc: "Twist your reality into madness",
    bDesc: "The burger grants the ability to perceive false sensations. The user will see, hear, feel, smell, and taste things that do not exist. The drawback is that the user's senses are untrustworthy and may lead to harmful results if left unsupervised.",
    img: "images/product1.png",
    lk: "products/hallucinate.html",
    rlk: "hallucinate.html",
  },
  {
    id: "6",
    name: "Invisible Burger",
    price: 999.99,
    sDesc: "Become invisible to the naked eye",
    bDesc: "The burger grants the ability to vanish from sight. The naked eye of all living creatures are unable to perceive the user. The drawback is that clothing and held items are unaffected and only the user's body is invisible.",
    img: "images/product1.png",
    lk: "products/invisible.html",
    rlk: "invisible.html",
  },
  {
    id: "7",
    name: "Night Burger",
    price: 999.99,
    sDesc: "Nightvision at the cost of light sensitivity",
    bDesc: "The burger grants the ability of night vision. The user is able to see better in the dark like an owl. The drawback is that the user becomes extremely sensitive to light and bright light can lead to blindness.",
    img: "images/product1.png",
    lk: "products/night.html",
    rlk: "night.html",
  },
  {
    id: "8",
    name: "Sticky Burger",
    price: 999.99,
    sDesc: "Become extremely sticky",
    bDesc: "The burger grants the ability to become extremely sticky. The skin gains sticky properties which are similar to spider webs. The drawback is that the user might have difficulties with movement.",
    img: "images/product1.png",
    lk: "products/sticky.html",
    rlk: "sticky.html",
  },
  {
    id: "9",
    name: "Telepathy Burger",
    price: 999.99,
    sDesc: "Speak through the mind",
    bDesc: "The burger grants the ability to communicate through the mind. The user can speak to one entity within 100 meters and sight of the user. The drawback is that the user loses their voice and cannot speak out loud.",
    img: "images/product1.png",
    lk: "products/telepathy.html",
    rlk: "telepathy.html",
  },
  {
    id: "10",
    name: "Teleport Burger",
    price: 999.99,
    sDesc: "Randomly warp around the Earth",
    bDesc: "The burger grants the ability to teleport randomly. The user teleports to a random location on Earth every minute. The drawback is that the user is unable to control where they end up and will feel nauseous.",
    img: "images/product1.png",
    lk: "products/teleport.html",
    rlk: "teleport.html",
  },
  {
    id: "11",
    name: "Wild Burger",
    price: 999.99,
    sDesc: "Random effect, a gambler's delight",
    bDesc: "The burger grants the ability of another random burger on the menu. The effects are completely random and unknown before consumption. The drawback is that the user can gain an unwanted ability that is dangerous. Good Luck!",
    img: "images/product1.png",
    lk: "products/Wild.html",
    rlk: "Wild.html",
  },
];

let genShop = () => {
  return (shop.innerHTML = shopItemsData.map((x) => {
    let { id, name, price, sDesc, img, lk} = x;
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
						<div id=${id} class="quantity">0</div>
						<div onclick="increment(${id})" class="plus">+</div>
					</div>
				</div>
			</div>
		</div>`
  }).join(""));
};

genShop();

let basket = [];

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
};

let decrement = (id) => {
  let search = basket.find((x) => x.id === id);

  if (search === undefined) return;
  if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  update(id);
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

function Image_Change(){
  const images = [];
  images.push('images/P1.png','images/P2.png','images/P3.png');
  setInterval(()=>{
    document.getElementById("myImage").src=images.pop();
    if(images.length == 0){
      images.push('images/P1.png','images/P2.png','images/P3.png','images/P4.png');
    }

  },3000);

}




       