<template>
  <div class="about">
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <div class="container">
          <h2 class="masthead-subheading mb-0">All Horse Events In One Place</h2>
          <a href="/" class="btn btn-primary btn-xl rounded-pill mt-5">See Events</a>
        </div>
      </div>
      <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div>
    </header>
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

header.masthead {
  position: relative;
  overflow: hidden;
  padding-top: calc(7rem + 72px);
  padding-bottom: 7rem;
  background: linear-gradient(0deg, #ff6a00 0%, #ee0979 100%);
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
}

header.masthead .masthead-content {
  z-index: 1;
  position: relative;
}

header.masthead .masthead-content .masthead-heading {
  font-size: 4rem;
}

header.masthead .masthead-content .masthead-subheading {
  font-size: 2rem;
}

header.masthead .bg-circle {
  z-index: 0;
  position: absolute;
  border-radius: 100%;
  background: linear-gradient(0deg, #ee0979 0%, #ff6a00 100%);
}

header.masthead .bg-circle-1 {
  height: 90rem;
  width: 90rem;
  bottom: -55rem;
  left: -55rem;
}

header.masthead .bg-circle-2 {
  height: 50rem;
  width: 50rem;
  top: -25rem;
  right: -25rem;
}

header.masthead .bg-circle-3 {
  height: 20rem;
  width: 20rem;
  bottom: -10rem;
  right: 5%;
}

header.masthead .bg-circle-4 {
  height: 30rem;
  width: 30rem;
  top: -5rem;
  right: 35%;
}

@media (min-width: 992px) {
  header.masthead {
    padding-top: calc(10rem + 55px);
    padding-bottom: 10rem;
  }
  header.masthead .masthead-content .masthead-heading {
    font-size: 6rem;
  }
  header.masthead .masthead-content .masthead-subheading {
    font-size: 4rem;
  }
}

.bg-primary {
  background-color: #292E37 !important;
}

.btn-primary {
  background-color: #ee0979;
  border-color: #ee0979;
}

.btn-primary:active, .btn-primary:focus, .btn-primary:hover {
  background-color: #bd0760 !important;
  border-color: #bd0760 !important;
}

.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(238, 9, 121, 0.5);
}

.btn-secondary {
  background-color: #ff6a00;
  border-color: #ff6a00;
}

.btn-secondary:active, .btn-secondary:focus, .btn-secondary:hover {
  background-color: #cc5500 !important;
  border-color: #cc5500 !important;
}

.btn-secondary:focus {
  box-shadow: 0 0 0 0.2rem rgba(255, 106, 0, 0.5);
}

</style>
