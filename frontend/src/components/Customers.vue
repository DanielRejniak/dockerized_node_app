<template>
  <div class="customers container">
    <br>
    <Alert v-if="alert" v-bind:message="alert" />
    <input class="form-control" placeholder="County" v-model="filterInput">
    <br/>
    <table class="table">
        <thead>
          <tr>
            <th>Location</th>
            <th>Discipline</th>
            <th>Affiliation</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="customer in filterBy(customers,filterInput,filterInput1,filterInput2)">
            <td>{{customer.event_location}}</td>
            <td>{{customer.event_discipline}}</td>
            <td>{{customer.event_affiliation}}</td>
            <td>{{customer.event_date}}</td>
            <td>{{customer.event_time}}</td>
            <td>{{customer.event_approved}}</td>
            <td><router-link class="btn btn-primary" v-bind:to="'/customer/'+customer._id">More Info</router-link></td>
          </tr>
        </tbody>
    </table>
    <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">Previous</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
  </div>
</template>

<script>
  import Alert from './Alert';
  export default {
    name: 'customers',
    data () {
      return {
        customers: [],
        alert:'',
        filterInput:''
      }
    },
    methods: {
      fetchCustomers(){
        this.$http.get('http://localhost:3000/api/costumers')
          .then(function(response){
            this.customers = response.body;
            console.log(response);
          });
      },
      filterBy(list, value, value1, value2){
        return list.filter(function(customer){
          return customer.event_location.indexOf(value) > -1
        });
      }
    },
    created: function(){
      if(this.$route.query.alert){
        this.alert = this.$route.query.alert;
      }
      this.fetchCustomers();
    },
    updated: function(){
      this.fetchCustomers();
    },
    components: {
      Alert
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
