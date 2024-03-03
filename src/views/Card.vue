<!-- <template>
    <input type="file" required>
</template>
<script>


</script>
<style>

</style> -->
<template>
    <input type="checkbox" id="cart">
    <label for="cart" class="label-cart"><i class="bi bi-cart3" style="color:#fecb40;font-size: 25px;"></i></label>
    <div class="logo">
        <h2><strong class="box-pizza">BOX PIZZA</strong></h2>
        <button class="btn btn-danger lg-btn">Sign In</button>&nbsp;&nbsp;
        <button class="btn btn-danger lg-btn">Sign Up</button>
    </div>
    <div class="sidebar">
        <div class="sidebar-menu">
            <i class="bi bi-search"></i>
            <a href="#">Search</a>
        </div>
        <div class="sidebar-content">
            <div class="search-bar">
                <input type="text" placeholder="Search...">
                <i class="bi bi-search icon"></i>
            </div>
        </div>
        <div class="sidebar-menu">
            <i class="bi bi-house-door-fill"></i>
            <a href="#">Home</a>
        </div>
        <div class="sidebar-menu">
            <i class="bi bi-heart-fill"></i>
            <a href="#">Favs</a>
        </div>
        <div class="sidebar-menu">
            <i class="bi bi-person-circle"></i>
            <a href="#">profile</a>
        </div>
        <div class="sidebar-menu">
            <i class="bi bi-gear"></i>
            <a href="#">Settings</a>
        </div>

    </div>
    <!-- Dashboard -->
    <div class="dashborad" style="background-color: #fecb40;">
        <div class="dashborad-items">
            <img src="../assets/pizzahutimg1.jpg" alt="#" class="img-fluid">
            <div class="dashboard-text">
                <h1><span>50% OFF</span><br> Tasty Food <br> On Your Hand</h1>
            </div>
        </div>
        <h3 class="dashboard-title">Recommended Food For You</h3>
        <div class="dashboard-menu">
            <a href="#">Favorites</a>
            <a href="#">Best Seller</a>
            <a href="#">Near Me</a>
            <a href="#">Promotion</a>
            <a href="#">Top Rated</a>
            <a href="#">All</a>
        </div>
        <!-- :key="Menu.id" -->
        <div class="dashboard-content">
            <div class="dashboard-menus" v-for="Menu in DashboardMenu" style="background-color: black;">
                <img :src="Menu.img" alt="#" class="img-fluid dash-image" width="200" height="200">
                <div class="details">
                    <h5>{{ Menu.name }}<span>{{ Menu.price }}</span></h5>
                    <p><strong class="box-pizza">BOX PIZZA</strong> Giving you a best food service</p>
                    <p class="time"><i class="bi bi-clock-fill"></i> {{ Menu.mints }}</p>
                    <button @click="addToCart(Menu, index)" class="btn btn-danger">Add Item</button>
                </div>
            </div>
        </div>
    </div>
    <!-- Order dashboard -->
    <div class="dashboard-order">
        <h3>Order-Menu</h3>
        <div class="order-address">
            <p>Address Delivery</p>
            <h4>130 Kalavasal Byepass Road, Madurai-05</h4>
        </div>
        <div class="order-time">
            <i class="bi bi-clock-fill"></i> 30 mins <i class="bi bi-geo-alt-fill"> 2 km</i>
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
            <div class="promo">
                <input type="text" class="input-promo" name="floatingInput" id="floatingInput" placeholder="Apply Voucher">
                <button class="button-promo">Find Promo</button>
            </div>
            <hr class="divider">
            <p>Total <span>Rs.{{ overallTotal }}</span></p>
        </div>
        <button class="checkout">Checkout</button>
    </div>
</template>
<script>
export default {
    name: 'Menus',
    props: ['DashboardMenu'],
    data: function () {
        return {
            DashboardMenu: [
                {
                    id: 1,
                    img: "/order-img1.jpg",
                    name: 'Margherita pizza',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 2,
                    img: "/order-img2.jpg",
                    name: 'Rum With Soda',
                    price: "Rs.80",
                    mints: "15-30 mins"
                },
                {
                    id: 3,
                    img: "/order-img3.jpg",
                    name: 'Milkshake',
                    price: "Rs.100",
                    mints: "5-15 mins"
                },
                {
                    id: 4,
                    img: "/order-imgveg.jpg",
                    name: 'Veg Pizza',
                    price: "Rs.120",
                    mints: "15-30 mins"
                },
                {
                    id: 5,
                    img: "/order-img5.jpg",
                    name: 'Chilly Pizza',
                    price: "Rs.200",
                    mints: "15-30 mins"
                },
                {
                    id: 6,
                    img: "/order-img7.jpg",
                    name: 'Oreo Cake',
                    price: "Rs.500",
                    mints: "15-30 mins"
                },
                {
                    id: 7,
                    img: "/bacon.jpg",
                    name: 'Bacon Overflow',
                    price: "Rs.250",
                    mints: "15-30 mins"
                },
                {
                    id: 8,
                    img: "/salad.jpg",
                    name: 'American classic Salad',
                    price: "Rs.300",
                    mints: "15-30 mins"
                },
                {
                    id: 9,
                    img: "/cookies.jpeg",
                    name: 'Cookies',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 10,
                    img: "/pastabowl.jpg",
                    name: 'Veg Pasta',
                    price: "Rs.240",
                    mints: "15-30 mins"
                },
                {
                    id: 11,
                    img: "/chickenrice.jpeg",
                    name: 'Chicken Rice',
                    price: "Rs.220",
                    mints: "15-30 mins"
                },
                {
                    id: 12,
                    img: "/kitkatshake.jpg",
                    name: 'Kitkat Shake',
                    price: "Rs.120",
                    mints: "15-30 mins"
                },
                {
                    id: 13,
                    img: "/eggrice.jpg",
                    name: 'Egg Rice',
                    price: "Rs.180",
                    mints: "15-30 mins"
                },
                {
                    id: 14,
                    img: "/tandoori.jpg",
                    name: 'Tandoori Chicken',
                    price: "Rs.360",
                    mints: "15-30 mins"
                },
                {
                    id: 15,
                    img: "/chickpizza.jpg",
                    name: 'Chicken Pizza',
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
    min-height: 100%;
    position: fixed;
    top: 0;
    right: 0;
    padding: 0.5rem 1.5rem;
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
    height: 180px;
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