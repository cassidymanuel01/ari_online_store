<template>
  <div class="home">
    <div class="container mx-auto">
      <h1
        class="typewrite d-flex justify-content-center text-center"
        data-period="500"
        data-type='[ "Calling All Arianators","Welcome to...","Just Like Magic" ]'
      ></h1>
      <span class="wrap"></span>
    </div>
  </div>
</template>
<script>
import Admin from './Admin.vue';
export default {
  components: {Admin},
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Kalam&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Edu+TAS+Beginner:wght@600&display=swap");

* {
  padding: 0;
  margin: 0;
  overflow: hidden;
}

nav {
  background: url("https://i.postimg.cc/dVtG2RBJ/02-Ariana-Grande-press-photo-2020-cr-Dave-Meyers-billboard-1548-1603458811-compressed.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  font-family: "Kalam", cursive;
  position: fixed;
  color: #2c3e50;
  font-weight: 900;
  font-size: 20px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  width: 100vw;
}

.offcanvas {
  font-family: "Kalam", cursive;
  font-weight: 900;
  font-size: 15px;
  display: flex;
  justify-content: center;
}

.btn-close{
  color: transparent;
  background-color: transparent;
  padding: 30px;
}

.offcanvas-title {
  font-family: "Kalam", cursive;
  font-weight: 900;
  font-size: 35px;
  padding: 10px;
  width: 100vw;
}

.offcanvas{
  background: white;
  display: flex;
  justify-content: center;
  font-family: "Kalam", cursive;
  font-weight: 500;
  font-size: 20px;
  color: black;
}

nav a {
  font-weight: 900;
  font-size: 60px;
  color: white;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-weight: 900;
  font-size: 20px;
  color: white;
  text-decoration: none;
}

.nav-link.active {
  color: #68b593;
}

nav :hover {
  color: white;
}

.navbar-brand{
  font-family: "Kalam", cursive;
  font-weight: 900;
  font-size: 25px;
}

button{
  border: white;
  border-radius: 10%;
  color: white;
  background-color: white;
}

.home {
  background: linear-gradient(rgba(128, 128, 128, 0.2),rgba(0, 128, 0, 0.2)), url("https://i.postimg.cc/dVtG2RBJ/02-Ariana-Grande-press-photo-2020-cr-Dave-Meyers-billboard-1548-1603458811-compressed.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  width: 100vw;
  height: 100vh;
}

.typewrite {
  height: 100vh;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex: column;
  font-family: "Kalam", cursive;
  color: black;
  font-weight: 800;
  font-size: 50px;
}

.typewrite :hover {
  color: white;
}

.container {
  padding-top: 20px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.navbar-toggler-icon {
  background-color: white;
  border-radius: 20%;
}
</style>
