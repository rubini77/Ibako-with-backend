<template>
  <section>
    <nav class="navbar" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
      <div class="container-fluid">
        <a href="/" style="text-decoration: none;"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
        <span class="mb-0 p-3 h4" style="color: #ac7206;font-weight: bold;">AdminPage</span>
      </div>
    </nav>
    <div class="pt-5 container d-flex justify-content-center">
      <div class="container border p-3 m-1" style="max-width: 350px;">
        <div class="fs-5 p-3 text-center"><strong>Update Product</strong></div>
        <form @submit.prevent="handleSubmit">
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product ID:</label>
            <input v-model="formData.id" type="text" name="id" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product ID">
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product Name:</label>
            <input v-model="formData.name" type="text" name="name" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Name">
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Product Price:</label>
            <input v-model="formData.price" type="text" name="price" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Product Price">
          </div>
          <div class="input-group mb-3">
            <label for="productImage" class="form-label fs-6" style="color: #ac7206;">Product Image</label>
            <input type="file" class="form-control" id="productImage" @change="handleFile">
          </div>
          <div class="input-group mb-3">
            <label class="fs-6" style="color: #ac7206;">Enter Delivery time:</label>
            <input v-model="formData.time" type="text" name="time" class="form-control form-control-lg bg-light fs-6 w-100" placeholder="Delivery Timing">
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

export default {
  data() {
    return {
      formData: {
        id: '',
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
      });

      schema.validate(this.formData, { abortEarly: false })
        .then(() => {
          const formData = new FormData();
          formData.append('id', this.formData.id);
          formData.append('name', this.formData.name);
          formData.append('price', this.formData.price);
          formData.append('time', this.formData.time);
          if (this.formData.image) {
            formData.append('image', this.formData.image);
          }

          fetch(`http://localhost:5000/product/update/${this.formData.id}`, {
            method: 'PUT',
            body: formData
          })
          .then(response => {
            if(response.ok){
              console.log(this.formData.image)
            console.log('Data Received ', response.json());
            alert('Product Details Updated Successfully');
            window.location.reload();
            }
          })
          .catch((error) => {
            console.error('Error:', error);
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
};
</script>

<style>
.logo-img {
  height: 60px;
  width: 70px;
  border-radius: 50%;
}
</style>
