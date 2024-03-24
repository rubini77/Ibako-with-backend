<template>
    <div><nav class="navbar" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
    <div class="container-fluid">
      <a href="/" style="text-decoration: none;"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
        </div>
    </nav>
    <div class="text-center p-4">
    <span class="mb-0 p-5 h4" style="color: #ac7206;font-weight: bold;">View Products</span>
  </div> <hr>
    
    <table class="table table-striped">
        <thead>
          <tr>  
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Delivery Time</th>
            <th>Product Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.id }}</td>
            <td>{{ product.name }}</td>
            <td>Rs.{{ product.price }}</td>
            <td>{{ product.time }}</td>
            <td><img :src="'http://localhost:5000/uploads/' + product.image" style="height: 80px; width: 130px;" /></td>
            <td><button class="btn btn-danger" @click="deleteProduct(product.id)">DELETE</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'Demo',
    data() {
      return {
        products: []
      };
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        axios.get('http://localhost:5000/product/get')
          .then(response => {
            this.products = response.data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
      },
      deleteProduct(id) {
        fetch(`http://localhost:5000/product/delete/${id}`, {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'delete',
          body: JSON.stringify({ id: id })
        })
          .then(response => {
            alert("Product deleted Successfully")
            console.log('Data Received ', response);
            this.fetchProducts(); // Refresh data after delete
          })
          .catch((e) => {
            console.error('Error deleting product:', e);
          });
      }
    }
  };
  </script>
  
  <style>
  .logo-img{
    height: 60px;
    width: 70px;
    border-radius: 50%;
}
  /* You can optionally add custom styles here */
  </style>
  