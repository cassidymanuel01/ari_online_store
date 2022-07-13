<template>
  <div class="singleItem">
    <div v-if="singleInfo">
        <div class="container mx-auto">
            <div class="row mb-5 pb-2">
                <div class="col-md-4">
                    <img class="img-fluid" :src="singleInfo.img" :alt="singleInfo.title">
                </div>
                <div class="col-md-4">
                    <div class="row mb-4">
                        <div class="col-md-12 d-flex justify-content-start align-items-center">
                            <h6 style="font-size:10px">{{singleInfo.releaseYear}}</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex flex-column justify-content-start align-items-start">
                            <h6 class="mb-3">{{singleInfo.releaseYear}}</h6>
                            <h5 class="mb-2">{{singleInfo.title}}</h5>
                            <h4 class="py-3">Description........</h4>
                            <div class="d-flex justify-content-center align-items-center gap-2">
                                <div>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star-fill"></i>
                                    <i class="bi bi-star"></i>
                                </div>
                                <div>
                                    <span>45+ ratings</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 pt-1">
                        <div class="col-md-10 mx-auto mt-5 pt-5">
                            <button id="cartButton" class="py-2 px-3"><i class="bi bi-cart"></i> Add to cart ~ Price</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <ul>
                        <li v-for="song in singleSongInfo" :key="song[i]">
                            {{song}}
                        </li>
                    </ul>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <h2>Wear with these</h2>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        loading...
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getSingleAlbum',this.$route.params.id);
    },
    computed:{
        singleInfo(){
            return this.$store.state.albums;
        },
        singleSongInfo(){
            return this.$store.state.albums.songList;
        },
    }
}
</script>

<style scoped>

    *{
        margin: 0;
        padding: 0;
    }

    ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    li{
        text-align: start;
    }
    #cartButton{
        border: 1px solid black;
        background-color:transparent;
        transition: background-color 0.3s ease;
    }

    #cartButton:hover{
        background-color:black;
        color: white;
    }
</style>