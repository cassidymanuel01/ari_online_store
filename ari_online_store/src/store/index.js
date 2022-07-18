import {
  createStore
} from 'vuex'
import { toRaw } from 'vue'

export default createStore({
  state: {
    albums: null,
    singleAlbum: null,
    user: null,
    noUser: false,
    duplicateUser: false,
    cart:null,
    cartTotal:null,
    allUsers:null,
    asc: true,
  },
  getters: {
    
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
    clearCart(state){
      state.cart = null
    },
    setAllUsers(state,allUsers){
      state.allUsers = allUsers
    },
    noUser(state,value){
      state.noUser = value
    },
    logOut(state){
      state.user = null
    },
    totalCalc(state,total){
      state.cartTotal = total
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
    getAllUsers(context) {
      fetch('http://localhost:3000/users')
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          context.commit('setAllUsers', data)
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
                isAdmin:isAdmin,
                cart: []
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
            context.dispatch('getCart');
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
    deleteUserWithoutLogOut(context,id) {
      fetch('http://localhost:3000/users/' + id, {
          method: 'Delete'
        })
        .then(() => context.dispatch('getAllUsers'))
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
      const obj = toRaw(context.state.user.cart)
      console.log(id);
      obj.splice(id-1,1);
      obj.forEach((e,i) => {
        e.id = i+1;
      });
      fetch('http://localhost:3000/users/' + context.state.user.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: context.state.user.firstName,
            surname: context.state.user.surname,
            email: context.state.user.email,
            password: context.state.user.password,
            isAdmin: context.state.user.isAdmin,
            cart: obj
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then((res) => res.json()).then(data => context.dispatch('getCart'));
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
    addMakeupItem(context, [title, subtitle, image, coverImage, price, description, newCategory, newChapter,newType]) {
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
            category: newCategory,
            type: newType
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
    editItem(context, [item,songList]) {
      fetch('http://localhost:3000/allInfo/' + item.id, {
          method: 'PUT',
          body: JSON.stringify({
            img: item.img,
            coverImage: item.coverImage,
            title: item.title,
            price: item.price,
            subtitle: item.subtitle,
            songAmount: item.songAmount,
            category: item.category,
            songList: songList,
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
            chapter: item.chapter,
            type: item.type
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
      
      const obj = toRaw(context.state.user.cart);
      let newObject = {
        id: obj.length+1,
        img: item.img,
        coverImage: item.coverImage,
        title: item.title,
        price: item.price,
        subtitle: item.subtitle,
        songAmount: item.songAmount,
        category: item.Category
      }

      obj.push(newObject);

      fetch('http://localhost:3000/users/' + context.state.user.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: context.state.user.firstName,
            surname: context.state.user.surname,
            email: context.state.user.email,
            password: context.state.user.password,
            isAdmin: context.state.user.isAdmin,
            cart: obj
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then((res) => res.json()).then(() => context.dispatch('getCart'));
    },
    addMakeupToCart(context, item) {
      const obj = toRaw(context.state.user.cart);
      let newObject = {
        id: obj.length+1,
        img: item.img,
        coverImage: item.coverImage,
        title: item.title,
        price: item.price,
        subtitle: item.subtitle,
        description: item.description,
        chapter: item.newChapter,
        category: item.newCategory
      }

      obj.push(newObject);

      fetch('http://localhost:3000/users/' + context.state.user.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: context.state.user.firstName,
            surname: context.state.user.surname,
            email: context.state.user.email,
            password: context.state.user.password,
            isAdmin: context.state.user.isAdmin,
            cart: obj
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then((res) => res.json()).then(() => context.dispatch('getCart'));
    },
    addFragranceToCart(context, item) {
      const obj = toRaw(context.state.user.cart);
      let newObject = {
        id: obj.length+1,
        img: item.img,
        coverImage: item.coverImage,
        title: item.title,
        price: item.price,
        subtitle: item.subtitle,
        description: item.description,
        category: item.newCategory
      }

      obj.push(newObject);

      fetch('http://localhost:3000/users/' + context.state.user.id, {
          method: 'PUT',
          body: JSON.stringify({
            firstName: context.state.user.firstName,
            surname: context.state.user.surname,
            email: context.state.user.email,
            password: context.state.user.password,
            isAdmin: context.state.user.isAdmin,
            cart: obj
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8'
          },
        })
        .then((res) => res.json()).then(() => context.dispatch('getCart'));
    },
    getCart(context) {
      if(!context.state.user) {return};
      fetch('http://localhost:3000/users/'+context.state.user.id)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.cart)
          let total = 0;
          if(data.cart.length >0){
            data.cart.forEach(i => {
              total+=i.price;
            });
          }

          context.commit('totalCalc',total);
          context.commit('setCart', data.cart)
        });
    },
  },
  modules: {}
})