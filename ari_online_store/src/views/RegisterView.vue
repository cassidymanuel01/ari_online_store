<template>
  <div class="register">
    <div class="container">
        <div class="form">
            <label for="name">Name</label>
            <input v-model="name" name="name" type="text" placeHolder="Enter your First Name" class="form-control w-50 mx-auto">
            <label for="surname">Surname</label>
            <input v-model="surname" name="surname" type="text" placeHolder="Enter your Last Name" class="form-control w-50 mx-auto">
            <label for="email">Email</label>
            <input v-model="email" name="email" type="email" placeHolder="Enter your Email" class="form-control w-50 mx-auto">
            <label for="password">Password</label>
            <input v-model="password" name="password" type="text" placeHolder="Enter your Password" class="form-control w-50 mx-auto">
            <button class="btn btn-primary" @submit="preventDefault" @click="displayInfo">Register</button>
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

<style>

</style>