<template>
  <section>
    <nav class="navbar" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
    <div class="container-fluid">
      <a href="/" style="text-decoration: none;"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
        <span class="mb-0 p-3 h4" style="color: #ac7206;font-weight: bold;">AdminPage</span>
      
    </div>
    </nav>
    <div class="pt-5 container d-flex justify-content-center">
      <div class="container border  p-3 m-1" style="max-width: 350px;">
        <form @submit.prevent="addProduct">

          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product Name:</label>
              <input v-model="name" type="text"  name="name"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Name">
              <br>
              <small><div id="name" class="required" style="font-size: small;color: red;">{{ errors.name }}</div></small>
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product price:</label>
              <input v-model="price" type="text"  name="price"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Price">
              <br>
              <small><div id="price" class="required" style="font-size: small;color: red;">{{ errors.price }}</div></small>
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Choose Product Image:</label>
              <input required type="file"  name="image"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product image">
              <br>
              <small><div id="image" class="required" style="font-size: small;color: red;">{{ errors.image }}</div></small>
          </div>

          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Delivery time:</label>
              <input v-model="name" type="text"  name="time"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Delivery Timing">
              <br>
              <small><div id="time" class="required" style="font-size: small;color: red;">{{ errors.time }}</div></small>
          </div>
          <div class="text-center">
          <button type="submit" class="btn" style="background-color: #e29e1f;font-weight: bold;">Add Products</button>
        </div>
        </form>
      </div>
    </div>
  </section>  
</template>
  
  <script>
  export default {
    data() {
      return {
        name:'',
        price:'',
        image:'',
        time:'',
        errors: {
            name:'',
            price: '',
            image: '',
            time:'' 
      },
      }
    },
    methods: {
      addProduct(){
        if(this.name=='' || this.price=='' || this.image=='' || this.time==''){
          console.log(this.name,this.price,this.image,this.time)
        this.errors.name = this.name ? '' : '*Name can\'t be empty*';
        this.errors.price = this.price ? '' : '*Price can\'t be empty*';
        this.errors.Image = this.Image ? '' : '*Please choose an Image*';
        this.errors.time = this.time ? '' : '*Enter delivery Time*';
         return false;
        }
        else{
          this.errors.name="";
          this.errors.price="";
          this.errors.image="";
          this.errors.time=""
        }

      } 
    },
  };
  </script>
  <style>
  .logo-img{
    height: 60px;
    width: 70px;
    border-radius: 50%;
}
</style>
  