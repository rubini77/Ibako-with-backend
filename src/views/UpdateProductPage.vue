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
        <Div class="fs-5 p-3 text-center"><strong>Add Products</strong></Div>
        <form @submit.prevent="handleSubmit">

          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product Name:</label>
              <input v-model="formData.name" type="text"  name="name"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Name">
              <br>
              <small><div id="name" class="required" style="font-size: small;color: red;">{{ errors.name }}</div></small>
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product price:</label>
              <input v-model="formData.price" type="text"  name="price"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Price">
              <br>
              <small><div id="price" class="required" style="font-size: small;color: red;">{{ errors.price }}</div></small>
          </div>
          <div class="input-group mb-3">
            <label for="productImage" class="form-label fs-6" style="color: #ac7206;">Product Image</label>
            <br>
            <input type="file" class="form-control" id="productImage" @change="handleFile" required>
             
             </div>

          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Delivery time:</label>
              <input v-model="formData.time" type="text"  name="time"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Delivery Timing">
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
export default{
    data(){
        return{

        }
    }
}

</script>

<style>

</style>