<template>
  <div class="userAdmin">
    <div v-if="users">
        <div id="userContainer" class="container d-flex flex-column gap-3 justify-content-start align-items-center">
            <div>
                <router-link to="/admin"><button class="btn">Back To Admin Page</button></router-link>
            </div>
            <div>
                <h1>All Users</h1>
            </div>
            <table class="table table-dark table-striped table-hover">
                <thead class="table">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First Name</th>
                    <th scope="col">Surname</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <th scope="row">{{user.id}}</th>
                        <th scope="row">{{user.firstName}}</th>
                        <th scope="row">{{user.surname}}</th>
                        <th scope="row">{{user.email}}</th>
                        <th scope="row">{{user.password}}</th>
                        <th scope="row"><button v-if="!user.isAdmin" @click="deleteUser(user.id)">delete</button></th>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="d-flex justify-content-center align-items-center vh-100" v-else>
        <div class="loader"></div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/footer.vue'
export default {
    components:{Footer},
    mounted(){
        this.$store.dispatch('getAllUsers');
    },
    computed:{
        users(){
            return this.$store.state.allUsers;
        }
    },
    methods:{
        deleteUser(id){
            this.$store.dispatch('deleteUserWithoutLogOut',id)
        }
    }
}
</script>

<style scoped>
.loader{
  border: 16px solid black;
  border-top: 16px solid #28d084;
  border-bottom: 16px solid grey;
  border-radius: 50%;
  height: 120px;
  width:120px ;
  animation: rotate 2s linear infinite;
}

.userAdmin{
    background: linear-gradient(#20a76a,#81d084d5);
}

#userContainer{
    height: 104vh;
    /* padding-bottom: 5rem; */
}
button{
  width: 250px !important;
  border-radius: 10px !important;
  background-color: rgb(90, 90, 90)!important;
  color: white;
  border: 2px solid black;
}

@media screen and (max-width: 769px) {
  tr {
    display: flex;
    flex-direction: column;
  }
  #userContainer{
    height: initial !important;
  }
}

@keyframes rotate {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}
</style>