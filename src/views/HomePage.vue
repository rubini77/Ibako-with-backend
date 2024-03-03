<template>   
   <section class="bg-light" id="ibako-logo-img" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12"> 
                <div class="row align-items-center" style="padding-top: 12px;padding-bottom:4px;">
                   <div class=" col-sm-12 col-md-7">
                     <h5 style="font-size: 1.125rem; line-height: 1; vertical-align: middle;" class="off-div mb-2 d-inline-block mr-3 align-left heading-light">
                       <b>10% OFF</b></h5>
                           <div class="ps-1 mb-2 d-inline-block" style="text-align: left; vertical-align: middle;margin-left: -3.5px;">
                              <div>
                                 <h4 style="font-weight: 500; color: #777777; font-size: 18px; line-height: 1;">Use <b style="color: #ac7206;">IBAKO23</b> Coupon Code</h4>
                              </div>
                            <div style="font-weight: 500; font-size: 11px; line-height: 17px;color: #777777;">* Minimal Price</div>
                           </div>
                   </div>
                    <div class="col-sm-12 col-md-5">
                    <div class="mb-2 text-md-end" style="text-align: right;">
                       <div>
                          <h4 style="font-size: 1.125rem; line-height: 1.2; letter-spacing: 0.01em;color: #ac7206;">FREE DELIVERY ON PRE ORDERS*</h4></div>
                             <div style="font-weight: 500; font-size: 11px; line-height: 1.2;color: #777777;">* On Business Days - On Orders Over $25
                            </div>
                        </div>
                   </div>
                </div>
               </div>
            </div>
       </div>
    </section>
   

   <HeaderComponent>

   </HeaderComponent>
   
    <!-- ====carousel==== -->
    <section>
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button style="display: none;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button style="display: none;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button style="display: none;" type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item  active" data-bs-interval="10000" >
                <div  class="video-container">
                     <video autoplay muted loop>
                         <source type="video/mp4" src="../assets/caro-vd-new-1.mp4" >
                     </video>
                </div>
                <div class="item p-2">
                <div class="carousel-caption p-2">
                    <h1 class="name">Discover Your Icecream Destine</h1>
                      <p class="des text-white" >Experiment Your Taste Buds!</p>
                      <a href="#"><button class="des-btn text-dark fw-bold">Explore</button></a>
               </div>
               </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
                <div class="video-container">
                    <video autoplay muted loop>
                         <source type="video/mp4" src="../assets/video.mp4">
                    </video>
                </div>
                <div class="item p-2">
                <div class="carousel-caption p-2">
                   <h1 class="name">Discover Your Icecream Destine</h1>
                      <p class="des text-white" >Experiment Your Taste Buds!</p>
                      <a href="#"><button class="des-btn text-dark fw-bold" >Explore</button></a>
                </div>
                </div>
          </div>
          <div class="carousel-item">
             <div class="video-container">
                  <video autoplay muted loop>
                       <source type="video/mp4" src="../assets/video-3.mp4">
                  </video>
            </div>
            <div class="item p-2">
            <div class="carousel-caption p-2">
                 <h1 class="name">Discover Your Icecream Destine</h1>
                    <p class="des text-white text-white" >Experiment Your Taste Buds!</p>
                    <a href="shop-card.html"><button class="des-btn text-dark fw-bold" >Explore</button></a>
            </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      </section>
    <!-- ====carousel end==== -->
    <!--====next section==== -->
   <section style="background-color: #FBEDE5;" id="BestSellSec">
      <div class="container">
          <div class="text-center pb-5">
            <div class="Best-selling text-center pt-5 pb-5" data-aos="fade-up">
              <h2 class="pt-3"><span style="color: #c78306; border-bottom: 1px solid #c78306;">B</span>est Selling Ours</h2>            
              <p style="font-size: large;">We Bake Every Item From The Core Of Our Hearts</p>
              </div>
          <div class="row gx-4 pb-5">
              <div class="col-lg-4 col-md-6 pb-3 " id="col-item" v-for="x in bestSellling">
                  <div style="background-color: white" class="p-3 rounded-3 shadow">
                      <div class="icon"  data-aos="fade-up">
                        <img class="img-fluid" :src="x.img" ></div>
                        <h3 class="title pt-1"><span style="color: #c78306; border-bottom: 1px solid #c78306;">{{ x.titleFirstLetter }}</span>{{ x.title }}</h3>
                        <svg style="fill: orange;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                        <svg style="fill: orange;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                        <svg style="fill: orange;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                        <svg style="fill: orange;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
                    
                        <p class="content"  data-aos="fade-up">{{ x.des }}</p>
                          <a href="#"  data-aos="fade-up" style="color: #c78306;">Buy Now<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg></a>
                  </div>
               </div>
            </div>
        </div>
      </div>
  </section>

   <!-- ====Gifting Corner Section==== -->
   <section style="background-image: url('../assets/white-marble-img.jpg');background-size: cover;" id="gift-sec">
    <div class="container">
      <div class="text-center pb-5">
        <div class="Best-selling text-center pt-5 pb-5">
          <h2 class="pt-3" data-aos="fade-up"><span style="color: #c78306; border-bottom: 1px solid #c78306;">G</span>ifting Corner</h2>            
          <p style="font-size: large;" data-aos="fade-up"><span>Crafed for Gifting, Indulge in the Art of Gifting Happiness!</span></p>
          </div>
          <div class="container">
          <div class="row gx-5">
            <div class="col-sm-12 col-lg-6 order-lg-1">
              <p  data-aos="fade-up" >Sophisticated and luxurious gifting options for every occasion. Celebrate special moments with Ibako Chocolates and Ice Cream Cakes. You can also make your return gift or corporate gifts even more special with our exquisite range of chocolates.</p>
                <span style="text-decoration: underline;font-size: large;">It couldn’t be simpler:</span>
                <p class="pb-2 "  data-aos="fade-up">Walk in to your nearest ibako                
                  Pick from our range of customised chocolate boxes or ice cream cakes                
                  <span  data-aos="fade-up" style="color: #c78306;">"Write a personalised note
                  Gift them to your loved one...."</span>
                </p>
                <p  data-aos="fade-up" style="font-size: large;color:rgb(77, 5, 5);">For gifting enquiry:</p>
                <button type="button" class="gift-btn "  data-aos="fade-up">CLICK TO SUBMIT YOUR REQUEST</button>
                <a><img class="img-fluid pt-2 "  data-aos="fade-up" src="https://www.ibaco.in/assets/img/oder-chocolate.png"></a>
            </div>
            <div class="col-sm-12 col-lg-6 order-lg-2" data-aos="fade-up" >
             <img class="img-fluid rounded-circle " style="box-shadow: 0px 0px 7px 0px #777777;" src="../assets/gift-cake.jpg">
             <img class="img-fluid rounded-circle " style="box-shadow: 0px 0px 7px 0px #777777;" src="../assets/gift-ckae-2.jpg">
             <img class="img-fluid rounded-circle  d-none d-xl-inline" style="box-shadow: 0px 0px 7px 0px #777777;" src="../assets/gift-cake-3.jpg">
            </div>
      </div>
      </div>
    </div>
    </div>
  </section>
   <!-- ====Gifting Corner Section End==== -->
    <!-- =====Bake on your own section==== -->
    <section id="make-on-your-own-sec" style="background-color: #FBEBE5;" class="pb-5"> 
      <div class="container">
        <div class="text-center pt-3">
          <div class="text-center pt-5 pb-5"  data-aos="fade-up">
            <h2 data-aos="fade-up"><span style="color: #c78306; border-bottom: 1px solid #c78306;">B</span>ake On Your Own</h2>
            <p data-aos="fade-up" style="font-size: large;">Crafed for Gifting, Indulge in the Art of Gifting Happiness!</p>
            </div>
            <div class="container pt-3 pb-3 bg-white">
              <div  data-aos="fade-up">
                <img class="img-fluid " src="../assets/chef-img.jpg">
                <div class="pb-3">
                  <p  data-aos="fade-up">MEET THE FOUNDER</p>
                  <P style="font-size: 20px;font-weight: 400;"  data-aos="fade-up">Sally McKenney</P>
                  <p  data-aos="fade-up">Sally McKenney is a professional food photographer, cookbook author, and baker. Her kitchen-tested recipes and thorough step-by-step tutorials give readers the knowledge and confidence to bake from scratch. Sally has been featured on Good Morning America, HuffPost, Taste of Home, People and more.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-3 mt-4">
              <div class="row gy-2">
                <div id="make-div" class="col-sm-12 col-md-6 col-lg-3 p-2 mb-4" v-for="x in makeOwn" data-aos="fade-up" style="background-color:white;">
                  <img id="make-img"  data-aos="fade-up" class="img-fluid p-2" :src="x.img">
                  <h5 class="pt-2"><span  data-aos="fade-up" style="color: #c78306; border-bottom: 1px solid #c78306;">{{ x.titleFirstLetter }}</span>{{ x.title }}</h5>
                  <span  data-aos="fade-up"><svg style="color:pink;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-chat-heart-fill p-1" viewBox="0 0 16 16"><path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15Zm0-9.007c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132Z"/>
                  </svg>{{ x.cmnts }}</span>
                </div>
                
              </div>

            </div>
        </div>
      </div>
            
    </section>
    <!-- =====Bake on your own section end==== -->

    <!-- ===customers review==== -->
 <section style="background-image: url('src/assets/bg.img.png');background-size: cover;" class="m-1" id="review-sec">
  <div class="container">
    <div class="text-center pb-5">
      <div class="Best-selling text-center pt-5 pb-5"  data-aos="fade-up">
        <h2 class="pt-3"><span style="color: #c78306; border-bottom: 1px solid #c78306;">C</span>ustomers Reviews</h2>            
        <p style="font-size: large;">From The Core Of Our Hearts</p>
        </div>
        <div class="row">
          <div class="col-sm-12 col-lg-6 order-1 order-lg-1"  data-aos="fade-up">
            <h3 class="p-3" style="color: rgb(243, 112, 133);" >Read what our customers love about us</h3>
            <p>Over 200 companies from diverse sectors consult us to enhance the user experience of their products and services.</p>
            <p>We have helped companies increase their customer base and generate multifold revenue with our service.</p>
            <p>ibako lets you craft your own sundaes from a choice of exotic flavours, toppings and sauces. This unique brand from Hatsun Agro Product Ltd. offers 36 flavours inspired from exotic places around the world, and aims to offer more choices and deliver greater standards of taste to its customers. You can also pick from a whole range of ice cream cakes and create your own ice cream bars and cones.With our world-inspired flavours, we believe we are giving you an ice cream experience that will take you across the globe from Peru to Australia.</p>
            <button id="read-btn" type="button">Read our stories</button>
          </div>
          <div class="col-sm-12 col-lg-6 order-2 order-lg-2">
            <div class="row" v-for="x in userReview">
              <div class="col-12 m-1">
                <div class="row card"  data-aos="fade-up">
                  <img class="col-3 img-fluid" :src="x.img" alt="user" />
                  <div class="col card__content"  data-aos="fade-up">
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16">
                      <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
                    </svg></span>
                      <div class="card__details"  data-aos="fade-up">
                      <p>
                       {{ x.des }}
                      </p>
                      <h4>{{ x.name }}</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
 </section>
 <!-- ===review section end=== -->
  <!--====join with us section  ===== -->
  <section style="background-color: #FBEDE5;" id="join-with-us-sec" class="pb-5">
    <div class="container">
      <div class="text-center">
        <div class="Best-selling text-center pt-2"  data-aos="fade-up">
          <h2 class="pt-3"><span style="color: #c78306; border-bottom: 1px solid #c78306;">J</span>ion With Us</h2>            
          <p style="font-size: large;">Become a export now,Join with us!</p>
        </div>
        <div class="p-1"  data-aos="fade-up">
          <h3 class="p-3">Unlock Your Entrepreneurial Potential - Become a <span style="color: #c78306;">ibako's</span> Franchisee!</h3>
          <h5 class="p-3">"Join Our Thriving Family!"</h5>
          <p>Are you ready to embark on an exciting entrepreneurial journey? <span>ibako</span> is offering a unique opportunity for you to become a part of our success story. We believe in the power of collaboration and growth, and that's why we're inviting individuals like you to partner with us as a franchisee. By joining our family, you'll gain access to a well-established and trusted brand, a proven business model, and a dedicated support network. We're committed to helping you every step of the way, from setting up your own branch to achieving financial prosperity. Your success is our success, and we're eager to assist you in achieving your business dreams. If you're passionate, driven, and ready to take charge of your future, let's explore this exciting franchise opportunity together. Together, we'll build a brighter future, one branch at a time."</p>
        </div>
      </div>
      <div class="p-3 m-2 pb-5" id="con-div">
        <div class="text-center p-5 fw-bold"  data-aos="fade-up">
          <div id="contact-now" class="rounded-3">Contact Now</div>
        </div>
        <!-- <form class="row g-3 needs-validation" novalidate>
          <div class="col-md-4"  data-aos="fade-up">
            <label for="validationCustom01" class="form-label">First name</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required>
            <div class="valid-feedback"  data-aos="fade-up">
              Looks good!
            </div>
          </div>
          <div class="col-md-4"  data-aos="fade-up">
            <label for="validationCustom02" class="form-label">Last name</label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto" required>
            <div class="valid-feedback"  data-aos="fade-up">
              Looks good!
            </div>
          </div>
          <div class="col-md-4"  data-aos="fade-up">
            <label for="validationCustomUsername" class="form-label">Email</label>
            <div class="input-group has-validation"  data-aos="fade-up">
              <span class="input-group-text" id="inputGroupPrepend">@</span>
              <input type="email" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
              <div class="invalid-feedback"  data-aos="fade-up">
                Please choose a username.
              </div>
            </div>
          </div>
          <div class="col-md-6"  data-aos="fade-up">
            <label for="validationCustom03" class="form-label">City</label>
            <input type="text" class="form-control" id="validationCustom03" required>
            <div class="invalid-feedback"  data-aos="fade-up">
              Please provide a valid city.
            </div>
          </div>
          <div class="col-md-3"  data-aos="fade-up">
            <label for="validationCustom04" class="form-label">State</label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>
            <div class="invalid-feedback"  data-aos="fade-up">
              Please select a valid state.
            </div>
          </div>
          <div class="col-md-3"  data-aos="fade-up">
            <label for="validationCustom05" class="form-label">Zip</label>
            <input type="text" class="form-control" id="validationCustom05" required>
            <div class="invalid-feedback"  data-aos="fade-up">
              Please provide a valid zip.
            </div>
          </div>
          <div class="col-12"  data-aos="fade-up">
            <div class="form-check"  data-aos="fade-up">
              <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback"  data-aos="fade-up">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <div class="col-12 text-center"  data-aos="fade-up">
            <button class="btn-sub p-1" type="submit" @onclick="validate()">Submit form</button>
          </div>
        </form> -->
        <div class="row d-flex text-center justify-content-center align-items-center">

        <div class="col-sm-12 col-md-6 col-lg-3">
          <svg style="background-color: rgb(59, 179, 226);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="twitter-icon bi bi-twitter px-2 m-1" viewBox="0 0 16 16"><path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/></svg><span class="pt-1 ">@ibako_choco</span>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
          <svg style="background-color: rgb(42, 42, 248);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="fb-icon bi bi-facebook px-2 m-1" viewBox="0 0 16 16"><path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/></svg><span class="pt-1 ">ibako_FB_page</span>
        </div>

        <div class="col-sm-12 col-md-6 col-lg-3">
        <svg style="background: linear-gradient(to bottom, yellow,#f78f3b,#ec1c73);border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="insta-icon bi bi-instagram px-2 m-1" viewBox="0 0 16 16"><path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/></svg><span class="pt-1 ">ibako_official</span>
        </div>
        <!-- <svg style="background-color: rgb(4, 138, 190);color:white;border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="in-icon bi bi-linkedin px-2 m-1" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg> -->
        <div class="col-sm-12 col-md-6 col-lg-3">
        <svg style="background-color: rgb(228, 75, 20);color:rgb(250, 250, 250);border-radius:50%;" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-envelope-fill px-2 m-1" viewBox="0 0 16 16"><path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z"/></svg><span class="pt-1 ">ibako.official.in</span>
      </div>
      </div>     
      </div>
    </div>
 </section>
 <!--====join with us section end====-->


   <FooterComponent>
    
   </FooterComponent>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue";

export default{
    name: 'Homepage',
    components:  { HeaderComponent, FooterComponent },
    data:function(){
        return{
          bestSellling:[{img:"birthday-cake.jpg",titleFirstLetter:"B",title:"irthDay Cakes",des:"Celebrate joy with our delectable Birthday Cakes, a sweet centerpiece for unforgettable moments."},
                             {img:"baked-img.jpg",titleFirstLetter:"B",title:"reads",des:"Savor the aroma of freshly baked Breads, a daily delight for those who appreciate the art of baking."},
                            {img:"image-no-3.jpg",titleFirstLetter:"C",title:"one Ice",des:"Chill out with our delightful Cone Ice, a cool treat to brighten your day with every delicious bite."},
                            {img:"image-no-4.jpg",titleFirstLetter:"I",title:"ce Creams",des:"Indulge in creamy delights with our Ice Creams, a luscious escape into a world of exquisite flavors."},
                            {img:"image-no-5.jpg",titleFirstLetter:"B",title:"rownies",des:"Delight your senses with our decadent Brownies, a rich and fudgy temptation for true chocolate lovers."},
                            {img:"image-6-donut.jpg",titleFirstLetter:"D",title:"onuts",des:"Experience bliss in every bite with our scrumptious Donuts, a perfect ring of happiness for any occasion."}
                            ],
          makeOwn:[{img:"baked-french-toast.jpg",titleFirstLetter:"B",title:"akedd Cream French Toast",cmnts:"10 Comments"},
                  {img:"savory-vegetable-tart-300x450.jpg",titleFirstLetter:"S",title:"avory Vegatable Tart",cmnts:"12 Comments"},
                  {img:"apple-bundt-cake-2-300x450.webp",titleFirstLetter:"A",title:"pple Bundt Cake",cmnts:"8 Comments"},
                  {img:"chai-spice-donut-holes-1-300x450.jpg",titleFirstLetter:"C",title:"hai Spice Donut Holes",cmnts:"16 Comments"}
                ],
          userReview:[{img:"user-1.jpg",des:"We had a great time collaboraring with the Filament team. They have my high recommendation!",name:"- Marnus Stephen"},
              {img:"user-3.jpg",des:"We had a great time collaboraring with the Filament team. They have my high recommendation!",name:"- Marnus Merry"}]



        }

    },
        

  }


</script>

<style scoped>


.off-div{
    height: 100%;
    width: auto;
    padding: 5px;
    background-color: #e29e1f;
    transform: rotate(-3.5deg);
}

.carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
} 
.carousel-inner {
    display: flex;
    /* justify-content: center;
    align-items: center; */
    /* height: 50vh; */
  }
 
  .carousel-item {
    text-align: center;
    width: 100%;
    height: 500px;
    /* overflow: hidden; */
  }

  .name{
    background: -webkit-linear-gradient(45deg, rgb(245, 195, 195), rgb(248, 245, 246), rgb(240, 146, 185));
    -webkit-background-clip: text;
    color: transparent;
    background-clip: text;
    /*-webkit-text-fill-color: transparent; */
  }
  .video-container {
    position: relative;
    width: 100%;
    height: 100%;
    /* display: inline-block; */
    text-align: center;
  }
  
  video {
    min-width: 100%;
    min-height: 100%;
  }
  
  .carousel-control-prev,
  .carousel-control-next {
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  .carousel-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(0, 0, 0, 0.5); 
    background-size: cover;
    padding: 25px; 
    color: #fff; 
    text-align: center;
    z-index: 2; 
    
  }
  .des-btn {
    background-color: #d18f14; 
    color: #080808; 
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .name{
    font-weight: bolder;
  }
   /* ====best sales===== */

.icon{
    overflow: hidden;
}
.icon img{
    transition: 0.5s ease;
}
.icon img:hover{
    transform: scale(1.3);
}
.gift-btn{
    background: white;
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 13px;
    box-shadow: inset 0px 0px 7px 0px gray;
}

/* ===make own==== */
#make-div{
    overflow: hidden;
}
#make-div #make-img{
    transition: 0.5s ease;
}
#make-img:hover{
    transform: scale(0.9);
}
/* review */
#read-btn{
    background: rgb(252, 223, 228);
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(85, 85, 85);
    border-radius: 10px;
    /* font-size: 13px; */
    box-shadow: inset 0px 0px 7px 0px rgb(250, 161, 220);
}

  
  .card {
    padding: 2rem;
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    background-color: var(--white);
    border-radius: 1rem;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }
  
  .card img {
    max-width: 75px;
    border-radius: 100%;
  }
  
  .card__content {
    display: flex;
    gap: 1rem;
  }
  
  .card__content span i {
    font-size: 2rem;
    color: var(--primary-color);
  }
  
  .card__details p {
    font-style: italic;
    color: var(--text-dark);
    margin-bottom: 1rem;
  }
  
  .card__details h4 {
    text-align: right;
    color: var(--primary-color);
    font-size: 1rem;
    font-weight: 500;
  }
/* join us franchisee */
#contact-now{
    display: inline-block;
    height: auto;
    width: auto;
    border: 1px solid #d18f14;
    margin: 5px 5px;
    padding: 5px 5px;
  }
#con-div{
    height: auto;
    width: auto;
    border: 2px solid #d18f14;
    background-image: url('bg.img.png');
    background-size: cover;
    background-color: var(--white);

    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.2);
}

.form-control{
    box-shadow: none !important;
    border: 1px solid #e29e1f !important;
    /* color: var(--primary-color) !important; */
}
.form-check-input{
    box-shadow: none !important;
    border: 1px solid #e29e1f !important;
}
.form-select{
    box-shadow: none !important;
    border: 1px solid #e29e1f !important;
    /* color: var(--primary-color) !important; */
}
.btn-sub{
    color: black;
    font-size: 16px;
    border: 1px solid #e29e1f;
    background-color: #f3b94d;
    border-radius: 10%;
    box-shadow: 0px 0px 5px 0px #d18f14;
}
.btn-sub:hover{
    color: #f3b94d;
    background-color: black;
}
</style>