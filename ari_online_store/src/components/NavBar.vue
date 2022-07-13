<template>
    <!-- <div id="Background" class="container white pullRightLeft fixed-top fs-5 text-white">
  Just Like Magic
  <a href="/">HOME</a>
  <a href="/allInfo">ALL PRODUCTS</a>
  <a href="/register">Register</a>
  <a href="/login">Login</a>
  <a href="/admin">ADMIN</a>
  <a href="/about">ABOUT</a>
  <a href="/contact">CONTACT</a> -->
  <nav class="p-0 navbar text-center fixed-top navbar-expand-lg navbar-dark">
        <div class="bg-dark container pullRightLeft p-3 mt-1">
            <a href="/" class="mx-auto navbar-brand"> Just Like Magic </a>
            <button class="mx-auto navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div id="navBarSize" class="navbar-nav mx-auto">
                    <div class="navbar-nav d-flex">
                        <a href="/">HOME</a>
                        <a href="/allInfo">ALL PRODUCTS</a>
                        <a href="/register">Register</a>
                        <a href="/login">Login</a>
                        <a href="/admin">ADMIN</a>
                        <a href="/about">ABOUT</a>
                        <a href="/contact">CONTACT</a>
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
     <ul class="navbar-nav w-100 border-2 border-dark d-flex justify-content-center">
              <li class="nav-item">
                <a class="nav-link" href="/">HOME</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/allInfo">ALL PRODUCTS</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/admin">Admin</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
  </div>
  <!-- </div> -->
</div>
</template>
<script>

import HomeView from '../views/HomeView.vue'
import AllProps from '../views/AllInfo.vue'
import Admin from '../views/Admin.vue'
import Register from '../views/RegisterView.vue'
import Login from '../views/LoginView.vue'
import YourProfile from '../views/YourProfileView.vue'
import SingleItem from '../views/SingleItemView.vue'
import ContactPage from '../views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  
  },{
    path: '/allInfo',
    name: 'AllInfo',
    component: AllProps
  },{
    path: '/admin',
    name: 'Admin',
    component: Admin
  },{
    path: '/register',
    name: 'register',
    component: Register
  },{
    path: '/login',
    name: 'login',
    component: Login
  },{
    path: '/yourProfile',
    name: 'yourProfile',
    component: YourProfile
  },{
    path: '/allInfo/:id',
    name: 'single',
    component: SingleItem,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactPage,
  },
  
]
export default {
    
}
function changeBg(){
    var navbar = document.getElementById('Background');
    var scrollValue = window.scrollY;
    if (scrollValue < 700){
        navbar.classList.remove('white')
    }
    else{
        navbar.classList.add('white')
    }
}
window.addEventListener('scroll', changeBg);
window.addEventListener('load', changeBg);
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');
*{
font-family: 'Nunito', sans-serif;
font-weight: bolder;
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