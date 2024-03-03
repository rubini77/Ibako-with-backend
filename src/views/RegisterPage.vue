<template>
    <!-- <HeaderComponent></HeaderComponent> -->
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

    <section class="pt-3">
            <div class="container d-flex justify-content-center">
                <div class="container border-1 shadow p-2 m-1">
                    <div class="text-center">
                        <h3>Sign Up</h3>
                        <div class="pb-5"><span>Already have an account </span><a href="#" @click="gotoLogin()" >Sign In</a></div>
                    </div>
                    <div class="container">
                        <div class="p-1">
                             <div class="row border p-2 text-center">
                                <div class="col"><img src="../assets/gle.png" class="me-3 rounded-3" style="width: 20px;"></div>
                                <div><small class="col">Sign in with Google</small></div>
                            </div>
                        </div>
                       
                    </div>
                    
                    <div class="signupdiv text-center mp-40 pt-5">
                        <p>or Sign up with Email</p>
                    </div>
                    
                    <form @submit.prevent="validateGoogle">
                      <div class="input-group mb-3">
                            <input v-model="name" type="text"  name="name"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Your Name">
                            <br>
                            <small><div id="name" class="required" style="font-size: small;color: red;">{{ errors.name }}</div></small>
                        </div>

                        <div class="input-group mb-3">
                            <input v-model="email" type="email" name="email"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Email Address">
                            <br>
                            <small><div id="email" class="required" style="font-size: small;color: red;">{{ errors.email }}</div></small>
                        </div>

                        <div class="input-group mb-1">
                            <input v-model="password" type="password" name="password"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Password">
                            <br>
                            <small><div id="p-word" class="required" style="font-size: small;color: red;">{{ errors.password }}</div></small>
                        </div>

                        <div class="input-group mb-5 p-1 d-flex justify-content-between">
                             <div class="form-check">
                            <input v-model="rememberMe" type="checkbox" class="form-check-input" id="formCheck">
                            <label for="formCheck" class="form-check-label text-secondary"><small>Remember Me</small></label>
                        </div>
                        <div class="forget">
                         <small><a href="#">Forget password?</a></small>
                    </div>
                  </div>

                <div class="input-group mb-3 d-flex justify-content-center">
                    <button type="submit" class="btn btn-primary w-50 fs-6" @click="validateForm">
        
                  <strong>Sign Up</strong>
                  </button>
                </div>
             </form>
                </div>
            </div>
        
    </section>
   

    <div class="p-5"></div>
    <section class="container-fluid" style="background-color: black;">
  <div class="container" >
    <div class="row p-3" >
      <div class="col-md-6 text-center text-md-start text-white mb-3 mb-md-0">
        <span>
          <a href="#" style="text-decoration: none;color: white;"><svg style="color: #ac7206;" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-c-circle-fill p-1" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c.961 0 1.641.633 1.729 1.512h1.295v-.088c-.094-1.518-1.348-2.572-3.03-2.572-2.068 0-3.269 1.377-3.269 3.638v1.073c0 2.267 1.178 3.603 3.27 3.603 1.675 0 2.93-1.02 3.029-2.467v-.093H9.875c-.088.832-.75 1.418-1.729 1.418-1.224 0-1.927-.891-1.927-2.461v-1.06c0-1.583.715-2.503 1.927-2.503Z"/>
          </svg>Your Site Name,All rights reserved</a>
        </span>
      </div>
      <div class="col-md-6 text-center text-md-end text-white  my-auto" >We never share your info.<span style="color: #ac7206;"><a href="#" style="text-decoration: none;color: #ac7206;">Privacy Policy</a></span></div>
  </div>
  </div>
 </section>

    
    <!-- <FooterComponent></FooterComponent> -->
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
// import LoginPage from '../views/LoginPage.vue'
// import FooterComponent from '@/components/FooterComponent.vue';

export default {
  data() {
    return {
     
    name:'',
      email: '',
      password: '',
      rememberMe: false,
      errors: {
        name:'',
        email: '',
        password: '',
        
      },
    };
  },
  components:{ HeaderComponent }
  ,
  methods: {

    gotoLogin(){
      this.$router.push('/LoginPage')
    },

  
      validateGoogle(){
        if(this.name=='' || this.email=='' || this.password==''){
        this.errors.name = this.name ? '' : '*Name can\'t be empty*';
       this.errors.email = this.email && this.validateEmail() ? '' : '*Enter a valid email*';
       this.errors.password = this.password ? '' : '*Password can\'t be empty*';
         return false;
        }

        else{
          this.errors.name="";
          this.errors.email="";
          this.errors.password="";

      fetch("http://localhost:5000/user/saveuser",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body: JSON.stringify(
          {
          name: this.name,
          email: this.email,
         password: this.password
          }
        )
     })
     .then((response)=>{
            if(!response.ok){
                throw new Error("Failed to fetch the data"+response.status);
            }
            return response.json();
        })
        .then((data)=>{
        
            console.log("Fetched data:",data);
            return true;
        })
        .catch((error)=>{
            console.error("Error:",error);
        })

    }
   
},
validateEmail() {
    if (this.email === '') {
        return false; 
    }
    else if(!this.email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      return false;
    }
    
    
},
// validateGoogle() {
//      const userDetails = {
//             name:this.name,
//             email:this.email,
//             password:this.password
//      };
//      if(name != '' && email != '' && password != ''){
//       console.log("Ok")
    //  fetch("http://localhost:5000/user/saveuser",{
    //     headers:{
    //         "Content-Type":"application/json"
    //     },
    //     method:"post",
    //     body: JSON.stringify(userDetails)
    //  })
    //  .then((response)=>{
    //         if(!response.ok){
    //             throw new Error("Failed to fetch the data");
    //         }
    //         return response.json();
    //     })
    //     .then((data)=>{
        
    //         console.log("Fetched data:",data);
    //         return true;
    //     })
    //     .catch((error)=>{
    //         console.error("Error:",error);
    //     })
    
   }
  
};
</script>

<style scoped>

.singnupdiv{
    position: relative;
    z-index: 1;
}
.singnupdiv::after{
    background-color: #e0e2e3;
    bottom: 12px;
    content: "";
    height: 1px;
    left: 0;
    position: absolute;
    right: 0;
    width: 100%;
    z-index: -1;

}
.navbar-nav{
    display: flex;
    justify-content: baseline;
}
.logo-img{
    height: 60px;
    width: 70px;
    border-radius: 50%;
}
</style>