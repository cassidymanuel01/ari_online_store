<template>
    <div id="Background" class="container white pullRightLeft fixed-top fs-5 text-white">
  Just Like Magic
  <a href="/">HOME</a>
  <a href="">ARTICLES</a>
  <a href="">PORTFOLIO</a>
  <a href="/about">ABOUT</a>
  <a href="/contact">CONTACT</a>
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

.white{
     transition: 10s;
     background: white;
     color: black;
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