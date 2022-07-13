<template>
  <div class="admin">
    <div class="container">

    <div v-if="albums">

    </div>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">ReleaseYear</th>
                <th scope="col">Song Amount</th>
            </tr>
        </thead>
        <tbody v-for="album in albums" :key="album.id">
            <tr>
                <th scope="row">{{album.id}}</th>
                <td>{{album.title}}</td>
                <td>{{album.price}}</td>
                <td>{{album.releaseYear}}</td>
                <td>{{album.songAmount}}</td>
            </tr>
        </tbody>
    </table>
  </div>
    </div>
</template>

<script>
export default {
    mounted(){
        this.$store.dispatch('getProperties');
    },
    computed:{
        albums(){
            return this.$store.state.albums;
        }
    }
}
</script>

<style>

</style>
