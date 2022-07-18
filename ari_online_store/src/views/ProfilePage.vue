<template>
  <div class="profilePage">
    <div v-if="user">
        <div class="container d-flex justify-content-center align-items-center vh-100">
            <div class="row w-100">
                <div class="col-md-5 my-auto flex-column d-flex align-items-center justify-content-between">
                    <i id="userIcon" class="bi bi-person-circle"></i>
                    <router-link to="/login">
                    <button @click="logOut()" class="btn btn-primary">Log Out</button></router-link>
                    <router-link v-if="!user.isAdmin" to="/login">
                    <button @click="deleteUser()" class="btn btn-danger">Delete Account</button></router-link>
                </div>
                <div id="Right" class="my-auto col-md-6">
                    <form class="form" @submit.prevent>
                        <h2>{{user.firstName}} {{user.surname}}</h2>
                        <label for="User First Name"></label>
                        <input id="firstName" @keyup="changeFirstNameColor" class="form-control" v-model="user.firstName" type="text">
                        <label for="User Surname"></label>
                        <input id="surname" @keyup="changeSurnameColor" class="form-control" v-model="user.surname" type="text">
                        <label for="User Email"></label>
                        <input class="form-control" readonly v-model="user.email" type="text">
                        <label for="User Password"></label>
                        <input id="password" @keyup="changePasswordColor" class="form-control" v-model="user.password" type="text">
                        <button id="confirmButton" @click="confirmUserEdit(user)" class="mt-3 btn">Confirm Edit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import Footer from '../components/footer.vue'
export default {
    data(){
        return{
            firstName:null,
            surname:null,
            email:null,
            password:null
        }
        
    },
    async mounted(){
        this.firstName = this.$store.state.user.firstName;
        this.surname = this.$store.state.user.surname;
        this.email = this.$store.state.user.email;
        this.password = this.$store.state.user.password;
    },
    components:{Footer},
    computed:{
        user(){
            return this.$store.state.user;
        }
    },
    methods:{
        async confirmUserEdit(user){
            this.$store.dispatch('editUser',user)
            this.firstName = this.$store.state.user.firstName;
            this.surname = this.$store.state.user.surname;
            this.email = this.$store.state.user.email;
            this.password = this.$store.state.user.password;
            this.changeFirstNameColor();
            this.changeSurnameColor();
            this.changePasswordColor();
        },
        logOut(){
            this.$store.dispatch('logOut');
            this.$store.commit('clearCart');
        },
        deleteUser(user){
            this.$store.dispatch('deleteUser',user);
        },
        changeFirstNameColor(){
            if(this.user.firstName != this.firstName){
                document.getElementById("firstName").style.backgroundColor="#d99";
            }else{
                document.getElementById("firstName").style.backgroundColor="#FFF";
            }
        },
        changeSurnameColor(){
            if(this.user.surname != this.surname){
                document.getElementById("surname").style.backgroundColor="#d99";
            }else{
                document.getElementById("surname").style.backgroundColor="#FFF";
            }
        },
        changePasswordColor(){
            if(this.user.password != this.password){
                document.getElementById("password").style.backgroundColor="#d99";
            }else{
                document.getElementById("password").style.backgroundColor="#FFF";
            }
        }
    }
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");

.profilePage{
  background: linear-gradient(lightgrey,#28D084);
  padding-bottom: 1.45rem;
}

#confirmButton{
  width: 150px !important;
  border-radius: 10px !important;
  background-color: #149e60!important;
  color: white;
  border: 1px solid black;
}
#confirmButton:hover{
  width: 150px !important;
  border-radius: 10px !important;
  background-color: #12774a!important;
}

#Right{
    border-left: 2px solid black;
}

@media screen and (max-width:767px){
    #userIcon{
    font-size:8rem;
    }
    #Right{
    border-left: none;
    }
    .profilePage{
    background: linear-gradient(lightgrey,#28D084);
    padding-bottom: 11rem;
    padding-top: 5rem;
    }
}

input{
color: black;
font-family: 'Nunito', sans-serif;
border: 2px solid #28D084;
font-weight: 500;
}
input::placeholder{
color: black;
font-family: 'Nunito', sans-serif;
border: 2px solid #28D084;
font-weight: 500;
}

#userIcon{
    font-size:10.9rem
}

</style>