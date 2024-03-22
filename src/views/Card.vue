<template>
    <!-- <div>
      <div class="p-3 bg-primary text-center">
        <div>
          <div href="#" class='fw-bolder fs-4 text-white'>Amazon.com</div>
        </div>
      </div>
      <container>
        <div>
          <div class='m-2' style='display:flex;flex-direction:column;justify-content:center;align-items:center;'>
            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="productName" class="form-label fw-bold">Product name</label>
                <input type="text" class="form-control" id="productName" placeholder="Product name" v-model="formData.name" required>
                <div class="invalid-feedback">{{ errors.name }}</div>
              </div>
  
              <div class="mb-3">
                <label for="productprice" class="form-label fw-bold">Product price</label>
                <input type="text" class="form-control" id="productprice" placeholder="Enter price" v-model="formData.price" required>
                <div class="invalid-feedback">{{ errors.price }}</div>
              </div>
  
              
  
              <div class="mb-3">
                <label for="producttime" class="form-label fw-bold">Product time</label>
                <input type="text" class="form-control" id="producttime" placeholder="Enter time" v-model="formData.time" required>
                <div class="invalid-feedback">{{ errors.time }}</div>
              </div>
  
              <div class="mb-3">
                <label for="productImage" class="form-label fw-bold">Product Image</label>
                <input type="file" class="form-control" id="productImage" @change="handleFile" required>
              </div>
  
              <button type="submit" class="btn btn-primary">Add Product</button>
            </form>
          </div>
        </div>
      </container>
    </div> -->
  </template>
  
  <script>
//   import * as yup from 'yup';
  
//   export default {
//     data() {
//       return {
//         formData: {
//           name: '',
//           price: '',
//           time: '',
//           image: null
//         },
//         errors: {}
//       };
//     },
//     methods: {
//       handleSubmit() {
//         const schema = yup.object().shape({
//           name: yup.string().required(),
//           price: yup.string().required(),
//           time: yup.string().required(),
//           image: yup.string().required()
//         });
  
//         schema.validate(this.formData, { abortEarly: false })
//           .then(() => {
//             const formData = new FormData();
//             formData.append('file', this.formData.image);
//             formData.append('name', this.formData.name);
//             formData.append('price', this.formData.price);
//             formData.append('time', this.formData.time);
  
//             fetch('http://localhost:5000/product/upload', {
//               method: 'POST',
//               body: formData
//             })
//             .then(response => {
//               console.log('Data Received ', response.json());
//               alert('Product Details Uploaded Successfully');
//             })
//             .catch((error) => {
//               console.error('Error:', error);
//             });
//           })
//           .catch(error => {
//             const errors = {};
//             error.inner.forEach(err => {
//               errors[err.path] = err.message;
//             });
//             this.errors = errors;
//           });
//       },
//       handleFile(event) {
//         this.formData.image = event.target.files[0];
//       }
//     }
//   };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  