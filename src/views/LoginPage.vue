<template>
    <!-- <HeaderComponent></HeaderComponent> -->
    <section class="pt-5">
      <div class="container pt-2">
      <div class="container border p-4" style="max-width: 350px;">
        <div class="text-center">
          <div> 
            <a href="/"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
            <h3>Sign In</h3></div>     
              <div class="pb-5"><span>Don't have an account </span><a href="#" @click="gotoRegister()" >Sign Up</a></div>
                    </div>
                    <div class="p-1 mb-2">
                             <div class="row border p-2 text-center">
                                <div class="col"><img src="../assets/gle.png" class="me-3 rounded-3" style="width: 20px;"></div>
                                <div><small class="col">Sign in with Google</small></div>
                            </div>
                        </div>
    <form @submit.prevent="validateGoogle">
      <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </symbol>
                      </svg>
                      <div v-if="alert" class="alert alert-danger  d-flex align-items-center" role="alert" id="alert">
                        <svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Info:"><use xlink:href="#exclamation-triangle-fill"/></svg>
                          <div>
                              Email or Password is Incorrect
                          </div>
                      </div>

                        <div class="input-group mb-3">
                            <input v-model="email" type="email"  name="email"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Email Address">
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
                         <small><a href="#" >Forget password?</a></small>
                    </div>
                  </div>

                <div class="input-group mb-3 d-flex justify-content-center">
                    <button type="submit" @click="validateGoogle" class="btn btn-primary w-50 fs-6">
        
                  <strong>Sign In</strong>
                  <!-- <input type="file" /> -->
                  </button>
                </div>
      </form>
    </div>
  </div>
    </section>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default{
    name: "LoginPage",
    components:{ HeaderComponent },
    data:function(){
        return{
        
      email: '',
      password: '',
      rememberMe: false,
      alert:false,
      errors: {
       
        email: '',
        password: '',
        
      },

        }
    },
    methods:{
      gotoRegister(){
      this.$router.push('/RegisterPage')
    },
    validateGoogle(){
        if( this.email=='' || this.password=='' || !this.email.match(/^[a-z]+[0-9]*@gmail\.com$/) ){
        // this.errors.name = this.name ? '' : '*Name can\'t be empty*';
        this.errors.email = this.email ? (this.email.match(/^[a-z]+[0-9]*@gmail\.com$/) ? '' : '*Enter a valid email*') : '*Email can\'t be empty*';
        this.errors.password = this.password ? '' : '*Password can\'t be empty*';
        }
        else{
          this.errors.email="";
          this.errors.password="";

      fetch("http://localhost:5000/user/checkuser",{
        headers:{
            "Content-Type":"application/json"
        },
        method:"post",
        body: JSON.stringify(
          {
          // name: this.name,
          email: this.email,
         password: this.password
          }
        )
     })
     .then((response)=>{
            if(!response.ok){
              console.log("error")
              throw new Error('Failed to fetch data');
  
            }
            else{
              return response.json();
            }
          })
          .then(data =>{
             if(data==true){
              console.log("shopcard page")
              this.$router.push('/HomePage')
            }
            else {
              console.log("error returns page")
              this.alert=true
            }
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
  }
}


}
</script>

<style>
.logo-img{
    height: 60px;
    width: 70px;
    border-radius: 50%;
}
</style>