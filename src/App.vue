<template>
  <div id="app">
    <Todo/>
  </div>
</template>

<script>
import Todo from './components/Todo' 
export default {
  name: 'app',
  components:{
    Todo
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
