<template>
  <div id="register-page" class="register">
    <div class="container">
        <div class="form">
          <img id="register--image" class="my-3" src="../assets/register_image.jpg" alt="">
          <h3>REGISTER NOW!!!</h3>
            <input v-model="name" name="name" type="text" placeHolder="Enter your First Name" class="form-control w-50 mx-auto my-4">
            <input v-model="surname" name="surname" type="text" placeHolder="Enter your Last Name" class="form-control w-50 mx-auto my-4">
            <input v-model="email" name="email" type="email" placeHolder="Enter your Email" class="form-control w-50 mx-auto my-4">
            <input v-model="password" name="password" type="text" placeHolder="Enter your Password" class="form-control w-50 mx-auto my-4">
            <button class="btn btn-primary my-3" @submit="preventDefault" @click="displayInfo">Register</button>
        </div>
        <div v-if="$store.state.user">
          Hello
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      name: null,
      surname: null,
      email:null,
      password:null,
    }
  },
  methods:{
    displayInfo(){
      this.$store.dispatch('registerUser',[this.name,this.surname,this.email,this.password]);
    }
  }
}
</script>

<style scoped>

.form{
  padding-top: 30px;
}
#register-page{
  background-color: white;
  overflow-y: hidden;
}
#register--image{
  border: solid #28D084;
  border-radius: 50%;
  box-shadow: 0vw 0vw 1vw #28D084;
  width: 150px;
  height: 150px;
  object-fit: cover;
}
input{
  border-top: hidden  !important;
  border-left: hidden  !important;
  border-right: hidden  !important;
  border-bottom: solid!important;
  max-width: 400px;
}
button{
  width: 100px !important;
  border-radius: 20px !important;
  background-color: #28D084!important;
  border: hidden!important;
}
</style>