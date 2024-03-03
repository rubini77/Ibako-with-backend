<template>
     <div  class="fs-3 text-center p-3">Add_Product_Details</div>
    <div class="container border shadow" >
       
    <form @submit.prevent="submitForm" class="d-flex flex-row">
        <div class="p-2">
      <label for="name">Name:</label>
      <input v-model="product.name" required />
    </div>
         <div class="p-2">
      <label for="file" >Image:</label>
      <input type="file" required />
        </div>
        <div class="p-2">
      <label for="deliveryMinutes">Delivery Minutes:</label>
      <input v-model="product.deliveryMinutes" type="number" required />
        </div>
        <div class="p-2">
      <label for="price">Price:</label>
      <input v-model="product.price" type="number" required />
    </div>
    <div class="p-2">
      <button class="btn btn-primary" type="submit">Add Product</button>
    </div>
    </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        product: {
          name: "",
          file: "",
          deliveryMinutes: 0,
          price: 0,
        },
      };
    },
    methods: {
      submitForm() {
        // Emit the product data to the parent component
        this.$emit("submit", this.product);
  
        // Optionally, you can clear the form after submission
        this.product = {
          name: "",
          file: "",
          deliveryMinutes: 0,
          price: 0,
        };
      },
    },
  };
  </script>
  