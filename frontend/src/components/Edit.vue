<template>
  <div class="edit container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Edit Customer</h1>
    <form v-on:submit="updateCustomer">
        <div class="well">
            <h4>Event Info</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Name" v-model="customer.event_name">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Location" v-model="customer.event_location">
            </div>
        </div>
        <div class="well">
            <h4>Event Affiliation/Discipline</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Discipline" v-model="customer.event_discipline">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Affiliation" v-model="customer.event_affiliation">
            </div>
        </div>

        <div class="well">
            <h4>Event Date/Time</h4>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Date" v-model="customer.event_date">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Time" v-model="customer.event_time">
            </div>
            <div class="form-group">
                <input type="text" class="form-control" placeholder="Event Approval" v-model="customer.event_approved">
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Update Event</button>
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
                    event_time: this.customer.event_time,
                    event_approved: this.customer.event_approved
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
