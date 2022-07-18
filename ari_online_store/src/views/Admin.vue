<template>
  <div id="adminContainer" class="admin">
    <div class="container">
      <div class="row">
        <div class="col-md-12 p-0 m-0 mx-auto">
          <router-link class="m-0 p-0" to="/userAdmin"><button id="userAdminButton" class="btn">User Admin</button></router-link>
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center flex-column h-100" v-if="albums">
        <table class="mt-4 table table-hover table-dark table-striped">
          <thead class="table table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Image</th>
              <th scope="col">Cover Image</th>
              <th scope="col">Title</th>
              <th scope="col">Subtitle</th>
              <th scope="col">Price</th>
              <th scope="col">Tracklist / Description</th>
              <th scope="col">No. of Songs / Type</th>
              <th scope="col">Category</th>
              <th id="add-btn" scope="col">
                <button id="add" data-bs-toggle="modal" data-bs-target="#addModal">
                  <i style="font-size:2rem" class="bi bi-plus-square"></i>
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            <!-- Albums -->
            <tr>
              <th><h1 class="fw-bold display-6 p-3">Albums</h1></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr v-for="album in albums.filter((x) => {
                return x.category == 'Album';
              })"
              :key="album.id" >
              <th scope="row">{{ album.id }}</th>
              <td><img :src="album.img" :alt="album.title" class="img-fluid"/></td>
              <td><img :src="album.coverImage" :alt="album.title" class="img-fluid"/></td>
              <td id="breakWord" >{{ album.title }}</td>
              <td>{{ album.subtitle }}</td>
              <td>R{{ album.price }}</td>
              <td>
                <button data-bs-toggle="modal" :data-bs-target="'#album_song' + album.id" class="btn btn-primary">view songs</button>
              </td>
              <td>{{ album.songAmount }}</td>
              <td>{{ album.category }}</td>
              <td>
                <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button">
                  Delete
                </button>
                <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#album_' + album.id" type="button">
                  Edit
                </button>
              </td>
              <editModal :album="album" />
              <song-view-modal :album="album" />
            </tr>
            <!-- Makeup -->
            <!-- Chapter 1 -->
            <tr>
              <th><h1 class="fw-bold display-6 p-3">Makeup</h1></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th class="trh"><h2 class="fw-bold display-6 fs-4 p-2">Chapter 1</h2></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr v-for="album in albums.filter((x) => {
                return x.chapter == 1;
              })"
              :key="album.id">
              <th scope="row">{{ album.id }}</th>
              <td> <img :src="album.img" :alt="album.title" class="img-fluid"/> </td>
              <td> <img :src="album.coverImage" :alt="album.title" class="img-fluid"/> </td>
              <td id="breakWord">{{ album.title }}</td>
              <td>{{ album.subtitle }}</td>
              <td>R{{ album.price }}</td>
              <td>{{ album.description }}</td>
              <td>{{ album.type }}</td>
              <td>{{ album.category }}</td>
              <td>
                <button class="p-1" id="deleteButton" @click="deleteItem(album.id)" type="button">
                  Delete
                </button>
                <button class="p-1" id="editButton" data-bs-toggle="modal" :data-bs-target="'#makeup_' + album.id" type="button">
                  Edit
                </button>
              </td>
              <edit-makeup-modal :album="album" />
            </tr>
            <!-- Chapter 2 -->
            <tr>
              <th class="trh"><h2 class="fw-bold display-6 fs-4 p-2">Chapter 2</h2></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr
              v-for="album in albums.filter((x) => {
                return x.chapter == 2;
              })"
              :key="album.id"
            >
              <th scope="row">{{ album.id }}</th>
              <td>
                <img :src="album.img" :alt="album.title" class="img-fluid" />
              </td>
              <td>
                <img
                  :src="album.coverImage"
                  :alt="album.title"
                  class="img-fluid"
                />
              </td>
              <td id="breakWord">{{ album.title }}</td>
              <td>{{ album.subtitle }}</td>
              <td>R{{ album.price }}</td>
              <td>{{ album.description }}</td>
              <td>{{ album.type }}</td>
              <td>{{ album.category }}</td>
              <td>
                <button
                  class="p-1"
                  id="deleteButton"
                  @click="deleteItem(album.id)"
                  type="button"
                >
                  Delete
                </button>
                <button
                  class="p-1"
                  id="editButton"
                  data-bs-toggle="modal"
                  :data-bs-target="'#makeup_' + album.id"
                  type="button"
                >
                  Edit
                </button>
              </td>
              <edit-makeup-modal :album="album" />
            </tr>
            <!-- Chapter 3 -->
            <tr>
              <th class="trh"><h2 class="fw-bold display-6 fs-4 p-2">Chapter 3</h2></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr
              v-for="album in albums.filter((x) => {
                return x.chapter == 3;
              })"
              :key="album.id"
            >
              <th scope="row">{{ album.id }}</th>
              <td>
                <img :src="album.img" :alt="album.title" class="img-fluid" />
              </td>
              <td>
                <img
                  :src="album.coverImage"
                  :alt="album.title"
                  class="img-fluid"
                />
              </td>
              <td id="breakWord">{{ album.title }}</td>
              <td>{{ album.subtitle }}</td>
              <td>R{{ album.price }}</td>
              <td>{{ album.description }}</td>
              <td>{{ album.type }}</td>
              <td>{{ album.category }}</td>
              <td>
                <button
                  class="p-1"
                  id="deleteButton"
                  @click="deleteItem(album.id)"
                  type="button"
                >
                  Delete
                </button>
                <button
                  class="p-1"
                  id="editButton"
                  data-bs-toggle="modal"
                  :data-bs-target="'#makeup_' + album.id"
                  type="button"
                >
                  Edit
                </button>
              </td>
              <edit-makeup-modal :album="album" />
            </tr>
            <!-- Fragrances -->
            <tr>
              <th><h1 class="fw-bold display-6 p-3">Fragrances</h1></th>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr
              v-for="album in albums.filter((x) => {
                return x.category == 'Fragrance';
              })"
              :key="album.id"
            >
              <th scope="row">{{ album.id }}</th>
              <td>
                <img :src="album.img" :alt="album.title" class="img-fluid" />
              </td>
              <td>
                <img
                  :src="album.coverImage"
                  :alt="album.title"
                  class="img-fluid"
                />
              </td>
              <td id="breakWord">{{ album.title }}</td>
              <td>{{ album.subtitle }}</td>
              <td>R{{ album.price }}</td>
              <td>{{ album.description }}</td>
              <td>{{album.category}}</td>
              <td>{{ album.category }}</td>
              <td>
                <button
                  id="f-delete"
                  class="p-1"
                  @click="deleteItem(album.id)"
                  type="button"
                >
                  Delete
                </button>
                <button
                  class="p-1"
                  id="editButton"
                  data-bs-toggle="modal"
                  :data-bs-target="'#fragrance_' + album.id"
                  type="button"
                >
                  Edit
                </button>
              </td>
              <editFragranceModal :album="album" />
            </tr>
          </tbody>
        </table>
        <div
          class="modal fade"
          id="addModal"
          tabindex="-1"
          aria-labelledby="addModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="addModalTitle">Add</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <form id="AddItem" @submit.prevent>
                  <label class="form-label" for="Title">Title</label>
                  <input v-model="newTitle" class="form-control" type="text" placeholder="Enter the Title"/>
                  <label class="form-label" for="Image">Image</label>
                  <input v-model="newImgURL" class="form-control" type="text" placeholder="Enter the Image URL"/>
                  <label class="form-label" for="Cover Image">CoverImage</label>
                  <input v-model="newCoverImage" class="form-control" type="text" placeholder="Enter the Cover Image URL"/>
                  <label class="form-label" for="Price">Price</label>
                  <input v-model="newPrice" class="form-control" type="number" placeholder="Enter the Price"/>
                  <div v-if="this.newCategory == 'Album'">
                    <label class="form-label" for="Subtitle">Subtitle</label>
                    <input v-model="newSubtitle" class="form-control" type="number" placeholder="Enter the Release Year"/>
                    <label class="form-label" for="Song Amount">No. of Songs</label>
                    <input v-model="newSongAmount" class="form-control" type="number" placeholder="Enter the Song Amount"/>
                    <label for="TrackList" class="form-label">Tracklist</label>
                    <input class="form-control i" v-for="i in this.newSongAmount" :key="i" required type="text">
                  </div>
                  <div v-else-if="this.newCategory == 'Fragrance'">
                    <label class="form-label" for="Subtitle">Subtitle</label>
                    <input v-model="newSubtitle" class="form-control" type="text" placeholder="Enter the Subtitle"/>
                    <label class="form-label" for="Description">Description</label>
                    <textarea
                      v-model="newDescription"
                      class="form-control"
                      type="number"
                      placeholder="Enter the Description"
                    ></textarea>
                  </div>
                  <div v-else>
                    <label class="form-label" for="Subtitle">Subtitle</label>
                    <input
                      v-model="newSubtitle"
                      class="form-control"
                      type="text"
                      placeholder="Enter the Subtitle"
                    />
                    <label class="form-label" for="Description"
                      >Description</label
                    >
                    <textarea
                      v-model="newDescription"
                      class="form-control"
                      type="number"
                      placeholder="Enter the Description"
                    ></textarea>
                    <label class="form-label" for="Chapter">Chapter</label>
                    <select v-model="newChapter" class="form-control">
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                    </select>
                    <label class="form-label" for="Type">Type</label>
                    <select v-model="newType" class="form-control">
                      <option value="Lip Gloss">Lip Gloss</option>
                      <option value="Lipstick">Lipstick</option>
                      <option value="Eye Shadow">Eye Shadow</option>
                      <option value="Highlighter">Highlighter</option>
                      <option value="Eyeliner">Eyeliner</option>
                      <option value="Lip Marker">Lip Marker</option>
                      <option value="Mascarra">Mascarra</option>
                      <option value="Eyelashes">Eyelashes</option>
                      <option value="Treatment">Treatment</option>
                    </select>
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
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  data-bs-dismiss="modal"
                  class="btn btn-primary"
                  @click="addItem()"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editModal from "../components/editModal.vue";
import songViewModal from "../components/songListModal.vue";
import editMakeupModal from "../components/editMakeupModal.vue";
import editFragranceModal from "../components/editFragranceModal.vue";

export default {
  data() {
    return {
      newTitle: null,
      newSubtitle: null,
      newImgURL: null,
      newCoverImage: null,
      newPrice: null,
      newSongAmount: null,
      newTracklist:[],
      newCategory: "Album",
      newDescription: null,
      newType: "Lip Gloss",
      newChapter: 1,
    };
  },

  components: {
    editModal,
    editMakeupModal,
    editFragranceModal,
    songViewModal,
  },
  mounted() {
    this.$store.dispatch("getAlbums");
  },
  computed: {
    albums() {
      return this.$store.state.albums;
    },
  },
  methods:{
    async initializeTrackList(){
      let songs = document.getElementsByClassName('#'+this.album.id+'song');
      let object = {...this.album.songList};
      for(let i = 0;i<songs.length;i++){
        console.log(object)
        songs[i].value = object[i];
        }
        },
        deleteItem(id){
          this.$store.dispatch('deleteItem', id )
        },
        addItem(){
          const inputs = document.getElementsByClassName("i");
          console.log(inputs);
          for(let i = 0; i<inputs.length;i++){
            this.newTracklist.push(inputs[i].value)
          }
            if(this.newCategory == "Album"){
              if(this.newCoverImage == null){this.newCoverImage = "https://cdn.pixabay.com/photo/2016/11/29/01/22/album-1866523_960_720.jpg"};
              if(this.newImgURL == null){this.newImgURL = "https://cdn.pixabay.com/photo/2016/11/29/01/22/album-1866523_960_720.jpg"};
              this.$store.dispatch('addAlbumItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newSongAmount,this.newCategory,this.newTracklist] )
            }else if(this.newCategory == "Makeup"){
              if(this.newImgURL == null){this.newImgURL = "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_960_720.jpg"};
              if(this.newCoverImage == null){this.newCoverImage = "https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_960_720.jpg"};
              this.$store.dispatch('addMakeupItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newDescription,this.newCategory,this.newChapter,this.newType] )
            }else{
              if(this.newCoverImage == null){this.newCoverImage = "https://cdn.pixabay.com/photo/2016/06/15/22/22/still-life-1460067_960_720.jpg"};
              if(this.newImgURL == null){this.newImgURL = "https://cdn.pixabay.com/photo/2016/06/15/22/22/still-life-1460067_960_720.jpg"};
              this.$store.dispatch('addFragranceItem', [this.newTitle,this.newSubtitle,this.newImgURL,this.newCoverImage,this.newPrice,this.newDescription,this.newCategory] )
            }
        }
    }
    }
</script>


<style scoped>

#adminContainer{
  background: linear-gradient(#20a76a,#81d084d5);
}

@media screen and (max-width:1200px) {
  table{
    table-layout: fixed;
  }
}

@media screen and (min-width:1201px) {
  #deleteButton {
  width: 100% !important;
  border-radius:10% !important;
  background-color: rgb(183, 20, 20) !important;
  border: hidden !important;
  color: white;
  transition: all 0.3s ease;
}
#editButton:nth-child(2n) {
  width: 100% !important;
  background-color: #28d084 !important;border-radius:10% !important;
  border: hidden !important;
  border-radius:10% !important;
}

}

#deleteButton {
  width: 100% !important;
  border-radius:1%;
  background-color: rgb(183, 20, 20) !important;
  border: hidden !important;
  color: white;
  transition: all 0.3s ease;
}
#editButton:nth-child(2n) {
  width: 100% !important;
  background-color: #28d084 !important;border-radius:10% !important;
  border: hidden !important;
  border-radius:1%;
}

@media screen and (min-width: 768px) and (max-width:924px) {
  table{
    width: 760px;
  }
  #songList{
    padding: 0 !important;
  }
  #breakWord{
    word-break: break-all;
  }
  #deleteButton {
  width: 100% !important;
  border-radius:0% !important;
  background-color: rgb(183, 20, 20) !important;
  border: hidden !important;
  color: white;
  transition: all 0.3s ease;
}
#editButton:nth-child(2n) {
  width: 100% !important;
  background-color: #28d084 !important;border-radius:10% !important;
  border: hidden !important;
  border-radius:0% !important;
}
  
}

@media screen and (max-width:768px) {
  #deleteButton {
  width: 100% !important;
  border-radius:0% !important;
  background-color: rgb(183, 20, 20) !important;
  border: hidden !important;
  color: white;
  transition: all 0.3s ease;
}
#editButton:nth-child(2n) {
  width: 100% !important;
  background-color: #28d084 !important;border-radius:10% !important;
  border: hidden !important;
  border-radius:0% !important;
}
}

#userAdminButton{
  width: 250px !important;
  border-radius: 10px !important;
  background-color: rgb(90, 90, 90)!important;
  color: white;
  border: 2px solid black;
}

tr {
  background-color: white !important;
}

#add {
  color: white;
  border: hidden;
}
#f-delete {
  background-color: rgb(183, 20, 20) !important;
  border: hidden !important;
  color: white;
  transition: all 0.3s ease;
}
#f-delete:hover {
  background-color: rgb(255, 0, 0) !important;
  border: hidden !important;
}

#deleteButton:hover {
  width: 100% !important;
  background-color: rgb(255, 0, 0) !important;
  border: hidden !important;
}

tr:nth-child(2n) {
  background: rgb(199, 199, 199);
}
tr:nth-child(2n-1) {
  background: rgb(199, 199, 199);
}


tr:nth-child(2n-1) #editButton {
  width: 100% !important;
  background-color: #b5abab !important;
  border: hidden !important;
}

@media screen and (max-width: 769px) {
  tr {
    display: flex;
    flex-direction: column;
  }
}
@media screen and (max-width: 1200px) {
  #editButton {
    margin-top: 0.5rem;
  }
}
@media screen and (min-width: 1201px) {
  #editButton {
    margin-top: 2rem;
  }
  #deleteButton {
    margin-bottom: 3rem;
  }
}
</style>