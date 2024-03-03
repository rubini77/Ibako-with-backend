<template>
    <!-- <HeaderComponent></HeaderComponent> -->
    <input type="checkbox" id="cart">
    <label for="cart" class="label-cart p-4 mt-3 ">
        <svg style="color: palevioletred;" xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg></label>
    
    
    <!-- Dashboard -->
    <div class="p-3">
        <ul class="navbar-nav mx-auto gap-2 animate__animated animate__backInDown">
            
                
            <li class="nav-item bg-white">
            <a class="nav-link active my-2 p-4 fs-3 fw-4" style="background-color: #FBEDE5;border-radius: 20px;"  aria-current="page" href="#">Products</a>
                
            </li>
        </ul>
</div>
    <div class="dashborad pt-3" style="background-color: #FBEDE5;">
       
      
        <div class="dashboard-menu">
            <a href="#">Favorites</a>
            <a href="#">Best Seller</a>
            <a href="#">Near Me</a>
            <a href="#">Promotion</a>
            <a href="#">Top Rated</a>
            <a href="#">All</a>
            
            
        </div>
        <!-- :key="Menu.id" -->
        <div class="dashboard-content" >
            <div class="dashboard-menus" v-for="Menu in DashboardMenu" style="color: black;background-color: white;">
                <img :src="Menu.img" alt="#" class="img-fluid dash-image" width="200" height="200">
                <div class="details">
                    <h5>{{ Menu.name }}<span>{{ Menu.price }}</span></h5>
                    <p><strong class="box-pizza">IBAKO</strong> Giving you a best food service</p>
                    <p class="time text-black"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg> {{ Menu.mints }}</p>
                    <button @click="addToCart(Menu, index)" class="btn btn-danger">Add Item</button>
                </div>
            </div>
        </div>
    </div>
    overflow
    <!-- Order dashboard -->
    <div class="dashboard-order">
        
        <h3>Order-Menu</h3>
        <div class="order-address">
            <p>Address Delivery</p>
            <h4>130 Alagappapuram, Kraikudi-05</h4>
        </div>
        <div class="order-time">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
</svg> 30 mins <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.3 1.3 0 0 0-.37.265.3.3 0 0 0-.057.09V14l.002.008.016.033a.6.6 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.6.6 0 0 0 .146-.15l.015-.033L12 14v-.004a.3.3 0 0 0-.057-.09 1.3 1.3 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465s-2.462-.172-3.34-.465c-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411"/>
</svg> 2 km
        </div>
        <div class="order-wrapper">
            <div class="order-card" v-for="(cartItem, index) in cart" :key="index">
                <img :src="cartItem.img" class="order-img" alt="#">
                <div class="order-details">
                    <p>{{ cartItem.name }}</p>
                    <div>
                        <button class="btn btn-danger w-25"
                            @click="decreaseQuantity(index)">-</button>&nbsp;&nbsp;&nbsp;&nbsp;
                        <span>{{ cartItem.quantity }}</span>&nbsp;&nbsp;&nbsp;&nbsp;
                        <button class="btn btn-danger w-25" @click="increaseQuantity(index)">+</button>
                    </div>
                </div>
                <span class="order-price">Rs.{{ calculateItemTotal(cartItem) }}</span>
            </div>
        </div>
        <hr class="divider">
        <div class="order-total">
            <p>Subtotal <span>Rs.{{ subtotal }}</span></p>
            <p>Tax (5%) <span>Rs.{{ gst }}</span></p>
            <p>Delivery Charges <span>Rs.{{ deliveryCharges }}</span></p>
            
            <hr class="divider">
            <p>Total <span>Rs.{{ overallTotal }}</span></p>
        </div>
        <button class="checkout">Checkout</button>
    </div>
</template>
<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
    name: 'Menus',
    // props: ['DashboardMenu'],
    components:{HeaderComponent},
    data: function () {
        return {
            DashboardMenu: [
                {
                    id: 1,
                    img: "src/assets/test-1-img.jpg",
                    name: 'Straberry Cake',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 2,
                    img: "src/assets/test-2-img.jpg",
                    name: 'Blueberry Cake',
                    price: "Rs.80",
                    mints: "15-30 mins"
                },
                {
                    id: 3,
                    img: "src/assets/test-3-img.jpg",
                    name: 'Icecream Cake',
                    price: "Rs.100",
                    mints: "5-15 mins"
                },
                {
                    id: 4,
                    img: "src/assets/test-4-img.jpg",
                    name: 'Vannila icecream',
                    price: "Rs.120",
                    mints: "15-30 mins"
                },
                {
                    id: 5,
                    img: "src/assets/test-5-img.jpg",
                    name: 'All-in-one',
                    price: "Rs.200",
                    mints: "15-30 mins"
                },
                {
                    id: 6,
                    img: "src/assets/test-6-img.jpg",
                    name: 'Donuts',
                    price: "Rs.500",
                    mints: "15-30 mins"
                },
                {
                    id: 7,
                    img: "src/assets/test-7-img.jpg",
                    name: 'Multi-Donuts',
                    price: "Rs.250",
                    mints: "15-30 mins"
                },
                {
                    id: 8,
                    img: "src/assets/test-8-img.jpg",
                    name: 'Breads',
                    price: "Rs.300",
                    mints: "15-30 mins"
                },
                {
                    id: 9,
                    img: "src/assets/test-9-img.jpg",
                    name: 'Cup Cakes',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 10,
                    img: "src/assets/test-10-img.jpg",
                    name: 'Cookies',
                    price: "Rs.240",
                    mints: "15-30 mins"
                },
                {
                    id: 11,
                    img: "src/assets/test-11-img.jpg",
                    name: 'Biscuits',
                    price: "Rs.220",
                    mints: "15-30 mins"
                },
                {
                    id: 12,
                    img: "src/assets/test-12-img.jpg",
                    name: 'Milk Shake',
                    price: "Rs.120",
                    mints: "15-30 mins"
                },
                {
                    id: 13,
                    img: "src/assets/test-13-img.jpg",
                    name: 'Kulfi',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 14,
                    img: "src/assets/test-14-img.webp",
                    name: 'Cream caramel pudding',
                    price: "Rs.360",
                    mints: "15-30 mins"
                },
                {
                    id: 15,
                    img: "src/assets/test-15-img.webp",
                    name: 'Buttery cornmeal cake',
                    price: "Rs.250",
                    mints: "15-30 mins"
                },
            ],
            cart: [],
        }
    },
    methods: {
        click: function () {
            this.login = false;
            // this.success=true
        },
        addToCart(menu, index) {
            // Check if the item is already in the cart
            const existingCartItem = this.cart.find(item => item.id === menu.id);

            if (existingCartItem) {
                existingCartItem.quantity += 1;
                // existingCartItem.quantity -= 1;
            } else {
                const numericPrice = parseFloat(menu.price.replace('Rs.', ''));
                this.cart.push({
                    ...menu,
                    quantity: 1,
                    price: numericPrice,
                });
            }
        },
        increaseQuantity(index) {
            

                this.cart[index].quantity += 1;
            
            
        },
        decreaseQuantity(index) {
            if(this.cart[index].quantity > 0)
            {this.cart[index].quantity -= 1;}
            else{
                
            }
        },
        calculateItemTotal(cartItem) {
            // Check if cartItem or cartItem.price is undefined or null
            if (!cartItem || cartItem.price == null || cartItem.quantity == null) {
                return 0; // or any default value you prefer
            }

            return cartItem.price * cartItem.quantity;
        },
    },
    computed: {
        // Define a computed property for the item total
        computedItemTotal() {
            return this.cart.map(cartItem => this.calculateItemTotal(cartItem));
        },
        subtotal() {
            return this.cart.reduce((acc, cartItem) => acc + cartItem.price * cartItem.quantity, 0);
        },

        // Calculate the GST (18% of subtotal)
        gst() {
            return (this.subtotal * 0.05).toFixed(2); // Assuming 18% GST
        },

        // Define a constant delivery charge
        deliveryCharges() {
            return 5; // Change this based on your actual delivery charges
        },

        // Calculate the overall total including subtotal, GST, and delivery charges
        overallTotal() {
            return (this.subtotal + parseFloat(this.gst) + this.deliveryCharges).toFixed(2);
        },
    },

}
</script>
<style scoped>
.icon {
    padding-left: 180px;
    padding-top: 10px;
    position: absolute;
}

.sidebar-content {
    display: none;
    position: fixed;
    left: 55px;
    /* Adjust to match the sidebar width */
    top: 72px;
    padding: 15px 10px 0px 10px;
    background-color: #df113c;
    /* Content background color */
    color: #000;
    border-radius: 20px;
    /* Content text color */
}

.search-bar {
    display: flex;
    margin-bottom: 20px;
}

.search-bar input {
    flex: 1;
    padding: 8px;
    border-radius: 30px;
    border: none;
}

.search-bar button {
    padding: 8px;
    background-color: #444;
    /* Button background color */
    color: #fff;
    /* Button text color */
    border: none;
    cursor: pointer;
}

.sidebar-menu:hover+.sidebar-content,
.sidebar-content:hover {
    display: block;
}

.dashboard-menus .details .box-pizza {
    /* background: linear-gradient(to left, blue, gray, orange, violet, red);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent; */
    color: #df113c;
}

.details {
    padding: 10px;
}

.details h5 span {
    float: right;
}

/* -------------------------------------------------- Add item Button style ------------------------------------------- */
.dashboard-content .dashboard-menus button {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: #df113c;
    color: #000;
    font-weight: 900;
    width: 50%;
    border: none;
    border-radius: 10px;
    padding: 20px 10px;
    box-shadow: 0 10px 50px #000;
    cursor: pointer;
    transform: translateX(-50%) translateY(100px);
    opacity: 0;
}

.dashboard-content .dashboard-menus:hover button {
    transition: 0.5s;
    opacity: 1;
    transform: translateX(-50%) translateY(-20px);
}

.dashboard-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 0.5rem 1rem 1rem 1rem;
}

.dashboard-menus {
    /* background-color: #f6f8fa; */
    color: #f6f8fa;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 15px;
    position: relative;
    cursor: pointer;
}

.dash-image {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 15px;
}

.dashboard-menus:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 10px 10px 5px;
}

/* -------------------------------- Extra CSS ----------------------------------------------- */

:root {
    --mainColor: #f6f8fa;
    --darkBlack: #2d2f31;
    --darkGrey: #61666b;
    --grey: #d5d5d5;
    --lightGrey: #f2f2f2;
    --yellow: #fecb40;
    --red: #df113c;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: "Noto Sans JP", sans-serif;
}

body {
    width: 100%;
    height: auto;
    color: #2d2f31;
}

p {
    font-size: 14px;
}

/* -------------------------------------------------  dashborad styles -------------------------------------------------------------- */
.label-cart {
    position: fixed;
    top: 15px;
    right: 10px;
    z-index: 10;
    cursor: pointer;
    color: #2d2f31;
}

.logo {
    display: flex;
    align-items: center;
    position: fixed;
    /* background-color: #2d2f31; */
    background-color: #000;
    width: 100%;
    text-align: start;
    padding: 15px 420px 15px 60px;
    /* padding: 20px; */
    top: 0;
    left: 0;
    z-index: 2;
}
.logo button{
    position: relative;
    padding: 5px;
}
.logo h2{
    margin-right: 10px;
}
.lg-btn{
    font-weight: 900;
    font-family: "Noto Sans JP", sans-serif;
    color: #fecb40;
}
.sidebar {
    position: fixed;
    top: 40px;
    left: 0;
    width: 50px;
    height: 100%;
    background-color: #f6f8fa;
    background-color: #000;
    z-index: 1;
    padding-top: 70px;
}

.sidebar-menu {
    width: 100%;
    text-align: center;
    padding: 10px 5px;
    color: #fecb40;
}

.sidebar-menu>a {
    /* The child selector (>) selects all elements that are the children of a specified element. */
    text-decoration: none;
    font-size: 0.7rem;
    line-height: 1.5;
    color: #fecb40;
}

.sidebar-menu:hover {
    border-right: 2px solid #fecb40;
    color: red;
}

.sidebar-menu:hover>a {
    /* The child selector (>) selects all elements that are the children of a specified element. */
    color: red;
}

.dashborad {
    height: 100%;
    width: 100%;
    padding-right: 360px;
    padding-left: 60px;
}

.dashborad-items {
    width: 100%;
    height: 300px;
    position: relative;
    margin-top: 4rem;
    padding: 1rem;
    border-radius: 30px;
    cursor: pointer;
}

.dashborad-items>img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
}

.dashboard-text {
    position: absolute;
    color: #f2f2f2;
    top: 25%;
    left: 10%;
    font-weight: 900;
}

.dashboard-text h1>span {
    /* The child selector (>) selects all elements that are the children of a specified element. */
    color: #fecb40;
}

.dashboard-title {
    padding: 0 2rem;
}

.dashboard-menu {
    display: flex;
    gap: 10px;
    padding: 0.3rem 1rem;
    overflow-x: auto;
}

.dashboard-menu>a {
    text-decoration: none;
    text-align: center;
    padding: 0.5rem 0;
    min-width: 120px;
    border-radius: 20px;
    font-size: 0.9rem;
    color: #fecb40;
    background-color: #000;
}

.dashboard-menu>a:hover {
    background-color: #df113c;
    color: #f2f2f2;
}


.details {
    padding: 10px;
}

.details h5 span {
    float: right;
}

.time {
    font-size: 0.8rem;
    color: #f2f2f2;
    padding-top: 10px;
}

/* -------------------------------------------------- dashboard-order styles --------------------------------------------- */
.dashboard-order {
    width: 340px;
    /* min-height: 100%; */
    position: fixed;
    top: 0;
    right: 0;
    padding: 0.5rem 1.5rem;
    overflow-y: scroll;
    background-color: #f6f8fa;
    z-index: 3;
}

.dashboard-order>h3 {
    padding: 10px 0;
}

.order-address>h4 {
    line-height: 2;
}

.order-time {
    color: #2d2f31;
    font-size: 0.8rem;
}

.order-wrapper {
    height: 100px;
    width: 100%;
    overflow-y: scroll;
    margin: 20px 0;
}

.order-card {
    display: grid;
    grid-template-columns: 0.6fr 1fr 0.5fr;
    padding: 10px 0;
    gap: 5px;
    justify-content: space-around;
    align-items: flex-start;
}

.order-img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 15px;
}

.order-details>input {
    width: 35px;
    height: 35px;
    text-align: center;
    border: 2px solid #d5d5d5;
    border-radius: 10px;
    background-color: transparent;
    margin-left: 10px;
}

.divider {
    width: 100%;
    border: 1px dashed #61666b;
}

.order-total>p {
    padding: 10px 0;
}

.order-total>p>span {
    float: right;
    font-weight: 600;
}

.promo {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f2f2f2;
    border: 2px solid #d5d5d5;
    border-radius: 10px;
    height: 45px;
    padding: 0 5px;
    margin: 5px 0 10px 0;
}

.input-promo {
    height: 100%;
    background-color: transparent;
    border: none;
}

.button-promo {
    float: right;
    background-color: #fecb40;
    border: none;
    border-radius: 5px;
    height: 80%;
    width: 100%;
    cursor: pointer;
}

.checkout {
    width: 100%;
    height: 40px;
    text-align: center;
    background-color: #df113c;
    border: none;
    border-radius: 20px;
    color: #f2f2f2;
    cursor: pointer;
}

.checkout:hover {
    text-transform: uppercase;
    font-weight: 800;
}

#cart {
    display: none;
}

/* The general sibling selector (~) selects all elements that are next siblings of a specified element. */
/* This is used to target an element with the class "label-cart" that is a sibling of an element with the ID "cart" when the "cart" element is checked. */

#cart:checked~.label-cart {
    color: #fecb40;
}

#cart:checked~.dashborad {
    padding-right: 10px;
}

#cart:checked~.dashboard-order {
    display: none;
}

#cart:checked~.logo {
    padding-right: 0px;
}

@media screen and (max-width:680px) {
    .dashborad {
        padding-right: 5px;
    }

    .dashboard-order {
        width: 100%;
        left: 0;
    }

    .logo {
        justify-content: start;
    }
}

@media screen and (max-width:350px) {
    .order-total .promo .button-promo {
        font-size: 10px;
    }
}



.logo .box-pizza {
    /* background: linear-gradient(to left, blue, gray, orange, violet, red);
    background-clip: text;
    -webkit-background-clip: text; */
    color: #fecb40;
}</style>