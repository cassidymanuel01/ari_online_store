<template>
<<<<<<< HEAD
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link v-if="user" to="/allInfo">All</router-link> |
    <router-link v-if="user" to="/admin">Admin</router-link>
    <router-link to="/yourProfile">Your Profile</router-link> |
    <router-link v-if="!user" to="/register">Register</router-link> |
    <router-link v-if="!user" to="/login">Login</router-link>
  </nav>
  <router-view/>
</template>

<script>
export default({
  computed:{
    user(){
      return this.$store.state.user;
    }
  },
=======
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
>>>>>>> e571938e2413d2a7d1e9f847cf0d949f15e61a80
})
</script>


<style>

</style>

