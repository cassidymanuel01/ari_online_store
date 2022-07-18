<template>
  <div class="modal fade" :id="'album_song'+album.id" tabindex="-1" aria-labelledby="viewModal" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="viewModalTitle">All Songs for {{album.title}}</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <label for="SongList">All Songs</label>
                            <input type="text" class="form-control" readonly v-for="song in album.songList" :key="song" :value="song">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
    props: ['album'],
}
</script>

<style>

</style>