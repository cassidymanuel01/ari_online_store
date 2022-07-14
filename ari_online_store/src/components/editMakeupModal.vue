<template>
  <div class="modal fade" :id="'makeup_'+album.id" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
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
                                <input v-model="album.subtitle" class="form-control" type="text" placeholder="Enter the Subtitle">
                                <label class="form-label" for="Image">Image</label>
                                <input v-model="album.img" class="form-control" type="text" placeholder="Enter the Image URL">
                                <label class="form-label" for="Cover Image">CoverImage</label>
                                <input v-model="album.coverImage" class="form-control" type="text" placeholder="Enter the Vinyl Image URL">
                                <label class="form-label" for="Price">Price</label>
                                <input v-model="album.price" class="form-control" type="number" placeholder="Enter the Price">
                                <label class="form-label" for="Description">Description</label>
                                <textarea v-model="album.description" class="form-control" type="text" placeholder="Enter the Description"></textarea>
                                <label class="form-label" for="Song Amount">Chapter</label>
                                <input v-model="album.chapter" class="form-control" type="number" placeholder="Enter the Chapter Number">
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
        console.log(this.album.description)
    },
    methods:{
        editItem(){
            this.$store.dispatch("editItem",this.album);
        }
    }
}
</script>

<style>

</style>