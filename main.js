let shop = document.getElementById("shop");
let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img, Link } = x;   
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
        <h3>${name}</h3>
          <p>${desc}</p>
		  <h2>${price} QR</h2>
          <a href="${id}">Buy / Whatsapp</a>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();
