<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-info">
      <div class="container justify-content-center mt-5">
        <a class="navbar-brand" href="#">TRAKK 'EM All !!</a>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data: function() {
    return {
      userLoggedIn: false
    };
  },
  methods: {
    
  },
  created() {
  },
};
</script>

<style>
.navbar-brand{
  font-size: 20px;
}
@media screen and (max-width: 768px) {
  .navbar .container{
    margin-top: 0.25rem !important;
  }
}
</style>
