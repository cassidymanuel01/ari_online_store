<template>
<NavBar/>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default({
 components:{NavBar},
 computed:{
    user(){
      return this.$store.state.user;
    }  },
})
</script>


<style>

nav {
  padding: 30px;
  background-color: white;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}
</style>

