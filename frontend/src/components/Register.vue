<template>
  <div class="about container">
    <h1 class="page-header">Register</h1>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">First Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First Name">
        <label for="exampleInputEmail1">Last Name</label>
        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Last Name">
        <label for="exampleInputEmail1">Email</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Email">
        <label for="exampleInputEmail1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter Password">
        <label for="exampleInputEmail1">Password Confirmation</label>
        <input type="password" class="form-control" id="exampleInputPassword" aria-describedby="emailHelp" placeholder="Enter Password Confirmation">
        <br>
        <button type="submit" class="btn btn-primary">Register</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
