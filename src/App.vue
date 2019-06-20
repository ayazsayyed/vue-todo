<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Todo from './components/Todo' 
import Login from './components/Login' 
export default {
  name: 'app',
  components:{
    Login
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">

</style>
