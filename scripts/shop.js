let toUp = document.querySelector('.toUp')
let iconMenu = document.querySelector('.menuIcon')
let dropMenu = document.querySelector('.dropMenu')
let cart = document.querySelector('.cart')
let handelr = document.querySelectorAll('.handelr')
let shadow = document.querySelector('.shadow')


const products = [
  {
    id: 1,
    title: "Cheese Pizza",
    price: 10.99,
    image: "./images/food-menu-img-10-1.png",
    quantity: 1,
    category: "Pizza",
    rate: 5,
  },
  {
    id: 2,
    title: "Burger Deluxe",
    price: 12.5,
    image: "./images/food-menu-img-11-1.png",
    quantity: 1,
    category: "Burger",
    rate: 4,
  },
  {
    id: 3,
    title: "Chicken Sandwich",
    price: 8.99,
    image: "./images/food-menu-img-9-2.png",
    quantity: 1,
    category: "Sandwich",
    rate: 5,
  },
  {
    id: 4,
    title: "French Fries",
    price: 4.99,
    image: "./images/food-menu-img-9-3.png",
    quantity: 1,
    category: "Snacks",
    rate: 4,
  },
  {
    id: 5,
    title: "Hot Dog",
    price: 7.25,
    image: "./images/food-menu-img-9-4.png",
    quantity: 1,
    category: "Fast Food",
    rate: 4,
  },
  {
    id: 6,
    title: "Pasta Alfredo",
    price: 13.75,
    image: "./images/food-menu-img-9-4.png",
    quantity: 1,
    category: "Pasta",
    rate: 5,
  },
  {
    id: 7,
    title: "Fried Chicken",
    price: 11.49,
    image: "./images/food-menu-img-10-1.png",
    quantity: 1,
    category: "Chicken",
    rate: 5,
  },
  {
    id: 8,
    title: "Beef Steak",
    price: 18.99,
    image: "./images/food-menu-img-10-2.png",
    quantity: 1,
    category: "Steak",
    rate: 5,
  },
  {
    id: 9,
    title: "Seafood Pizza",
    price: 15.99,
    image: "./images/food-menu-img-10-3.png",
    quantity: 1,
    category: "Pizza",
    rate: 4,
  },
  {
    id: 10,
    title: "Taco Mexican",
    price: 9.49,
    image: "./images/food-menu-img-10-4.png",
    quantity: 1,
    category: "Mexican",
    rate: 4,
  },
  {
    id: 11,
    title: "Chicken Burger",
    price: 10.25,
    image: "./images/food-menu-img-11-1.png",
    quantity: 1,
    category: "Burger",
    rate: 5,
  },
  {
    id: 12,
    title: "Sushi Roll",
    price: 16.8,
    image: "./images/food-menu-img-11-2.png",
    quantity: 1,
    category: "Japanese",
    rate: 5,
  },
  {
    id: 13,
    title: "Hot Burger",
    price: 5.2,
    image: "./images/food-menu-img-11-3.png",
    quantity: 1,
    category: "Dessert",
    rate: 4,
  },
  {
    id: 14,
    title: "Great lunch",
    price: 6.99,
    image: "./images/food-menu-img-12-1.png",
    quantity: 1,
    category: "Dessert",
    rate: 5,
  },
  {
    id: 15,
    title: "Fresh Salad",
    price: 7.4,
    image: "./images/food-menu-img-12-2.png",
    quantity: 1,
    category: "Healthy",
    rate: 4,
  },
  {
    id: 16,
    title: "Grilled Fish",
    price: 3.99,
    image: "./images/food-menu-img-8-2.jpg",
    quantity: 1,
    category: "Drinks",
    rate: 4,
  },
  {
    id: 17,
    title: "Double Burger",
    price: 4.75,
    image: "./images/food-menu-img-8-1.jpg",
    quantity: 1,
    category: "Drinks",
    rate: 5,
  },
  {
    id: 18,
    title: "Donut Sweet",
    price: 5.5,
    image: "./images/food-menu-img-8-3.jpg",
    quantity: 1,
    category: "Dessert",
    rate: 4,
  },
  {
    id: 19,
    title: "Grilled Fish",
    price: 17.3,
    image: "./images/food-menu-img-10-3.png",
    quantity: 1,
    category: "Seafood",
    rate: 5,
  },
  {
    id: 20,
    title: "Double Burger",
    price: 14.99,
    image: "./images/food-menu-img-9-3.png",
    quantity: 1,
    category: "Burger",
    rate: 5,
  },
];

document.addEventListener( 'DOMContentLoaded', function() {
    let items = ''
    products.forEach( (product , index) => {
        items +=`
            <div class="card">
                <div class="img-box">
                    <img src="${product.image}" alt="">
                </div>

                <div class="stars">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <h3> ${product.title} </h3>
                <p class="price">$${product.price}</p>
                <button onclick="addToCart(${index})" class="btn">
                    <i class="fa-solid fa-cart-shopping"></i> Add to Cart
                </button>
            </div>
        `
    })
    setTimeout(() => {
        
        document.querySelector('.itemss').innerHTML = items
    } , 1500)
})

let cartItems 

if( localStorage.getItem('cartItems') ){
    cartItems = JSON.parse( localStorage.getItem('cartItems') )
}else{
    cartItems = []
}

function addToCart( i ){
    let product = products[i]
    sucsessAdd(product)
    let finded = cartItems.find( (item) => item.id === product.id )
    if( finded ){
        finded.quantity++
    }else{
        cartItems.push( product )
    }
    console.log( cartItems);
    displayCartItems(i)
    
}


function displayCartItems(i){
    let cardInCart = cartItems.map( (product , index) => 
        `
        <div class="item">
                <div class="left">
                <div>
                <img src="${product.image}" alt="">
                </div>
                </div>
                <div class="nameItems">
                    <b> ${product.title} </b>
                    <p> $${product.price}</p>
                </div>
                <div class="right">
                    <i onclick="increment(${index})" class="fa-solid fa-plus"></i>
                    <span> ${product.quantity} </span>
                    <i onclick="decrement(${index})" class="fa-solid fa-minus"></i>
                    <i onclick="deleteItem(${index})" class="fa-solid fa-trash delete"></i>
                </div>
            </div>
    
    `
    ).join('')

    if( cardInCart.length > 0){
        document.querySelector('.cart .contener').innerHTML = cardInCart
    }else{
        document.querySelector('.cart .contener').innerHTML = `<h5 style="text-align: center;"> Cart is Empty </h5>`
    }   
    let totalPrice = cartItems.reduce((a , b )=>{
        return a + b.price
    } , 0)
    document.querySelector('.totalPrice').innerHTML = `$${totalPrice.toFixed(2)}`


    document.querySelector('.amount').innerHTML = cartItems.length
    localStorage.setItem('cartItems' , JSON.stringify(cartItems))
}


function increment(i){
    cartItems[i].quantity++
    displayCartItems(i)
}

function decrement(i){
    if(cartItems[i].quantity > 1){
        cartItems[i].quantity--
        displayCartItems(i)
    }else{
    deleteItem()
    }
}

function deleteItem(i){
    let x = confirm('are you sure ?')
    if(x){
        cartItems.splice(i , 1)
        displayCartItems()
    }
    
}
function remove(i){
    let filterd = cartItems.filter( (product , index) => index !== i )
    cartItems = filterd
    
    displayCartItems()
}
function sucsessAdd(product) {

    let box = document.createElement('div');
    box.className = 'sucssesAdd';

    // image
    let image = document.createElement('div');
    image.className = 'image';

    let img = document.createElement('img');
    img.src = product.image;

    image.appendChild(img);

    // text
    let text = document.createElement('b');

    text.innerHTML = `
        Item Added To Cart <br>
        <span>(${product.title})</span>
    `;

    // buttons
    let btnss = document.createElement('div');
    btnss.className = 'btnss';

    btnss.innerHTML = `
        <button class="closeBtn">Close</button>
        <button class="goCart">Go To Cart</button>
    `;

    // append
    box.appendChild(image);
    box.appendChild(text);
    box.appendChild(btnss);

    document.body.appendChild(box);

    // animation
    setTimeout(() => {
        box.style.transform = `translate(-50%, -50%) scale(1)`;
        shadow.classList.add('open');
    }, 100);

    // close button
    box.querySelector('.closeBtn').onclick = () => {
        box.remove();
        shadow.classList.remove('open');
    };

    // go to cart
    box.querySelector('.goCart').onclick = () => {
        document.querySelector('.cart').classList.add('open');
        box.remove();
    };

    shadow.onclick = () => {
        box.remove();
        shadow.classList.remove('open');
        document.querySelector('.cart').classList.remove('open');
        dropMenu.classList.remove('open')
    };
}
displayCartItems()



















handelr.forEach( (ele )=>{

    ele.onclick = function(){
        if( this.className.includes('open')){
            cart.classList.add('open')
            shadow.classList.add('open')
        }else{
            cart.classList.remove('open')
            shadow.classList.remove('open')

        }
        
    }
})

shadow.onclick = function(){
    shadow.classList.remove('open')
    cart.classList.remove('open')
    dropMenu.classList.remove('open')
    
}




iconMenu.onclick = function(){
    dropMenu.classList.toggle('open')
    shadow.classList.toggle('open')
}

document.addEventListener('scroll',function(){
    if(window.scrollY > 600){
        toUp.classList.add('open')
    }else{
        toUp.classList.remove('open')
    }
})

toUp.onclick = function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}



