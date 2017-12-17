<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit Customer</h1>
    <form v-on:submit="updateCustomer">
        <div class="well">
            <h4>Event Info</h4>
            <div class="form-group">
                <label>Event Name</label>
                <input type="text" class="form-control" placeholder="First Name" v-model="customer.event_name">
            </div>
            <div class="form-group">
                <label>Event Location</label>
                <input type="text" class="form-control" placeholder="Last Name" v-model="customer.event_location">
            </div>
        </div>
        <div class="well">
            <h4>Event Affiliation/Discipline</h4>
            <div class="form-group">
                <label>Event Discipline</label>
                <input type="text" class="form-control" placeholder="Email" v-model="customer.event_discipline">
            </div>
            <div class="form-group">
                <label>Event Affiliation</label>
                <input type="text" class="form-control" placeholder="Phone" v-model="customer.event_affiliation">
            </div>
        </div>

        <div class="well">
            <h4>Event Date/Time</h4>
            <div class="form-group">
                <label>Event Date</label>
                <input type="text" class="form-control" placeholder="Address" v-model="customer.event_date">
            </div>
            <div class="form-group">
                <label>Event Time</label>
                <input type="text" class="form-control" placeholder="City" v-model="customer.event_time">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
    import Alert from './Alert'
    export default {
    name: 'add',
    data () {
        return {
        customer: {},
        alert:''
        }
    },
    methods: {
        fetchCustomer(id){
            this.$http.get('http://localhost:3000/api/costumer/'+id)
            .then(function(response){
                this.customer = response.body;
            });
        },
        updateCustomer(e){
            if(!this.customer.event_name || !this.customer.event_location){
                this.alert = 'Please fill in all required fields';
            } else {
                let updCustomer = {
                    event_name: this.customer.event_name,
                    event_location: this.customer.event_location,
                    event_discipline: this.customer.event_discipline,
                    event_affiliation: this.customer.event_affiliation,
                    event_date: this.customer.event_date,
                    event_time: this.customer.event_time
                }

                this.$http.post('http://localhost:3000/api/costumer/update/'+this.$route.params.id, updCustomer)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Customer Updated'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    created: function(){
        this.fetchCustomer(this.$route.params.id);
    },
    components:{
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
