<template>
  <div id="login" class="login row">
    <div id="form" class="form mx-auto">
      <img src="" alt="">
      <h3>LOG IN</h3>
        <label for="email">Email</label>
        <input v-model="email" name="email" type="email" placeHolder="Enter your Email" class="form-control w-50 mx-auto">
        <br>
        <input v-model="password" name="password" type="text" placeHolder=" Password" class="form-control w-50 mx-auto">
        <button class="mt-2 btn btn-primary" @submit="preventDefault" @click="checkInfo">Login</button>
        <div v-if="$store.state.user">
            logged in {{$store.state.user.email}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
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
  max-width: 400px;
  border: hidden;
  border-radius: 10%;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>