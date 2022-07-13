<template>
  <div class="admin">
    <div class="container">

        <div v-if="albums">

            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">CoverImage</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">ReleaseYear</th>
                        <th scope="col">Song Amount</th>
                        <th scope="col">Category</th>
                        <th scope="col"><button data-bs-toggle="modal" data-bs-target="#addModal">Add</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><h1 class="display-6 pt-2">Albums</h1></th>
                    </tr>
                    <tr v-for="album in albums.slice(0,6)" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.price}}</td>
                        <td>{{album.releaseYear}}</td>
                        <td>{{album.songAmount}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button data-bs-toggle="modal" data-bs-target="#editModal" type="button"> Edit </button>
                        </td>
                        <edit-modal :album="album" />
                    </tr>
                    <tr>
                        <th><h1 class="display-6">Makeup</h1></th>
                    </tr>
                    <tr v-for="album in albums.slice(6,14)" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.price}}</td>
                        <td>{{album.releaseYear}}</td>
                        <td>{{album.songAmount}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button data-bs-toggle="modal" data-bs-target="#editModal" type="button"> Edit </button>
                        </td>
                        <edit-modal :album="album" />
                    </tr>
                </tbody>
            </table>
            <div class="modal fade" id="addModal" tabindex="-1" aria-labelledby="addModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="addModalTitle">Add</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form id="AddItem" @submit="preventDefault">
                                <label class="form-label" for="Title">Title</label>
                                <input class="form-control" type="text" placeholder="Enter the Title">
                                <label class="form-label" for="Image">Image</label>
                                <input class="form-control" type="text" placeholder="Enter the Image URL">
                                <label class="form-label" for="Cover Image">CoverImage</label>
                                <input class="form-control" type="text" placeholder="Enter the Vinyl Image URL">
                                <label class="form-label" for="Price">Price</label>
                                <input class="form-control" type="number" placeholder="Enter the Price">
                                <label class="form-label" for="Release Year">Release Year</label>
                                <input class="form-control" type="number" placeholder="Enter the Release Year">
                                <label class="form-label" for="Song Amount">Song Amount</label>
                                <input class="form-control" type="number" placeholder="Enter the Song Amount">
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" data-bs-dismiss="modal" class="btn btn-primary" @click="addItem()">Add</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</div>


</template>

<script>

import editModal from '../components/editModal.vue'

export default {

    components:{
        editModal
    },
    mounted(){
        this.$store.dispatch('getAlbums');
    },
    computed:{
        albums(){
            return this.$store.state.albums;
        }
    },
    methods:{
        deleteItem(id){
            this.$store.dispatch('deleteItem', id )
        },
        addItem(){
            let formData = document.getElementById("AddItem").getElementsByTagName('input');
            let title = formData[0].value;
            let img = formData[1].value;
            let coverImage = formData[2].value;
            let price = formData[3].value;
            let releaseYear = formData[4].value;
            let songAmount = formData[5].value;
            this.$store.dispatch('addItem', [img,coverImage,title,price,releaseYear,songAmount] )
        }
        
    }
}
</script>

<style>
@media screen and (max-width:769px) {
    tr{
    display: flex;
    flex-direction: column;
}
}
</style>
