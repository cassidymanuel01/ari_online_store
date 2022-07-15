<template>
  <nav
    id="nav"
    class="p-0 navbar text-center fixed-top navbar-expand-lg navbar-dark"
  >
    <div class="container pullRightLeft p-3 mt-1">
      <router-link to="/" class="mx-auto navbar-brand"> Just Like Magic </router-link>
      <button
        class="mx-auto navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse">
        <div id="navBarSize" class="navbar-nav mx-auto">
          <div class="navbar-nav d-flex align-items-center">
            <router-link to="/">HOME</router-link>
            <router-link to="/allInfo" v-if="user">ALL PRODUCTS</router-link>
            <router-link v-if="!user" to="/register">REGISTER</router-link>
            <router-link v-if="!user" to="/login">LOGIN</router-link>
            <div v-if="user">
              <a v-if="user[0].firstName == 'Admin'" href="/admin">ADMIN</a>
            </div>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/contact">CONTACT</router-link>
          </div>
          <div class="navbar-nav d-flex">
            <a v-if="user" href="#"
              >{{ user[0].firstName }} _ {{ user[0].surname }}</a
            >
          </div>
        </div>
      </div>
    </div>
    </nav>
<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
     <!-- <div class="col-md-4"> -->
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div id="titles" class="col-6 ps-2 pt-3">
                    <h6>title</h6>
                    <h5 style="height: 48px">title</h5>
                  </div>
                </div>
                <img
                  class="px-3 img-fluid"
                  src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> Rprice
                    </button>
                  </div>
                </div>
              </div>
          <!-- </div> -->
    </div>
</div>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Just Like Magic</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
     <div class="navbar-nav gap-5 d-flex flex-column justify-content-center h-100 fs-3 align-items-center">
      <a href="/">HOME</a>
      <a v-if="user" href="/allInfo">ALL PRODUCTS</a>
      <a v-if="!user" href="/register">REGISTER</a>
      <a v-if="!user" href="/login">LOGIN</a>
      <a v-if="user" href="/login">LOGIN</a>
          <a v-if="admin" href="/admin">ADMIN</a>
        <a href="/about">ABOUT</a>
        <a href="/contact">CONTACT</a>
        <!-- <a @click="openCart" data-bs-toggle="offcanvas" data-bs-target="#cart" href=""><i class="bi bi-cart"></i></a> -->
        <a v-if="user" href="#">{{firstName}} _ {{surname}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin(){
      if(this.$store.state.user != null)
      return this.$store.state.user[0].isAdmin;
    },
    firstName(){
      return this.$store.state.user[0].firstName;
    },
    surname(){
      return this.$store.state.user[0].surname;
    },
    cart(){
      return this.$store.state.cart;
    }
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");
* {
  font-family: "Nunito", sans-serif;
  font-weight: bolder;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  color: white;
}

#nav {
  transition: all 0.4s ease;
  background-color: rgba(0, 0, 0, 0.3);
}

.white a,
.white {
  /* transition: 10s; */
  background: white;
  color: black !important;
  /* background: linear-gradient(#28D084,lightgrey); */
}

div.pullRightLeft a:before,
div.pullRightLeft a:after {
  position: absolute;
  width: 2px;
  height: 100%;
  top: 0px;
  content: "";
  background: #fff;
  opacity: 0.3;
  transition: all 0.3s;
}

div.pullRightLeft a:before {
  left: 0px;
}

div.pullRightLeft a:after {
  right: 0px;
}

div.pullRightLeft a:hover:before,
div.pullRightLeft a:hover:after {
  width: 100%;
}

/* Highlight text out  */
div.highlightTextOut a {
  color: rgba(255, 255, 255, 0.3);
}

div.highlightTextOut a:before,
div.highlightTextIn a:before {
  position: absolute;
  color: #fff;
  top: 0px;
  left: 0px;
  padding: 10px;
  overflow: hidden;
  content: attr(alt);
  transition: all 0.3s;
  transform: scale(0.8);
  opacity: 0;
}

div.highlightTextOut a:hover:before,
div.highlightTextIn a:hover:before {
  transform: scale(1);
  opacity: 1;
}

header {
  font-family: Raleway;
  margin: 0 auto;
  text-align: center;
}

header h1 {
  color: #aaa;
  font-size: 40px;
  font-weight: lighter;
  margin-bottom: 5px;
}

div.container {
  font-family: "Nunito", sans-serif;
  margin: 0 auto;
  padding: 5em 3em;
  text-align: center;
}

.offcanvas {
  background: linear-gradient(lightgrey, #28d084);
}

.offcanvas-header {
  border-bottom: 0.3rem solid rgb(162, 162, 162);
}

div.container a {
  color: #fff;
  text-decoration: none;
  margin: 0px 10px;
  padding: 10px 10px;
  position: relative;
  z-index: 0;
  cursor: pointer;
}
</style>
