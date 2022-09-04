let shopItemsData = [
  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
	  {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
    {
    id: "jfhgbvnscs",
    name: "Casual Shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
    img: "https://i.ibb.co/9pFVs1K/img-1.jpg",
	Link: "#",
  },
];

let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img, Link } = x;
      let search = basket.find((x) => x.id === id) || [];
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
