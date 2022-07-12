import { createStore } from 'vuex'

export default createStore({
  state: {
    albums: null
  },
  getters: {

  },
  mutations: {
    setAlbums(state, albums){
      state.albums = albums
    }
  },
  actions: {
    getProperties(context){
      fetch('http://localhost:3000/albums')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        context.commit('setAlbums', data)
      });
      // console.log(context.state.albums);
    }
  },
  modules: {
  }
})
