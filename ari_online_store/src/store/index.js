import { createStore } from 'vuex'

export default createStore({
  state: {
    albums: null,
    singleAlbum: null,
    user:null
  },
  getters: {
    // getSingleAlbum(state,id){
    //   return state.albums.find((x) =>{
    //     return x==id;
    //   })
    // }
  },
  mutations: {
    setAlbums(state, albums){
      state.albums = albums
    },
    signIn(state,user){
      state.user = user
    }
  },
  actions: {
    getAlbums(context){
      fetch('http://localhost:3000/albums')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit('setAlbums', data)
      });
    },
    getSingleAlbum(context,id){
      fetch('http://localhost:3000/albums/' +id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit('setAlbums', data)
      });
    },
    registerUser(context,[firstName,surname,email,password]){
      fetch('http://localhost:3000/users', {
        method:'POST',
        body: JSON.stringify({
          firstName : firstName,
          surname: surname,
          email:email,
          password:password
        }),
        headers:{
          'Content-type' : 'application/json; charset=UTF-8',
        },
      })
      .then((res) => res.json())
      .then((data) => context.commit('signIn',data));
    },
    checkSignIn(context,[email,password]){
      fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
      .then((res) => res.json())
      .then((data) => {
        if(data.length ==0){
          console.log("No user")
        }else{
          context.commit('signIn',data);
        }
      })
    }
  },
  modules: {
  }
})
