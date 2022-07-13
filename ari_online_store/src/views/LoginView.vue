<template>
  <div class="login">
    <div class="form">
        <label for="email">Email</label>
        <input v-model="email" name="email" type="email" placeHolder="Enter your Email" class="form-control w-50 mx-auto">
        <label for="password">Password</label>
        <input v-model="password" name="password" type="text" placeHolder="Enter your Password" class="form-control w-50 mx-auto">
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

<style>

</style>