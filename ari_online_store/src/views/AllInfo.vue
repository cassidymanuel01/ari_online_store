<template>
  <div class="AllProperties">
    <div class="container mx-auto">
      <div v-if="albums">
        <div class="row">
          <div class="col-md-4">
            <div class="imgContainer">
              <img
                class="img-fluid"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2021%2F11%2F03%2Frem-beauty.jpg"
                alt="Makeup"
              />
              <div class="onHover">
                <div class="row">
                  <div class="col-md-12">
                    <span id="hoverInfo">Makeup</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="imgContainer">
              <img
                class="img-fluid"
                src="https://pbs.twimg.com/media/FFuVnvyWUAoiKMO.jpg:large"
                alt="Albums"
              />
              <div class="onHover">
                <div class="row">
                  <div class="col-md-12">
                    <span id="hoverInfo">Albums</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="imgContainer">
              <img
                class="img-fluid"
                src="https://vioralondon.com/wp-content/uploads/2020/10/Best-Ariana-Grande-Perfumes-Reviewed-image.jpg"
                alt="Fragrances"
              />
              <div class="onHover">
                <div class="row">
                  <div class="col-md-12">
                    <span id="hoverInfo">Fragrances</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row my-5 pt-5">
          <div
            class="col-md-12 d-flex justify-content-center align-content-center"
          >
            <h2>View our albums</h2>
          </div>
        </div>
        <div class="row my-5 pb-5">
          <div v-for="album in albums" :key="album.id" class="col-md-4 p-1">
            <router-link
              style="text-decoration: none; color: inherit"
              :to="{ name: 'single', params: { id: album.id } }"
            >
              <div class="itemContainer">
                <div class="row mx-auto">
                  <div id="titles" class="col-6 ps-2 pt-3">
                    <h6>{{ album.releaseYear }}</h6>
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
                      <i class="bi bi-cart pe-1"></i> {{ album.price }}
                    </button>
                  </div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div v-else>loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.dispatch("getAlbums");
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap");

.itemContainer:hover img {
  transform: translate(0px, -20px);
}
.itemContainer img {
  transition: all 1s ease;
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

    #hoverInfo{
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
  background-color: rgba(185, 185, 185, 0.7);
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
</style>
