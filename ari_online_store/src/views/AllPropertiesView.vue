<template>
  <div class="AllProperties">
    <div class="container">
        <div v-if="props">
            <div class="row">
                <div class="col-md-4">
                    <div id="projectZoom" class="imgContainer">
                        <img class="w-100 img-fluid" src="https://picsum.photos/500" alt="Makeup">
                        <div class="onHover">
                            <div class="row">
                                <div class="col-md-12">
                                    <span id="hoverInfo">Information</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div id="projectZoom" class="imgContainer">
                        <img class="w-100 img-fluid" src="https://picsum.photos/500" alt="Makeup">
                        <div class="onHover">
                            <div class="row">
                                <div class="col-md-12">
                                    <span id="hoverInfo">Information</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div id="projectZoom" class="imgContainer">
                        <img class="w-100 img-fluid" src="https://picsum.photos/500" alt="Makeup">
                        <div class="onHover">
                            <div class="row">
                                <div class="col-md-12">
                                    <span id="hoverInfo">Information</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row my-5 pt-5">
                <div class="col-md-12 d-flex justify-content-start align-content-start">
                    <h2>View our albums</h2>
                </div>
            </div>
            <div class="row my-5 pb-5">
                <div class="col-md-4">
                    <div class="itemContainer px-4">
                        <div class="row">
                            <div id="titles" class="col-md-4 pt-2">
                                <h6>Subtitle</h6>
                                <h5>Title</h5>
                            </div>
                        </div>
                        <img class="img-fluid" src="../assets/positionsvinyl.webp" alt="Makeup">
                        <div class="row">
                            <div class="col-md-12">
                                <span id="hoverInfo">Information</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            loading...
        </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getProperties');
    },
    computed:{
        props(){
            return this.$store.state.albums;
        }
    }
}
</script>

<style>

    #titles h6{
        font-style: italic;
    }

    .col-md-4{
        margin:0;
        padding: 0;
    }
    #albumImage{
        width: 100%;
    }

    #hoverInfo{
        font-size: 24px;
    }

    .imgContainer{
        position: relative;
    }

    .itemContainer{
        background-color: grey;
    }

    #projectZoom{
        transition: all 0.5s ease;
    }

    #projectZoom:hover{
        transform:scale(1.1);
        z-index: 3;
    }
    .onHover{
        /* background-color: rgba(95, 95, 95, 0.2); */
        color: white;
        position: absolute;
        top: 0;
        bottom:0;
        left:0;
        right:0;
        padding:1rem;
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content: end;
        opacity: 0;
        transition:all 0.3s linear
    }

    .imgContainer:hover .onHover{
        opacity:1;
    }

</style>