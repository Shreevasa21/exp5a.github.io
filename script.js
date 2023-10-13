document.addEventListener("DOMContentLoaded",function()
{
    const productsList=document.getElementById("productsList");
    const products= [

        {name: "Product 1 ", price:"₹700", image:"watches1.jpg" },
        {name: "Product 2", price:"₹1400", image:"watches2.jpg"},
        {name: "Product 3", price:"₹2100", image:"watches3.jpg"},
    ];

    products.forEach((product)=> {
     const productElement=document.createElement("div");

productElement.className="product";

const imageElement= document.createElement("img");
imageElement.src=product.image;
imageElement.alt=product.name;

const nameElement = document.createElement("h3");
nameElement.textContent=product.name;

const priceElement = document.createElement("p");
priceElement.textContent=product.price;



productElement.appendChild(imageElement);
productElement.appendChild(nameElement);
productElement.appendChild(priceElement);

productsList.appendChild(productElement);

});
const scrollToProductsLinks=document.getElementById("scrollToProducts");
const featuredProducts=document.getElementById("featuredProducts");

scrollToProductsLinks.addEventListener("click",function(event) {
    event.preventDefault();
    featuredProducts.scrollIntoView({behaviour:"smooth"});
});
});