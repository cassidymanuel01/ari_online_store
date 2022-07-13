<template>
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
    }  },
})
</script>


<style>

</style>

<script>
export default {
  
}
</script>
