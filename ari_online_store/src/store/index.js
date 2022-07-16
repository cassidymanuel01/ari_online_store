import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    albums: null,
    singleAlbum: null,
    user: null,
    noUser: false,
    duplicateUser: false,
    cart:null,
    asc: true,
  },
  getters: {
    // getSingleAlbum(state,id){
    //   return state.albums.find((x) =>{
    //     return x==id;
    //   })
    // }
  },
  mutations: {
    setAlbums(state, albums) {
      state.albums = albums
    },
    setSingleAlbum(state, singleAlbum) {
      state.singleAlbum = singleAlbum
    },
    signIn(state,user){
      state.user = user
    },
    setCart(state,data){
      state.cart = data
    },
    noUser(state,value){
      state.noUser = value
    },
    logOut(state){
      state.user = null
    },
    duplicateUser(state,value){
      state.duplicateUser = value;
    },
    sortPropertiesByPrice: (state) => {
      state.propperties.sort((a, b) => {
        return a.price - b - price;
      });
      if (!state.asc) {
        state.properties.reverse();
      }
      state.asc = !state.asc
    }
  },
  actions: {
    getAlbums(context) {
      fetch('http://localhost:3000/allInfo')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setAlbums', data)
        });
    },
    getSingleAlbum(context, id) {
      fetch('http://localhost:3000/allInfo/' + id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setSingleAlbum', data)
        });
    },
    registerUser(context, [firstName, surname, email, password,isAdmin]) {
      fetch('http://localhost:3000/users?email='+email)
      .then((res) => res.json())
      .then((data) => {
        if(data.length > 0){
          context.commit('duplicateUser',true);
        }else{
          fetch('http://localhost:3000/users', {
            method: 'POST',
              body: JSON.stringify({
                firstName: firstName,
                surname: surname,
                email: email,
                password: password,
                isAdmin:isAdmin
              }),
              headers: {
                'Content-type': 'application/json; charset=UTF-8',
              },
            })
            .then((res) => res.json())
            .then((data) => {
            context.commit('signIn', data);
            }) 
            }
          })
        },
    checkSignIn(context, [email, password]) {
      fetch(`http://localhost:3000/users?email=${email}&password=${password}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.length == 0) {
            context.commit('noUser',true);
          } else {
            context.commit('signIn', data[0]);
          }
        })
    },
    setNoUser(context){
      context.commit('noUser',false);
    },
    logOut(context){
      context.commit('logOut')
    },
    deleteUser(context) {
      fetch('http://localhost:3000/users/' + context.state.user.id, {
          method: 'Delete'
        })
        .then(() => context.dispatch('logOut'))
    },
    editUser(context,user){
      fetch('http://localhost:3000/users/' + user.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: user.firstName,
            surname: user.surname,
            email: user.email,
            password: user.password,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('checkSignIn',[user.email,user.password]))
    },
    deleteItem(context, id) {
      fetch('http://localhost:3000/allInfo/' + id, {
          method: 'Delete'
        })
        .then(() => context.dispatch('getAlbums'))
    },
    removeFromCart(context, id) {
      fetch('http://localhost:3000/cart/' + id, {
          method: 'Delete'
        })
        .then(() => context.dispatch('getCart'))
    },
    addAlbumItem(context, [title, subtitle, image, coverImage, price, songAmount, newCategory,tracklist]) {
      fetch('http://localhost:3000/allInfo', {
          method: 'POST',
          body: JSON.stringify({
            img: image,
            coverImage: coverImage,
            title: title,
            price: price,
            subtitle: subtitle,
            songAmount: songAmount,
            category: newCategory,
            songList: tracklist
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    addMakeupItem(context, [title, subtitle, image, coverImage, price, description, newCategory, newChapter]) {
      fetch('http://localhost:3000/allInfo', {
          method: 'POST',
          body: JSON.stringify({
            img: image,
            coverImage: coverImage,
            title: title,
            price: price,
            subtitle: subtitle,
            description: description,
            chapter: newChapter,
            category: newCategory
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    addFragranceItem(context, [title, subtitle, image, coverImage, price, description, newCategory]) {
      fetch('http://localhost:3000/allInfo', {
          method: 'POST',
          body: JSON.stringify({
            img: image,
            coverImage: coverImage,
            title: title,
            price: price,
            subtitle: subtitle,
            description: description,
            category: newCategory
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    editItem(context, item) {
      fetch('http://localhost:3000/allInfo/' + item.id, {
          method: 'PUT',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            songAmount: item.songAmount,
            category: item.category
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    editMakeupItem(context, item) {
      fetch('http://localhost:3000/allInfo/' + item.id, {
          method: 'PUT',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            description: item.description,
            category: item.category,
            chapter: item.chapter
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    editFragranceItem(context, item) {
      fetch('http://localhost:3000/allInfo/' + item.id, {
          method: 'PUT',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            description: item.description,
            category: item.category
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getAlbums'))
    },
    addAlbumToCart(context, item) {
      fetch('http://localhost:3000/cart', {
          method: 'POST',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            songAmount: item.songAmount,
            category: item.newCategory
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.dispatch('getCart'))
    },
    addMakeupToCart(context, item) {
      fetch('http://localhost:3000/cart', {
          method: 'POST',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            description: item.description,
            chapter: item.newChapter,
            category: item.newCategory
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.commit('setCart'))
    },
    addFragranceToCart(context, item) {
      fetch('http://localhost:3000/cart', {
          method: 'POST',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            description: item.description,
            category: item.newCategory
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then(() => context.commit('setCart'))
    },
    getCart(context) {
      fetch('http://localhost:3000/cart')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setCart', data)
        });
    },
  },
  modules: {}
})