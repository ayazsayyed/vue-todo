<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-gradient-info">
      <div class="container">
        <a class="navbar-brand" href="#">TRAKK 'EM All !!</a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-default"
          aria-controls="navbar-default"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-default">
          <div class="navbar-collapse-header">
            <div class="row">
              <div class="col-6 collapse-brand">
                <a href="index.html">
                  <!-- <img src="assets/img/brand/blue.png"> -->
                </a>
              </div>
              <div class="col-6 collapse-close">
                <button
                  type="button"
                  class="navbar-toggler"
                  data-toggle="collapse"
                  data-target="#navbar-default"
                  aria-controls="navbar-default"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span></span>
                  <span></span>
                </button>
              </div>
            </div>
          </div>

          <ul class="navbar-nav ml-lg-auto">
            <li class="nav-item" v-if="!userLoggedIn">
              <a class="nav-link nav-link-icon" href="#">
                <button type="button" class="btn btn-secondary" @click="googleLogin">Login</button>
              </a>
            </li>
            <li class="nav-item" v-if="userLoggedIn">
              <a class="nav-link nav-link-icon" href="#">
                <button type="button" class="btn btn-secondary" @click="googleLogout">Logout</button>
              </a>
            </li>
          </ul>
        </div>
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
    googleLogout() {
      let that = this;
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signOut()
        .then(
          function() {
            that.userLoggedIn = false;
            that.showNotification('You are logged out', "alert-danger");
          },
          function(error) {
            console.error("Sign Out Error", error);
          }
        );
    },
    googleLogin() {
      let that = this;
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          // This gives you a Google Access Token. You can use it to access the Google API.
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          console.log(user);
          that.userLoggedIn = true;
          that.$notify({
            group: "foo",
            text: `<div class="alert alert-success" role="alert">
                            <p> Welcome ${user.displayName}</p> 
                    You are logged in as ${user.email}
                </div> `,

            position: "top left",
            duration: 10000
          });
          // ...
        })
        .catch(function(error) {
          that.userLoggedIn = false;
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          that.showNotification(errorMessage, "alert-danger");
        });
    },
    showNotification(msg, alertType) {
      this.$notify({
        group: "foo",
        text: `<div class="alert ${alertType}" role="alert">${msg}</div> `,
        position: "top left",
        duration: 10000
      });
    }
  },
  created() {
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.userLoggedIn = true;
        console.log("logged in");
      } else {
        this.userLoggedIn = false;
      }
    });
  },
  mounted() {
    if (localStorage.getItem("user")) {
      const tempData = JSON.parse(localStorage.getItem("user"));
      console.log(tempData);
    }
  }
};
</script>

<style>
</style>
