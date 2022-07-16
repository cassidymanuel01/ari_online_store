<template>
  <div class="AllProperties">
    <div id="allItemsContainer" v-if="albums">
      <div class="wrapper mt-5 mx-auto">
        <a href="#albumsContainer">
          <div class="imgContainer">
            <img class="img-fluid" src="https://pbs.twimg.com/media/FFuVnvyWUAoiKMO.jpg:large" alt="Albums"/>
            <div class="onHover">
              <div class="row">
                <div class="col-md-12">
                  <span id="hoverInfo">Albums</span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#makeupContainer">
          <div class="imgContainer">
            <img class="img-fluid" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F11%2F03%2Frem-beauty.jpg" alt="Makeup" />
            <div class="onHover">
              <div class="row">
                <div class="col-md-12">
                  <span id="hoverInfo">Makeup</span>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#fragranceContainer">
          <div class="imgContainer">
            <img class="img-fluid" src="https://vioralondon.com/wp-content/uploads/2020/10/Best-Ariana-Grande-Perfumes-Reviewed-image.jpg" alt="Fragrances"/>
            <div class="onHover">
              <div class="row">
                  <div class="col-md-12">
                    <span id="hoverInfo">Fragrances</span>
                  </div>
                </div>
              </div>
            </div>
        </a>
      </div>
    <div class="display-5 text-center p-5 h-50">Search</div>
      <div class="d-flex justify-content-center align-items-center h-50 p-5" role="search">
        <input class="form-control me-2 w-50" type="search" v-model="search" placeholder="Search..." />
        <button @click="sortPrice" class="btn btn-outline-dark" type="submit" >
          Sort By Price
        </button>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-md-12 d-flex justify-content-center align-content-center">
            <h2 id="albumsContainer" class="display-5">View our albums</h2>
          </div>
        </div>
        <div class="row my-5 pb-5">
          <div
            v-for="album in albums.filter((x) => {return x.category=='Album'})"
            :key="album.id"
            class="col-md-4">
            <router-link
              class="m-0 p-0"
              style="text-decoration: none; color: inherit"
              :to="{
                name: 'single',
                params: { id: album.id },
                props: [album.id, album.category],
              }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div id="titles" class="col-6 ps-2 pt-3">
                    <h6>{{ album.subtitle }}</h6>
                    <h5 style="height: 48px" class="fw-bold">{{ album.title }}</h5>
                  </div>
                </div>
                <img
                  class="px-3 img-fluid"
                  :src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> R{{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row my-5">
          <div class="col-md-12 d-flex flex-column justify-content-center align-content-center">
            <h2 id="makeupContainer" class="display-5">View our Makeup</h2>
            <h3 class="display-6">Chapter 1</h3>
          </div>
        </div>
        <div class="row my-5 pb-4">
          <div
            v-for="album in albums.filter((x) => {
              return x.chapter == 1;
            })"
            :key="album.id"
            class="col-md-4"
          >
            <router-link
              class="m-0 p-0"
              style="text-decoration: none; color: inherit"
              :to="{ name: 'single', params: { id: album.id } }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div id="titles" class="col-6 ps-3 pt-3 d-flex flex-column justify-content-center align-items-start" >
                    <h6>{{ album.subtitle }}</h6>
                    <h5 style="height: 48px">{{ album.title }}</h5>
                  </div>
                </div>
                <img
                  class="px-3 img-fluid"
                  :src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> R{{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row my-5 py-3">
          <div
            class="col-md-12 d-flex flex-column justify-content-center align-content-center"
          >
            <h3 class="display-6">Chapter 2</h3>
          </div>
        </div>
        <div class="row my-5 pb-4">
          <div v-for="album in albums.filter((x) => {return x.chapter==2})" :key="album.id" class="col-md-4">
            <router-link
              class="m-0 p-0" 
              style="text-decoration: none; color: inherit "
              :to="{ name: 'single', params: { id: album.id } }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div
                    id="titles"
                    class="col-6 ps-3 pt-3 d-flex flex-column justify-content-center align-items-start"
                  >
                    <h6>{{ album.subtitle }}</h6>
                    <h5 style="height: 48px">{{ album.title }}</h5>
                  </div>
                </div>
                <img
                  class="px-3 img-fluid"
                  :src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> R{{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row my-5 pt-5">
          <div
            class="col-md-12 d-flex flex-column justify-content-center align-content-center"
          >
            <h3 class="display-6">Chapter 3</h3>
          </div>
        </div>
        <div class="row my-5 pb-5">
          <div
            v-for="album in albums.filter((x) => {
              return x.chapter == 3;
            })"
            :key="album.id"
            class="col-md-4"
          >
            <router-link
              class="m-0 p-0"
              style="text-decoration: none; color: inherit"
              :to="{ name: 'single', params: { id: album.id } }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div
                    id="titles"
                    class="col-6 ps-3 pt-3 d-flex flex-column justify-content-center align-items-start"
                  >
                    <h6>{{ album.subtitle }}</h6>
                    <h5 style="height: 48px">{{ album.title }}</h5>
                  </div>
                </div>
                <img
                  class="px-3 img-fluid"
                  :src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> R{{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row my-5 pt-4">
          <div class="col-md-12 d-flex flex-column justify-content-center align-content-center">
            <h2 id="fragranceContainer" class="display-5">View our Fragrances</h2>
          </div>
        </div>
        <div class="row mt-5 pb-5">
          <div
            v-for="album in albums.filter((x) => {
              return x.category == 'Fragrance';
            })"
            :key="album.id"
            class="col-md-4"
          >
            <router-link
              class="m-0 p-0"
              style="text-decoration: none; color: inherit"
              :to="{ name: 'single', params: { id: album.id } }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div
                    id="titles"
                    class="col-6 ps-3 pt-3 d-flex flex-column justify-content-center align-items-start"
                  >
                    <h6>{{ album.subtitle }}</h6>
                    <h5 style="height: 48px">{{ album.title }}</h5>
                  </div>
                </div>
                <img
                  class="p-3 img-fluid"
                  :src="album.coverImage"
                  alt="Makeup"
                />
                <div class="row mx-auto">
                  <div class="col-md-12 d-flex justify-content-end w-100">
                    <button id="cartButton" class="px-2 py-1 mb-3 me-2">
                      <i class="bi bi-cart pe-1"></i> R{{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    <div v-else class="vh-100">
      <div class="container d-flex justify-content-center align-items-center h-100">
        <div class="loader"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  data() {
    return {
      search: "",
      All:"",
      sortByPrice: false
    };
  },
  methods: {
    sortPrice() {
      this.sortByPrice = !this.sortByPrice;
      // this.$store.commit("sortPropertiesByPrice");
    },
  },
  components: { Footer },
  mounted() {
    this.$store.dispatch("getAlbums");
  },
  computed: {
    albums() {
      if(!this.sortByPrice){
        this.$store.state.albums?.reverse();
        return this.$store.state.albums?.filter((album) => {
          let isMatch = true;
          if (!album.title?.toLowerCase().includes(this.search.toLowerCase())) {
            isMatch = false;
          }
          return isMatch;
        });
      }else{
        return this.$store.state.albums?.sort((a,b) => {
          return a.price - b.price;
        });
      }
    },
    user() {
      return this.$store.state.user;
    },
  }
};
</script>

<style scoped>

*{
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

.loader{
  border: 16px solid black;
  border-top: 16px solid #28d084;
  border-bottom: 16px solid grey;
  border-radius: 50%;
  height: 120px;
  width:120px ;
  animation: rotate 2s linear infinite;
}

@keyframes rotate {
  0%{transform: rotate(0deg);}
  100%{transform: rotate(360deg);}
}

#allItemsContainer{
  background: linear-gradient(#20a76a,#81d084d5);
}

#albumsContainer,#makeupContainer,#fragranceContainer{
  scroll-margin-top: 100px;
}

div.container{
  padding-right:1rem;
  padding-left:1rem;
}

@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");

div.container{
  padding-right:2rem;
  padding-left:2rem;
}

.itemContainer:hover img {
  transform: translate(0px, -20px);
}
.itemContainer img {
  transition: all 1s ease;
}

.wrapper {
  padding-top: 2.35rem !important;
  display: flex;
  width: 100%;
}
.wrapper > a > div {
  height: 89vh;
}
.wrapper > a > div img {
  height: 89vh;
  object-fit: cover;
}
@media screen and (max-width: 769px) {
  .wrapper {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
  .wrapper > a > div {
    height: 45vh;
  }
  .wrapper > a > div img {
    height: 45vh;
    object-fit: cover;
  }
}

* {
  margin: 0;
  padding: 0;
  font-family: "Nunito", sans-serif;
}

#cartButton {
  border: 1px solid white;
  background-color: transparent;
  transition: background-color 0.3s ease;
}

#cartButton:hover {
  background-color: white;
}

#titles h6 {
  font-style: italic;
}
#hoverInfo {
  font-size: 24px;
  color: black;
}
.col-md-4 {
  margin: 0;
  padding: 0;
  
}
#albumImage {
  width: 100%;
}

#hoverInfo {
  font-size: 24px;
}

.imgContainer {
  overflow: hidden;
  position: relative;
}

.imgContainer:hover img {
  transform: scale(1.1);
}

.imgContainer img {
  transition: all 1s ease;
}

.itemContainer {
  background-color: rgb(149 163 151);
  border-radius: 15px;
  margin: 1px;
  border: 5px solid white;
}
.onHover {
  /* background-color: rgba(95, 95, 95, 0.2); */
  color: white;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  opacity: 0;
  transition: all 0.3s linear;
}

.imgContainer:hover .onHover {
  opacity: 1;
}

.btn{
  width: 9%;
}
</style>
