<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-info">
      <div class="container">
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
</style>
