<template>
  <div class="singleItem pt-5">
    <div id="singleInfoContainer" v-if="singleInfo">
        <div v-if="singleInfo.category == 'Album'" class="container h-100 mx-auto my-auto pt-2 d-flex justify-content-center flex-column px-2">
        <div class="row mb-5 pb-2">
          <div class="col-lg-6">
            <img
              class="img-fluid w-100 shadow shadow-lg"
              :src="singleInfo.img"
              :alt="singleInfo.title"
            />
          </div>
          <div class="thing py-2 col-lg-6 border border-1 border-dark shadow shadow-lg d-flex flex-column justify-content-evenly align-items-center">
            <div class="row w-100">
              <div class="col-md-12 d-flex justify-content-end align-items-center">
                <img src="../assets/Vinyl.webp" id="Vinyl" class="img-fluid" alt="Vinyl">
              </div>
            </div>
            <div class="row w-100 h-100">
              <div class="col-md-12 d-flex justify-content-evenly align-items-center flex-column">
                <h1 class="text-center fw-bold pb-1">{{ singleInfo.title }}</h1>
                <h6 class="fw-bold text-center">{{ singleInfo.subtitle }}</h6>
                <div class="row py-3">
                  <h4 class="fw-bold text-center tracklist">Tracklist:</h4>
                  <div class="d-flex" v-if="singleInfo.songList !=undefined">
                    <div id="slist" class="col-md-6">
                      <ol>
                        <li style="text-align:start;" v-for="song in singleSongInfo.slice(0, singleSongInfo.length/2)" :key="song" > -{{ song }}</li>
                      </ol>
                    </div>
                    <div id="slist" class="col-md-6">
                      <ol :start="singleSongInfo.length/2+1">
                        <li style="text-align:start;" v-for="song in singleSongInfo.slice(Math.ceil(singleSongInfo.length/2),singleSongInfo.length)" :key="song" > -{{ song }}</li>
                      </ol>
                    </div>
                  </div>
                </div>
                <div class="ratingsHolder d-flex justify-content-center align-items-center gap-2 pb-2">
                  <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                  <div>
                    <span class="fs-5 fw-bold">45+ ratings</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button id="cartButton" @click="addAlbumToCart(singleInfo)" class="py-2 px-1 fw-bold">
                      <i id="cartIcon" class="bi bi-cart"></i> Add to cart - R{{singleInfo.price}}
                    </button>  
                  </div>
                  <span class="p-0" id="write">Added</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div v-if="singleInfo.category == 'Makeup'" class="container h-100 mx-auto pt-2 d-flex justify-content-center flex-column px-2">
        <div class="row mb-5 pb-2">
          <div style="border-radius:20px" id="image" class="col-md-6 shadow shadow-lg">
            <img
              class="img-fluid w-100 h-100 d-flex flex-column justify-content-center"
              :src="singleInfo.img"
              :alt="singleInfo.title"
            />
          </div>
          <div id="makeupThing" class="thing col-md-6 border border-1 border-dark shadow shadow-lg">
            <div class="row h-100 w-100">
              <div class="col-md-12 h-100 w-100 d-flex flex-column justify-content-evenly align-items-center">
                <div>
                  <h1 class="fs-1 text-center fw-bold pb-1">{{ singleInfo.title }}</h1>
                  <h6 class="fs-1 fw-bold text-center">{{ singleInfo.subtitle }}</h6>
                </div>
                <div>
                  <h5 class="fs-4 fw-bold text-center fst-italic"> "{{singleInfo.description}}" </h5>
                </div>
                <div
                >
                  <div>
                    <i class="fa-2x bi bi-star-fill"></i>
                    <i class="fa-2x bi bi-star-fill"></i>
                    <i class="fa-2x bi bi-star-fill"></i>
                    <i class="fa-2x bi bi-star-fill"></i>
                    <i class="fa-2x bi bi-star"></i>
                  </div>
                  <div>
                    <span class="fs-4 fw-bold">90+ ratings</span>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button id="cartButton" @click="addMakeupToCart(singleInfo)" class="py-2 px-1 fw-bold">
                      <i id="cartIcon" class="bi bi-cart"></i> Add to cart - R{{singleInfo.price}}
                    </button>  
                  </div>
                  <span class="p-0" id="write">Added</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div v-if="singleInfo.category == 'Fragrance'" class="container h-100 mx-auto pt-2 d-flex justify-content-center flex-column px-2">
        <div class="row mb-5 pb-2">
          <div style="border-radius:20px" id="image" class="col-md-6 shadow shadow-lg">
            <img
              class="img-fluid w-100 h-100 d-flex flex-column justify-content-center"
              :src="singleInfo.img"
              :alt="singleInfo.title"
            />
          </div>
          <div class="thing col-md-6 border border-1 border-dark shadow shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div class="row h-100 w-100">
              <div class="col-md-12 h-100 w-100 d-flex flex-column justify-content-evenly align-items-center">
                <div>
                  <h1 class="text-center fw-bold pb-1">{{ singleInfo.title }}</h1>
                  <h6 class="fw-bold text-center">{{ singleInfo.subtitle }}</h6>  
                </div>
                <div>
                  <div>
                    <h5 class="fs-4 fw-bold text-center fst-italic"> "{{singleInfo.description}}" </h5>
                  </div>
                </div>
                <div class="d-flex justify-content-center align-item-center flex-column gap-3">
                  <div>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star-fill"></i>
                    <i class="bi bi-star"></i>
                  </div>
                    <span class="fs-5 fw-bold">45+ ratings</span>
                  </div>
                <div class="row">
                  <div class="col-md-12">
                    <button id="cartButton" @click="addFragranceToCart(singleInfo)" class="py-2 px-1 fw-bold">
                      <i id="cartIcon" class="bi bi-cart"></i> Add to cart - R{{singleInfo.price}}
                    </button>  
                  </div>
                  <span class="p-0" id="write">Added</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
    <div v-else>loading...</div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/footer.vue";
export default {
  components: { Footer },
  mounted() {
    this.$store.dispatch("getSingleAlbum", this.$route.params.id);
  },
  computed: {
    singleInfo() {
      return this.$store.state.singleAlbum;
    },
    singleSongInfo() {
      return this.$store.state.singleAlbum.songList;
    },
  },
  methods:{
    addAlbumToCart(item){
      this.animations();
      this.$store.dispatch('addAlbumToCart',item);
    },
    addMakeupToCart(item){
      this.animations();
      this.$store.dispatch('addMakeupToCart',item)
    },
    addFragranceToCart(item){
      this.animations();
      this.$store.dispatch('addFragranceToCart',item)
    },
    animations(){
      if(document.getElementById('cartIcon') != null){
        document.getElementById('cartIcon').classList.add('cartAnimation');
        setTimeout(() =>{
          document.getElementById('cartIcon').classList.remove('cartAnimation')
        },500);
      }
      if(document.getElementById('Vinyl') != null){
        document.getElementById('Vinyl').classList.add('rotate');
        setTimeout(() =>{
          document.getElementById('Vinyl').classList.remove('rotate')
        },1500);
      }
      if(document.getElementById('write') !=null){
        document.getElementById('write').classList.add('write');
        setTimeout(() =>{
          document.getElementById('write').classList.remove('write')
        },1000);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");

#write{
  width: 1px;
  overflow-x:hidden;
}

.write{
  animation: write 1s linear;
}

@keyframes write {
  0%{width: 1px;}
  40%{width: 50px;}
  100%{width: 50px;}
}

* {
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
}
#image img {
  animation: hover 3.5s ease-in-out infinite;
  padding: 3rem;
}

@keyframes hover  {
  0%{transform: translate(0px, -30px);}
  50%{transform: translate(0px, 30px);}
  100%{transform: translate(0px, -30px);}
}

@keyframes rotate {
  0%{transform:rotate(0deg) ;}
  16%{transform:rotate(270deg) ;}
  32%{transform:rotate(360deg) ;}
  48%{transform:rotate(270deg) ;}
  64%{transform:rotate(360deg) ;}
  80%{transform:rotate(270deg) ;}
  96%{transform:rotate(0deg) ;}
  100%{transform:rotate(0deg) ;}
}

h1 {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#singleInfoContainer{
  height: 98vh;
}

.thing{
  border-radius: 20px;
  background-color:white;
}

.singleItem{
  background: linear-gradient(lightgrey,#28D084);
}

.img-fluid {
  border-radius: 20px;
}

p {
  font-size: 18px;
}

#Vinyl{
  width:100px;
}

.bi.bi-star-fill {
  color: gold;
}

.bi.bi-cart::before{
  margin-right: 3px;
}

.cartAnimation::before{
  animation: cart 0.5s linear;
}

@keyframes cart {
  0%{transform:rotate(0deg);}
  50%{transform:rotate(-35deg);}
  100%{transform:rotate(0deg);}
}

#cartButton {
  border: 1px solid black;
  background-color: transparent;
  transition: background-color 0.3s ease;
  width: 250px;
}

#cartButton:hover {
  background-color: black;
  color: white;
  border: white;
}

.rotate{
  animation: rotate 1.5s linear;
}

@media screen and (max-width:991px){
  #Vinyl{
    display: none;
    }
}
@media screen and (min-width:992px) and (max-width:1199px){
  #Vinyl{
    width: 65px;
  }
  .thing{
    height: 448px;
  }
  #makeupThing{
    height: 523px;
  }
}

@media screen and (min-width:1200px) {
  .tracklist{
    padding-bottom: 1.5rem;
  }
}
</style>
