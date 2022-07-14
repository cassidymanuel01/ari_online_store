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
    setSingleAlbum(state, singleAlbum){
      state.singleAlbum = singleAlbum
    },
    signIn(state,user){
      localStorage.clear();
      localStorage.setItem('user',JSON.stringify(user));
      state.user = user
    }
  },
  actions: {
    getAlbums(context){
      fetch('http://localhost:3000/allInfo')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit('setAlbums', data)
      });
    },
    getSingleAlbum(context,id){
      fetch('http://localhost:3000/allInfo/' +id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit('setSingleAlbum', data)
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
    },
    deleteItem(context,id){
      fetch('http://localhost:3000/allInfo/' + id, {
        method:'Delete'
      })
      .then(() => context.dispatch('getAlbums'))
    },
    addAlbumItem(context,[title,subtitle,image,coverImage,price,songAmount,newCategory]){
      fetch('http://localhost:3000/allInfo', {
        method:'POST',
        body:JSON.stringify({
          img: image,
          coverImage: coverImage,
          title: title,
          price: price,
          subtitle: subtitle,
          songAmount: songAmount,
          category: newCategory
        }),
        headers:{
          'Content-type' : 'application/json; charset=UTF-8'
        },
      })
      .then(() => context.dispatch('getAlbums'))
    },
    addMakeupItem(context,[title,subtitle,image,coverImage,price,description,newCategory,newChapter]){
      fetch('http://localhost:3000/allInfo', {
        method:'POST',
        body:JSON.stringify({
          img: image,
          coverImage: coverImage,
          title: title,
          price: price,
          subtitle: subtitle,
          description: description,
          chapter: newChapter,
          category: newCategory
        }),
        headers:{
          'Content-type' : 'application/json; charset=UTF-8'
        },
      })
      .then(() => context.dispatch('getAlbums'))
    },
    addFragranceItem(context,[title,subtitle,image,coverImage,price,description,newCategory]){
      fetch('http://localhost:3000/allInfo', {
        method:'POST',
        body:JSON.stringify({
          img: image,
          coverImage: coverImage,
          title: title,
          price: price,
          subtitle: subtitle,
          description: description,
          category: newCategory
        }),
        headers:{
          'Content-type' : 'application/json; charset=UTF-8'
        },
      })
      .then(() => context.dispatch('getAlbums'))
    },
    editItem(context,item){
      fetch('http://localhost:3000/allInfo/' + item.id, {
        method:'PUT',
        body:JSON.stringify({
          img: item.img,
          coverImage: item.coverImage,
          title: item.title,
          price: item.price,
          releaseYear: item.releaseYear,
          songAmount: item.songAmount

        }),
        headers:{
          'Content-type' : 'application/json; charset=UTF-8'
        },
      })
      .then(() => context.dispatch('getAlbums'))
    }
  },
  modules: {
  }
})


