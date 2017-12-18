<template>
  <div class="add container">
    <Alert v-if="alert" v-bind:message="alert" />
    <h1 class="page-header">Add Event</h1>
    <form v-on:submit="addCustomer">
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
        </div>
        <button type="submit" class="btn btn-primary">Submit Event</button>
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
        addCustomer(e){
            if(!this.customer.event_name || !this.customer.event_location){
                this.alert = 'Please fill in all required fields';
            } else {
                let newCustomer = {
                    event_name: this.customer.event_name,
                    event_location: this.customer.event_location,
                    event_discipline: this.customer.event_discipline,
                    event_affiliation: this.customer.event_affiliation,
                    event_date: this.customer.event_date,
                    event_time: this.customer.event_time
                }

                this.$http.post('http://localhost:3000/api/costumer/add', newCustomer)
                    .then(function(response){
                        this.$router.push({path: '/', query: {alert: 'Customer Added'}});
                    });

                e.preventDefault();
            }
            e.preventDefault();
        }
    },
    components: {
        Alert
    }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
