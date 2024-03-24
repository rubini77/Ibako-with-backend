<template>
 <div><nav class="navbar" style="background:linear-gradient(to top,#FBEDE5,white,#fce9e2);">
    <div class="container-fluid">
      <a href="/" style="text-decoration: none;"><img class="logo-img img-fluid " src="../assets/icon-img-1.jpg"></a>
        </div>
    </nav>
    <div class="text-center p-4">
    <span class="mb-0 p-5 h4" style="color: #ac7206;font-weight: bold;">Order Details</span>
  </div> <hr><table class="table table-striped">
        <thead>
          <tr>  
            <th>Order ID</th>
            <th>Order Name</th>
            <th>Order Price</th>
            <th>Order Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.name }}</td>
            <td>Rs.{{ order.price*order.quantity }}</td>
            <td>{{ order.quantity }}</td>
             </tr>
        </tbody>
      </table>
    </div>

</template>

<script>
import axios from 'axios';

export default{
    data(){
        return{
            orders:[]
        }
    },
    mounted() {
      this.fetchProducts();
    },
    methods: {
      fetchProducts() {
        console.log("fetch called")
        axios.get('http://localhost:5000/item/getitem')
          .then(response => {
            this.orders = response.data;
          })
          .catch(error => {
            console.error('Error fetching products:', error);
          });
          console.log("fetch ended")
      },
    }
}

</script>

<style>

</style>