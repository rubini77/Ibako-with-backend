<template>
  <section>
    <nav class="navbar" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
  <div class="container-fluid">
    <a href="/" style="text-decoration: none;"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
      </div>
  </nav>
  <div class="text-center p-4">
  <span class="mb-0 p-5 h4" style="color: #ac7206;font-weight: bold;">Update Products</span>
</div> <hr>
  <div class="pt-3 container d-flex justify-content-center">
    <div class="container border  p-3 m-1" style="max-width: 350px;">
      <Div class="fs-5 p-3 text-center"><strong>Update Products</strong></Div>
      <form @submit.prevent="handleSubmit">
         
        <div class="input-group mb-3">
          <label class="fs-6" style="color: #ac7206;">Enter Product ID:</label>
            <input v-model="formData.id" type="text"  name="id"  class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product ID">
            <br>
            <small><div id="name" class="required" style="font-size: small;color: red;">{{ errors.name }}</div></small>
        </div>

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
        <button type="submit" class="btn" style="background-color: #e29e1f;font-weight: bold;">Update Product</button>
      </div>
      </form>
    </div>
  </div>
</section>  

</template>

<script>
import * as yup from 'yup';

export default{
  data(){
      return{
        formData: {
        id:'',
        name: '',
        price: '',
        time: '',
        image: null
      },
      errors: {}
      }
  },
  methods: {
    handleSubmit() {
      const schema = yup.object().shape({
        id: yup.string().required(),
        name: yup.string().required(),
        price: yup.string().required(),
        time: yup.string().required(),
        image: yup.mixed().required()
      });

      schema.validate(this.formData, { abortEarly: false })
        .then(() => {
          const formData = new FormData();
          formData.append('id', this.formData.id);
          formData.append('image', this.formData.image);
          formData.append('name', this.formData.name);
          formData.append('price', this.formData.price);
          formData.append('time', this.formData.time);
          // console.log("data" , this.formData.image)

          fetch("http://localhost:5000/product/UpdateProduct", {
            method: 'POST',
            body: formData
          })
          // .then(response => {
          //   console.log('Data Received ', response.json());
          //   // alert('Product Details updated Successfully');
          //   // window.location.reload();
          // })
          // .catch((error) => {
          //   console.error('Error:', error);
          // });
          .then(response => {
                      if (response.ok) {
                          return response.json();
                      }
                      throw new Error('Failed to update product');
                  })
                  .then(data => {
                      console.log('Data Received ', data);
                      alert('Product Details updated Successfully');
                      window.location.reload();
                  })
                  .catch(error => {
                      console.error('Error:', error);
                      alert('Failed to update product');
                  });
        })
        .catch(error => {
          const errors = {};
          error.inner.forEach(err => {
            errors[err.path] = err.message;
          });
          this.errors = errors;
        });
    },
    handleFile(event) {
      this.formData.image = event.target.files[0];
    }
  }
}

</script>

<style>

</style>