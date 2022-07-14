<template>
<NavBar/>
  <router-view />
</template>

<script>
import NavBar from "./components/NavBar.vue";
function changeBg(){
  if(window.scrollY ==0){
    document.getElementById("nav").style = "background-color: rgba(0, 0, 0, 0.3);"
  }
  else{
    document.getElementById("nav").style = "background-color: rgba(0, 0, 0, 0.9);" }
}
window.addEventListener('scroll',changeBg)
export default({
 components:{NavBar},
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

