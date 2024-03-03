<template>
    <HeaderComponent></HeaderComponent>
    <section>
      <div class="container p-5">
      <div class="container shadow p-5">
        <div class="text-center">
          <div> <h4>LOGIN</h4></div>     
              <div class="pb-5"><span>Don't have an account </span><a href="#" @click="gotoRegister()" >Sign Up</a></div>
                    </div>
                    <div class="p-1">
                             <div class="row border p-2 text-center">
                                <div class="col"><img src="../assets/gle.png" class="me-3 rounded-3" style="width: 20px;"></div>
                                <div><small class="col">Sign in with Google</small></div>
                            </div>
                        </div>
    <form @submit.prevent="validateGoogle">
               

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
                         <small><a href="#">Forget password?</a></small>
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
        if( this.email=='' || this.password==''){
        // this.errors.name = this.name ? '' : '*Name can\'t be empty*';
       this.errors.email = this.email && this.validateEmail() ? '' : '*Enter a valid email*';
       this.errors.password = this.password ? '' : '*Password can\'t be empty*';
        }
        else{
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
                throw new Error("Failed to fetch the data"+response.status);
            }
            return response.json();
          })
          .then(data =>{
             if(data.valid){
              console.log("shopcard page")
              this.$router.push('/ShopCard')
            }
            else {
              console.log("error returns page")
              this.errors.password= "*Password is incorrect*"
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

</style>