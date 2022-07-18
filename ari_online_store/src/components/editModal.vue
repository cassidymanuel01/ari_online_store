<template>
  <div class="modal fade" :id="'album_'+album.id" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="editModalModalTitle">Edit</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="EditItem" @submit="preventDefault"> 
                                <label class="form-label" for="Title">Title</label>
                                <input v-model="album.title" class="form-control" type="text" placeholder="Enter the Title">
                                <label class="form-label" for="SubTitle">Subtitle</label>
                                <input v-model="album.subtitle" class="form-control" type="number" placeholder="Enter the Subtitle">
                                <label class="form-label" for="Image">Image</label>
                                <input v-model="album.img" class="form-control" type="text" placeholder="Enter the Image URL">
                                <label class="form-label" for="Cover Image">CoverImage</label>
                                <input v-model="album.coverImage" class="form-control" type="text" placeholder="Enter the Vinyl Image URL">
                                <label class="form-label" for="Price">Price</label>
                                <input v-model="album.price" class="form-control" type="number" placeholder="Enter the Price">
                                <label class="form-label" for="Song Amount">Song Amount</label>
                                <input @focusout="changeTrackLength" v-model="album.songAmount" class="form-control" type="number" placeholder="Enter the Song Amount">
                                <label for="songList" class="form-label">TrackList</label>
                                <div :id="'#'+album.id">

                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button"  data-bs-dismiss="modal" class="editButton btn btn-primary" @click="editItem()">Confirm Edit</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    props: ['album'],
    mounted(){
        console.log(this.album.id)
        this.initializeTrackList();
    },
    methods:{
        editItem(){
            let allSongs = [];
            let T = document.getElementsByClassName(`##${this.album.id}class`);
            console.log(T[0].value);
            for(let i = 0; i<T.length;i++){
                allSongs.push(T[i].value);
            }
            this.$store.dispatch("editItem",[this.album,allSongs]);
        },
        async initializeTrackList(){
            document.getElementById(`#${this.album.id}`).innerHTML='';
            let object = {...this.album.songList};
            for(let i = 0;i<this.album.songAmount;i++){
                if(object[i] !=undefined){
                    document.getElementById(`#${this.album.id}`).innerHTML += `<input class="##${this.album.id}class form-control my-1" value="${object[i]}">`
                }else{
                    document.getElementById(`#${this.album.id}`).innerHTML += `<input class="##${this.album.id}class form-control my-1">`
                }
            }
        },
        changeTrackLength(){
            console.log('called');
            this.initializeTrackList();
        }
    }
}
</script>

<style>

</style>