<template>
    <!-- ====home contact sec==== -->
    <section class="bg-light border-bottom-1">
        <div class="container-fluid pt-2 pb-2">
            <div class="head row d-lg-flex">
                <div class="col-6 text-start d-flex " data-aos="zoom-in">
                    <a class="top-bar p-1" @click="RedirectToHome()" data-aos="zoom-in" href="">Home</a>
                    <a class="top-bar p-1 ps-3" href="#">Contact Us</a>
                </div>
                <div class="col-6 text-end pt-1" data-aos="fade-up"><span class="flw-us pt-2  d-none d-md-inline">Join Us :</span>
                    <svg style="background-color: rgb(59, 179, 226);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="twitter-icon bi bi-twitter px-2 m-1" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg>
                    <svg style="background-color: rgb(42, 42, 248);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="fb-icon bi bi-facebook px-2 m-1" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg>
                    <svg style="background: linear-gradient(to bottom, yellow,#f78f3b,#ec1c73);border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="insta-icon bi bi-instagram px-2 m-1" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg>
                    <svg style="background-color: rgb(4, 138, 190);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="in-icon bi bi-linkedin px-2 m-1" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                </div>
            </div> 
        </div>      
    </section>
    <!-- =====NAVBAR SECTION===== -->
    <section class="navbar-sec container-fluid bg-white pt-2 pb-2 sticky-top"  style="box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.4);">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
            <div class="ps-2 p-1 justify-content-start animate__animated animate__backInDown">
                <a href="#ibako-logo-img"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
            </div>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                      <span class="navbar-toggler-icon"></span>
                  </button>
              <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul class="navbar-nav mx-auto gap-2 animate__animated animate__backInDown">
                    
                  <li class="nav-item">
                    <a class="nav-link active m-2" @click="RedirectToHome()" aria-current="page" href="#">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link m-2" href="#BestSellSec" >
                      Products
                    </a>
                    <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item p-2" href="#">Shop Details</a></li>
                      <li><a class="dropdown-item p-2" href="#">Shop Category</a></li>
                      <li><a class="dropdown-item p-2" href="#">Wishlist</a></li>
                      <li><a class="dropdown-item p-2" href="#">Compare</a></li>
                    </ul> -->
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle m-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Pages
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item p-2" href="#make-on-your-own-sec">Bake on your own</a></li>
                      <li><a class="dropdown-item p-2" href="#" target="_self" @click="Register()">Register</a></li>
                      <!-- <li><a class="dropdown-item p-2" href="#">Login</a></li> -->
                      <li><a class="dropdown-item p-2" href="#" @click="ShopCard()">Order</a></li>
                      <li><a class="dropdown-item p-2" href="#" @click="ShopCard()">Checkout</a></li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link m-2" aria-current="page" href="#gift-sec">Gifting Corner</a>
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link  m-2" href="#join-with-us-sec"   aria-expanded="false">
                      Franchise
                    </a>
                    <!-- <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a class="dropdown-item p-2" href="#">Blog Details</a></li>
                      <li><a class="dropdown-item p-2" href="#">Reviews</a></li>
                      <li><a class="dropdown-item p-2" href="#">Franchise</a></li>

                      </ul> -->
                  </li>
                  <li class="nav-item">
                    <a class="nav-link m-2" href="#review-sec" aria-disabled="true">About</a>
                  </li>
             </ul>
                    <div class="icons d-flex ms-auto pt-2 ">
                      <div class="user-icon"  data-aos="fade-up">
                        <a style="color:palevioletred ;" @click="Register()">
                          <svg id="user-icon" xmlns="http://www.w3.org/2000/svg"  width="23" height="23" fill="currentColor" class="bi bi-person-circle me-4" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg></a>
                      </div>
                    
                      <a style="color:palevioletred ;" data-aos="fade-up" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-search me-4" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                  </svg></a>
                  <a @click="ShopCard()" style="color:palevioletred ;" data-aos="fade-up" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg></a>
                  <a @click="ShopCard()"  style="color:palevioletred ;" data-aos="fade-up" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-cart4 me-4" viewBox="0 0 16 16">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                  </svg></a>
              </div>
            </div>
            </div>
            </nav>
      </section>
      
     


</template>

<script>

export default{
    name:"HeaderComponent",
    data:function(){
        return{
          
        }
    },
    methods:{
      Register:function(){
        this.$router.push("/RegisterPage");
      },
      RedirectToHome(){
        this.$router.push("/");
      },
      ShopCard(){
      this.$router.push('/ShopCard')
    }
}
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
html{
    scroll-behavior: smooth;
}



.top-bar{
    text-decoration: none;
    color: black;
    font-size: 1.09rem;
}
.top-bar:hover{
    color: black;
}
.flw-us{
    font-size: 1.09rem;
}
/* ==nav bar== */
.navbar-nav{
    display: flex;
    justify-content: baseline;
}
.logo-img{
    height: 60px;
    width: 70px;
    border-radius: 50%;
}
.nav-link{
    font-size: 1.1rem;
    border-bottom: 1px solid #e29e1f;
}
.nav-link:hover{
    color: black;
    background-color: #e29e1f;
    /* border-radius: 50%; */
}
.nav-link:active{
    background-color: #e29e1f;
}
.dropdown-item:hover{
    background-color: #e29e1f;
}
.btn{
    outline: #e29e1f;
    border: 1px solid #e29e1f;
}
.btn:focus{
    box-shadow: none !important;
}
.btn:hover{
    background-color: #e29e1f;
}

/* user icon */
.popup {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup-content {
    background-color:  rgba(26, 26, 26, 0.7);
    padding: 20px;
    border-radius: 5px;
    width: 70%;
    min-width: 300px; 
    text-align: center;
}


.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
     /* height: 10px;
    width: 10px;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px; */
    cursor: pointer;
    z-index:5;  
    border: 1px solid rgb(10, 10, 10);
    border-radius: 5px;
    padding: 5px 5px 5px 5px;
}

.user-icon {
    cursor: pointer;
}


#u-name{
    height: 10px;
    width: 300px;
    /* background-color: green; */
    color: red;
}
#p-word{
    height: 10px;
    width: 300px;
    /* background-color: green; */
    /* color: red; */
    color: red;
}


</style>