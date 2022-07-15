<template>
  <div id="login-page">
    <div id="login" class="vh-100 login row container mx-auto">
      <div id="form" v-if="!this.$store.state.user" class="form mx-auto">
        <img id="login_image" src="../assets/login_image.jpg" alt="loginImage">
        <h3 class="my-3">LOG IN</h3>
          <input id="inputField" @click="setNone" v-model="email" name="email" type="email" placeHolder="Email" class="form-control mx-auto my-3">
          <br>
          <input id="inputField" @click="setNone" v-model="password" name="password" type="text" placeHolder=" Password" class="form-control mx-auto my-3">
          <div class="d-flex justify-content-center gap-3 align-items-center flex-column">
            <button class="mt-4 btn btn-primary" @submit="preventDefault" @click="checkInfo">Login</button>
            <span v-if="$store.state.noUser">
              Account not found <router-link to="/register"><button @click="setNone" class="btn btn-primary" id="customButton">Create one?</button></router-link>
            </span>
          </div>
      </div>
      <div id="form" class="d-flex flex-column align-items-center justify-content-center" v-else>
        <h2 class="py-3">Logged in as {{this.$store.state.user.firstName}} {{this.$store.state.user.surname}}</h2>
        <button id="viewButton" class="btn btn-primary"><router-link to="/allInfo">View All Our Products</router-link></button>
      </div>
    </div>
  </div>
  
  <Footer/>
</template>

<script>
import Footer from '../components/footer.vue'
export default {
  components:{Footer},
    data(){
    return{
      email:null,
      password:null,
    }
  },
  methods:{
    checkInfo(){
      this.$store.dispatch('checkSignIn',[this.email,this.password]);
    },
    setNone(){
      this.$store.dispatch('setNoUser',false);
    }
  }
}
</script>

<style scoped>
div.container{
  padding-right:2rem;
  padding-left:2rem;
  padding-bottom:0rem ;
}

#login-page{
  background: linear-gradient(lightgrey,#28D084);
  height: 104vh;
}

#inputField{
  width: 50%;
}

#form{
  border: hidden;
  border-radius: 10px;
  padding-bottom: 90px;
}
#login_image{
  max-width: 150px;
  border: solid #28D084;
  border-radius: 50%;
  box-shadow: 0vw 0vw 1vw #28D084;
}
input{
  border-top: hidden  !important;
  border-left: hidden  !important;
  border-right: hidden  !important;
  border-bottom: solid!important;
  max-width: 400px;
  background-color: rgb(245, 245, 245);
}
button{
  width: 100px !important;
  border-radius: 15px !important;
  background-color: #149e60!important;
  color: white;
  border: 1px solid black;
}
#customButton{
  width: 150px !important;
  border-radius: 15px !important;
  background-color: #149e60!important;
  color: white;
  border: 1px solid black;
}
#viewButton{
  width: 250px !important;
  border-radius: 15px !important;
  background-color: #149e60!important;
  color: white;
  border: 1px solid black;
}

@media screen and (min-width:320px) and (max-width:1023px) {
  #login-page{
  height: 120vh;
}
#inputField{
  width: 100%;
}
}

</style>