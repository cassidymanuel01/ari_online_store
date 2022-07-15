<template>
  <nav id="nav" class="p-0 navbar text-center fixed-top navbar-expand-lg navbar-dark">
        <div class="container pullRightLeft p-3 mt-1">
            <a href="/" class="mx-auto navbar-brand"> Just Like Magic </a>
            <button class="mx-auto navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse">
                <div id="navBarSize" class="navbar-nav mx-auto">
                    <div class="navbar-nav d-flex align-items-center">
                        <a href="/">HOME</a>
                        <a v-if="user" href="/allInfo">ALL PRODUCTS</a>
                        <a v-if="!user" href="/register">REGISTER</a>
                        <a v-if="!user" href="/login">LOGIN</a>
                        <a v-if="admin" href="/admin">ADMIN</a>
                        <a href="/about">ABOUT</a>
                        <a href="/contact">CONTACT</a>
                    </div>
                    <div v-if="user" class="navbar-nav d-flex">
                        <a @click="openCart" data-bs-toggle="offcanvas" data-bs-target="#cart" href="/"><i class="bi bi-cart"></i></a>
                        <a href="#">{{user[0].firstName}} _ {{user[0].surname}}</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
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
    computed:{
    user(){
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
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');
*{
font-family: 'Nunito', sans-serif;
font-weight: bolder;
}

#nav{
  transition: all 0.4s ease;
  background-color: rgba(0, 0, 0, 0.3);
}

.white a, .white{
     /* transition: 10s; */
     background: white;
     color: black !important;
     /* background: linear-gradient(#28D084,lightgrey); */
 }

div.pullRightLeft a:before, div.pullRightLeft a:after
{
    position: absolute;
    width: 2px;
    height: 100%;
    top: 0px;
    content: '';
    background: #FFF;
    opacity: 0.3;
    transition: all 0.3s;
}

div.pullRightLeft a:before
{
    left: 0px;
} 

div.pullRightLeft a:after
{
    right: 0px;
}

div.pullRightLeft a:hover:before, div.pullRightLeft a:hover:after
{
    width: 100%;
}

/* Highlight text out  */
div.highlightTextOut a
{
    color: rgba(255, 255, 255, 0.3); 
}

div.highlightTextOut a:before, div.highlightTextIn a:before
{
    position: absolute;
    color: #FFF;
    top: 0px;
    left: 0px;
    padding: 10px;
    overflow: hidden;
    content: attr(alt);
    transition: all 0.3s;
    transform: scale(0.8);
    opacity: 0;
} 

div.highlightTextOut a:hover:before, div.highlightTextIn a:hover:before
{
    transform: scale(1);
    opacity: 1;
}

header
{
    font-family: Raleway;
    margin: 0 auto;
  text-align: center;
}

header h1
{
    color: #AAA;
    font-size: 40px;
    font-weight: lighter;
    margin-bottom: 5px;
}



div.container
{

    font-family: 'Nunito', sans-serif;
    margin: 0 auto;
  padding: 5em 3em;
  text-align: center;
}

div.container a
{
    color: #FFF;
    text-decoration: none;
    margin: 0px 10px;
    padding: 10px 10px;
    position: relative;
    z-index: 0;
    cursor: pointer;
}
</style>