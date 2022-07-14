<template id="login-page">
  <div id="login" class="login row container mx-auto">
    <div id="form" class="form mx-auto">
      <img id="login_image" src="../assets/login_image.jpg" alt="loginImage">
      <h3 class="my-3">LOG IN</h3>
        <input v-model="email" name="email" type="email" placeHolder="Email" class="form-control w-50 mx-auto my-3">
        <br>
        <input v-model="password" name="password" type="text" placeHolder=" Password" class="form-control w-50 mx-auto my-3">
        <button class="mt-4 btn btn-primary" @submit="preventDefault" @click="checkInfo">Login</button>
        <div class="mt-3" v-if="$store.state.user">
            logged in as {{$store.state.user[0].firstName}} {{$store.state.user[0].surname}}
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
    }
  }
}
</script>

<style scoped>
#form{
  border: hidden;
  border-radius: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
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
  border-radius: 20px !important;
  background-color: #28D084!important;
  border: hidden!important;
}
</style>