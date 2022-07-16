<template>
  <div id="register-page" class="register">
    <div class="container vh-100 d-flex justify-content-center align-items-center flex-column">
        <form @submit.prevent v-if="!$store.state.user" autocomplete="off" class="form w-100">
          <img id="register--image" class="my-3" src="../assets/register_image.jpg" alt="registerImage">
          <h3>REGISTER NOW!!!</h3>
          <div id="inputRow" class="row mx-auto">
            <div class="col-md-6">
              <input v-model="name" name="name" type="text" placeHolder="Enter your First Name" class="form-control w-100 mx-auto my-4">
              <input v-model="surname" name="surname" type="text" placeHolder="Enter your Last Name" class="form-control w-100 mx-auto my-4">
            </div>
            <div class="col-md-6">
              <input required v-model="email" name="email" type="text" placeHolder="Enter your Email" class="form-control w-100 mx-auto my-4">
              <input required v-model="password" name="password" type="text" placeHolder="Enter your Password" class="form-control w-100 mx-auto my-4">
            </div>
            
          </div>
            <button class="btn my-3" type="submit" @click="displayInfo">Register</button>
            <div v-if='duplicateUser'>
              <p>Sorry there's already an account with that email</p>
            </div>
        </form>
        <div v-else class="h-100 d-flex justify-content-center align-items-center flex-column">
          <h3 class="display-3">Welcome to Just Like Magic</h3><br><h3 class="display-3"> {{$store.state.user.firstName}} {{$store.state.user.surname}}</h3>
        </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
export default {
  components:{Footer},
  data(){
    return{
      name: null,
      surname: null,
      email:null,
      password:null,
      isAdmin:false,
    }
  },
  methods:{
    async displayInfo(){
      if(this.email == null || this.password==null){
        return;
      }else{
        this.$store.dispatch('registerUser',[this.name,this.surname,this.email,this.password,this.isAdmin]);
      }
    }
  },
  computed:{
    duplicateUser(){
      
      return this.$store.state.duplicateUser
    }
  }
}
</script>

<style scoped>
div.container{
  padding-top:0rem ;
  padding-right:1rem;
  padding-left:1rem;
}

.form{
  padding-top: 70px;
}
#register-page{
  background: linear-gradient(lightgrey,#28D084);
  padding-bottom: 1.45rem;
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
  background-color: rgb(245, 245, 245);
}
button{
  width: 100px !important;
  border-radius: 20px !important;
  background-color: #149e60!important;
  color: white;
  border: 1px solid black;
}

#inputRow{
  width:50%;
}

@media screen and (max-width:767px) {
  #register-page{
    padding-bottom: 10rem;
  }
  div.container{
    padding-top:12rem ;
  }
  #inputRow{
  width:100%;
  }
}
@media screen and (min-width:768px) and (max-width:991px) {
  #register-page{
    padding-bottom: 9rem;
  }
  #inputRow{
  width:100%;
  }
}
</style>