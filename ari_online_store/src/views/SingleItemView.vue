<template>
  <div class="singleItem mt-5 pt-5">
    <div v-if="singleInfo">
        <div v-if="singleInfo.category == 'Album'" class="container mx-auto pt-2 d-flex justify-content-center flex-column px-2">
      <!-- <img src="../assets/Vinyl.webp" id="Vinyl" class="img-fluid" alt="Vinyl"> -->
        <div class="row mb-5 pb-2">
          <div id="image" class="col-md-6">
            <img
              class="img-fluid w-100 h-100 d-flex flex-column justify-content-center shadow shadow-lg"
              :src="singleInfo.img"
              :alt="singleInfo.title"
            />
          </div>
          <div class="thing col-md-6 border border-1 border-dark shadow shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div class="row">
              <div class="col-md-12">
                <h1 class="text-center fw-bold pb-1">{{ singleInfo.title }}</h1>
                <h6 class="fw-bold text-center">{{ singleInfo.subtitle }}</h6>
                <div class="row py-3">
                  <h4 class="fw-bold text-center">Tracklist:</h4>
                  <div id="slist" class="col-md-6">
                    <p
                      v-for="song in singleSongInfo.slice(0, singleSongInfo.length/2)"
                      :key="song[i]"
                    >
                      {{ song }}
                    </p>
                  </div>
                  <div id="slist" class="col-md-6">
                    <p
                      v-for="song in singleSongInfo.slice(singleSongInfo.length/2,singleSongInfo.length)"
                      :key="song[i]"
                    >
                      {{ song }}
                    </p>
                  </div>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center gap-2 pb-2"
                >
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
                <div class="col-md-6 mt-3 mx-auto fs-5 d-flex flex-column justify-content-center align-items-center">
                  <button id="cartButton" class="py-2 px-1 fw-bold">
                    <i class="bi bi-cart"></i> Add to cart - R{{singleInfo.price}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row text-center">
          <div class="col-md-12">
            <h2>Listen to this</h2>
          </div>
        </div> -->
        </div>
        <div v-if="singleInfo.category == 'Makeup'" class="container mx-auto pt-2 d-flex justify-content-center flex-column px-2">
        <div class="row mb-5 pb-2">
          <div id="image" class="col-md-6">
            <img
              class="img-fluid w-100 h-100 d-flex flex-column justify-content-center shadow shadow-lg"
              :src="singleInfo.img"
              :alt="singleInfo.title"
            />
          </div>
          <div class="thing col-md-6 border border-1 border-dark shadow shadow-lg d-flex flex-column justify-content-center align-items-center">
            <div class="row">
              <div class="col-md-12">
                <h1 class="text-center fw-bold pb-1">{{ singleInfo.title }}</h1>
                <h6 class="fw-bold text-center">{{ singleInfo.subtitle }}</h6>
                <div class="py-3">
                  <h4 class="fw-bold text-center">Wear With These</h4>
                  <div class="wrapper">
                    <img v-for="makeup in singleInfo" :key="makeup.id" :src="makeup.img" :alt="makeup.title">
                  </div>
                  <div id="slist" class="col-md-6">
                    <!-- <p
                      v-for="song in singleSongInfo.slice(0, singleSongInfo.length/2)"
                      :key="song[i]"
                    >
                      {{ song }}
                    </p> -->
                  </div>
                  <div id="slist" class="col-md-6">
                    <!-- <p
                      v-for="song in singleSongInfo.slice(singleSongInfo.length/2,singleSongInfo.length)"
                      :key="song[i]"
                    >
                      {{ song }}
                    </p> -->
                  </div>
                </div>
                <div
                  class="d-flex justify-content-center align-items-center gap-2 pb-2"
                >
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
                <div class="col-md-6 mt-3 mx-auto fs-5 d-flex flex-column justify-content-center align-items-center">
                  <button id="cartButton" class="py-2 px-1 fw-bold">
                    <i class="bi bi-cart"></i> Add to cart - R{{singleInfo.price}}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <div class="row text-center">
          <div class="col-md-12">
            <h2>Listen to this</h2>
          </div>
        </div> -->
        </div>
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");

* {
  margin: 0;
  font-family: "Nunito", sans-serif;
  font-weight: 400;
}

#Vinyl{
    position: absolute;
    width:auto;
    top: 12%;
    bottom: 0;
    left: 36.5%;
    right: 0;
    height:80vh;
    aspect-ratio: 1;
    z-index: -1;
}

#image{
    z-index: -4;
}

h1 {
  font-size: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.thing{
    border-radius: 20px;
    z-index: 1;
    background-color:white;

}

.img-fluid {
    border-radius: 20px;
}

p {
  font-size: 18px;
}

.bi.bi-star-fill {
  color: gold;
}

#cartButton {
  border: 1px solid black;
  background-color: transparent;
  transition: background-color 0.3s ease;
  width: 200px;
}

#cartButton:hover {
  background-color: black;
  color: white;
  border: white;
}
</style>
