<template>
  <div class="admin">
    <div class="container">

        <div v-if="albums">

            <table class="table">
                <thead class="table">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Cover Image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Subtitle</th>
                        <th scope="col">Price</th>
                        <th scope="col">Song Amount/Chapter</th>
                        <th scope="col">Category</th>
                        <th id="add-btn" scope="col"><button id="add" data-bs-toggle="modal" data-bs-target="#addModal"><i class="fa-2x bi bi-plus-square"></i></button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><h1 class="fw-bold display-6 pt-2">Albums</h1></th>
                    </tr>
                    <tr v-for="album in albums.filter((x)=> {return x.category == 'Album'})" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.subtitle}}</td>
                        <td>R{{album.price}}</td>
                        <td>{{album.songAmount}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#album_'+album.id" type="button"> Edit </button>
                        </td>
                        <editModal :album="album" />
                    </tr>
                    <tr>
                        <th><h1 class="fw-bold display-6">Makeup</h1></th>
                    </tr>
                    <tr>
                        <th><h2 class="fw-bold display-6 fs-4">Chapter 1</h2></th>
                    </tr>
                    <tr v-for="album in albums.filter((x) => {return x.chapter == 1})" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.subtitle}}</td>
                        <td>R{{album.price}}</td>
                        <td>{{album.chapter}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#makeup_'+album.id" type="button"> Edit </button>
                        </td>
                        <edit-makeup-modal :album="album" />
                    </tr>
                    <tr>
                        <th><h2 class="fw-bold display-6 fs-4">Chapter 2</h2></th>
                    </tr>
                    <tr v-for="album in albums.filter((x) => {return x.chapter == 2})" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.subtitle}}</td>
                        <td>R{{album.price}}</td>
                        <td>{{album.chapter}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#makeup_'+album.id" type="button"> Edit </button>
                        </td>
                        <edit-makeup-modal :album="album" />
                    </tr>
                    <tr>
                        <th><h2 class="fw-bold display-6 fs-4">Chapter 3</h2></th>
                    </tr>
                    <tr v-for="album in albums.filter((x) => {return x.chapter == 3})" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.subtitle}}</td>
                        <td>R{{album.price}}</td>
                        <td>{{album.chapter}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#makeup_'+album.id" type="button"> Edit </button>
                        </td>
                        <edit-makeup-modal :album="album" />
                    </tr>
                    <tr>
                        <th><h1 class="fw-bold display-6">Fragrances</h1></th>
                    </tr>
                    <tr v-for="album in albums.filter((x) => {return x.category == 'Fragrance'})" :key="album.id">
                        <th scope="row">{{album.id}}</th>
                        <td><img :src="album.img" :alt="album.title" class="img-fluid"></td>
                        <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"></td>
                        <td>{{album.title}}</td>
                        <td>{{album.subtitle}}</td>
                        <td>R{{album.price}}</td>
                        <td>{{album.chapter}}</td>
                        <td>{{album.category}}</td>
                        <td>
                            <button id="f-delete" class="p-1" @click="deleteItem(album.id)" type="button"> Delete </button>
                            <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#fragrance_'+album.id" type="button"> Edit </button>
                        </td>
                        <editFragranceModal :album="album" />
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
                                <input v-model="newTitle" class="form-control" type="text" placeholder="Enter the Title">
                                <label class="form-label" for="Image">Image</label>
                                <input v-model="newImgURL" class="form-control" type="text" placeholder="Enter the Image URL">
                                <label class="form-label" for="Cover Image">CoverImage</label>
                                <input v-model="newCoverImage" class="form-control" type="text" placeholder="Enter the Cover Image URL">
                                <label class="form-label" for="Price">Price</label>
                                <input v-model="newPrice" class="form-control" type="number" placeholder="Enter the Price">
                                <div v-if="newCategory == 'Album'">
                                    <label class="form-label" for="Subtitle">Subtitle</label>
                                    <input v-model="newSubtitle" class="form-control" type="number" placeholder="Enter the Subtitle Year">
                                    <label class="form-label" for="Song Amount">Song Amount</label>
                                    <input v-model="newSongAmount" class="form-control" type="number" placeholder="Enter the Song Amount">
                                </div>
                                <div v-if="newCategory == 'Fragrance'">
                                    <label class="form-label" for="Subtitle">Subtitle</label>
                                    <input v-model="newSubtitle" class="form-control" type="text" placeholder="Enter the Subtitle Year">
                                    <label class="form-label" for="Description">Description</label>
                                    <textarea v-model="newDescription" class="form-control" type="number" placeholder="Enter the Description"></textarea>
                                </div>
                                <div v-else>
                                    <label class="form-label" for="Subtitle">Subtitle</label>
                                    <input v-model="newSubtitle" class="form-control" type="text" placeholder="Enter the Subtitle Year">
                                    <label class="form-label" for="Description">Description</label>
                                    <textarea v-model="newDescription" class="form-control" type="number" placeholder="Enter the Description"></textarea>
                                    <label class="form-label" for="Chapter">Chapter</label>
                                    <input v-model="newChapter" class="form-control" type="number" placeholder="Enter the Chapter">
                                </div>
                                <label class="form-label" for="Category">Category</label>
                                <select v-model="newCategory" class="form-control">
                                    <option selected value="Album">Album</option>
                                    <option value="Makeup">Makeup</option>
                                    <option value="Fragrance">Fragrance</option>
                                </select>
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
import editMakeupModal from '../components/editMakeupModal.vue'
import editFragranceModal from '../components/editFragranceModal.vue'

export default {
    data(){
        return{
            newTitle: null,
            newSubtitle: null,
            newImgURL: null,
            newCoverImage: null,
            newPrice: null,
            newSongAmount: null,
            newCategory: null,
            newDescription:null,
            newChapter:null
        }
    },

    components:{
        editModal,
        editMakeupModal,
        editFragranceModal
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
            if(this.newCategory == "Album"){
                this.$store.dispatch('addAlbumItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newSongAmount,this.newCategory] )
            }else if(this.newCategory == "Makeup"){
                this.$store.dispatch('addMakeupItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newDescription,this.newCategory,this.newChapter] )
            }else{
                this.$store.dispatch('addFragranceItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newDescription,this.newCategory] )
            }
        }
        
    }
}
</script>

<style>

*{
    margin: 0;
    padding: 0;
}
th{
    background-color: white;
}
#add-btn{
    background: rgb(199, 199, 199)
}
#add{
    
    color: white;
    border: hidden;
}
#add:hover{
}
#f-delete{
    background-color: rgb(183, 20, 20)!important;
    border: hidden!important;
    color:white;
    transition: all 0.3s ease;
}
#f-delete:hover{
    background-color: rgb(255, 0, 0)!important;
    border: hidden!important;
}
#deleteButton{
    width: 100% !important;
    background-color: rgb(183, 20, 20)!important;
    border: hidden!important;
    color:white;
    transition: all 0.3s ease;
}
#deleteButton:hover{
    width: 100% !important;
    background-color: rgb(255, 0, 0)!important;
    border: hidden!important;
}

tr:nth-child(2n){
    background: rgb(199, 199, 199);
}
tr:nth-child(2n-1){
    background: #28D084;
}

#editButton:nth-child(2n){
    width: 100% !important;
    background-color: #28D084!important;
    border: hidden!important;
}
tr:nth-child(2n-1) #editButton{
    width: 100% !important;
    background-color: #b5abab!important;
    border: hidden!important;
}

@media screen and (max-width:769px) {
    tr{
    display: flex;
    flex-direction: column;
    }
}
@media screen and (max-width:1200px) {
    #editButton{
        margin-top: 0.5rem;
    }
}
@media screen and (min-width:1201px) {
    #editButton{
        margin-top: 2rem;
    }
    #deleteButton{
        margin-bottom: 3rem;
    }
}
</style>
