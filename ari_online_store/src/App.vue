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

</style>

