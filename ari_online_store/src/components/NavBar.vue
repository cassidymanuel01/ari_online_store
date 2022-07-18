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
            <router-link v-if="admin" to="/admin">ADMIN</router-link>
            <router-link to="/about">ABOUT</router-link>
            <router-link to="/contact">CONTACT</router-link>
          </div>
          <div class="navbar-nav d-flex">
            <router-link v-if="user" to="/profilePage"><i class="bi bi-person-circle"></i> {{ firstName }} _ {{ surname }}</router-link>
            <a v-if="user" data-bs-toggle="offcanvas" data-bs-target="#cart" href=""><i class="bi bi-cart"></i></a>
          </div>
        </div>
      </div>
    </div>
    </nav>
    <div v-if="user" class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="cart" aria-labelledby="cartLabel">
      <div class="offcanvas-header">
          <h5 class="w-75 offcanvas-title" id="cartLabel">{{$store.state.user.firstName}} {{$store.state.user.surname}}'s Cart</h5>
        <div class="w-100 d-flex justify-content-between align-items-center">
          <h6 v-if="$store.state.cartTotal" class="m-0 fs-5">Total: R{{cartTotal}}</h6>
          <h6 v-if="!$store.state.cartTotal" class="m-0 fs-5">Total: R0</h6>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
      </div>
      <div class="offcanvas-body">
        <div v-if="cart">
          <div v-if="cart.length">
            <div class="row">
            <div v-for="item in cart" :key="item.id" class="col-md-4">
            <div class="cartItemContainer">
              <div class="row mx-auto">
                <div style="height:71px" class="col-md-12 d-flex justify-content-between align-items-center py-3">
                  <h6 class="mb-0">{{item.title}}</h6>
                  <button type="button" @click="removeFromCart(item.id)" class="btn-close"></button>
                </div>
              </div>
              <img class="p-3 img-fluid" :src="item.coverImage" alt="albumItem"/>
              <div class="row ms-auto">
                <div class="col-md-12 pb-2 px-3 d-flex align-items-center justify-content-start w-100">
                  <span>
                    R{{item.price}}
                  </span>
                </div>
              </div>
            </div>
          </div>
          </div>
          </div>
          <div v-else>
            <h2>Your cart is empty</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasRightLabel">Just Like Magic</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <div class="navbar-nav gap-5 d-flex flex-column justify-content-center h-100 fs-3 align-items-center">
          <router-link to="/">HOME</router-link>
          <router-link v-if="user" to="/allInfo">ALL PRODUCTS</router-link>
          <router-link  v-if="!user" to="/register">REGISTER</router-link>
          <router-link v-if="!user" to="/login">LOGIN</router-link>
          <router-link v-if="user" to="/login">LOGIN</router-link>
          <router-link v-if="admin" to="/admin">ADMIN</router-link>
          <router-link to="/about">ABOUT</router-link>
          <router-link to="/contact">CONTACT</router-link>
          <a v-if="user" data-bs-toggle="offcanvas" data-bs-target="#cart" href=""><i class="bi bi-cart"></i></a>
          <router-link v-if="user" to="/profilePage">{{firstName}} _ {{surname}}</router-link>
          </div>
        </div>
    </div>
</template>
<script>
export default {
  mounted(){
    this.$store.dispatch("getCart");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin(){
      if(this.$store.state.user !=null){
        return this.$store.state.user.isAdmin;
      }
    },
    firstName(){
      return this.$store.state.user.firstName;
    },
    surname(){
      return this.$store.state.user.surname;
    },
    cart(){
      return this.$store.state.cart;
    },
    cartTotal(){
      return this.$store.state.cartTotal;
    }
  },
  methods:{
    removeFromCart(item){
      this.$store.dispatch('removeFromCart',item)
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

#currentCartButton {
  border: 1px solid white;
  background-color: transparent;
  transition: background-color 0.3s ease;
  color: red;
}

#currentCartButton:hover {
  background-color: white;
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

#cart{
  --bs-offcanvas-width: 60vw;
}

.white a,
.white {
  /* transition: 10s; */
  background: white;
  color: black !important;
  /* background: linear-gradient(#28D084,lightgrey); */
}

.cartItemContainer {
  background-color: rgb(113 151 119);
  border-radius: 15px;
  margin: 1px;
  border: 5px solid white;
}


.cartItemContainer:hover img {
  transform: translate(0px, -20px);
}
.cartItemContainer img {
  transition: all 1s ease;
  width: 347.67px;
  height: 196px;
  object-fit: contain;
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
