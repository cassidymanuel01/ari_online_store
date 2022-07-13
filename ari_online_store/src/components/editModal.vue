<template>
  <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
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
                                <label class="form-label" for="SubTitle">SubTitle</label>
                                <input v-model="album.subTitle" class="form-control" type="number" placeholder="Enter the Release Year">
                                <label class="form-label" for="Image">Image</label>
                                <input v-model="album.img" class="form-control" type="text" placeholder="Enter the Image URL">
                                <label class="form-label" for="Cover Image">CoverImage</label>
                                <input v-model="album.coverImage" class="form-control" type="text" placeholder="Enter the Vinyl Image URL">
                                <label class="form-label" for="Price">Price</label>
                                <input v-model="album.price" class="form-control" type="number" placeholder="Enter the Price">
                                <label class="form-label" for="Song Amount">Song Amount</label>
                                <input v-model="album.songAmount" class="form-control" type="number" placeholder="Enter the Song Amount">
                                <label class="form-label" for="Category">Category</label>
                                <select v-model="album.category" name="Category" class="form-select">
                                    <option value="Album">Album</option>
                                    <option value="Makeup">Makeup</option>
                                </select>
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
    methods:{
        editItem(){
            this.$store.dispatch("editItem",this.album);
        }
    }
}
</script>

<style>

</style>