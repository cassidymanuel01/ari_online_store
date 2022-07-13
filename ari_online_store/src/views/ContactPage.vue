<template>
  <!-- </NavBar> -->
  <!-- <header>

</header> -->
  <div id="body">
    <header></header>
    <main>
      <form id="background">
        <div id="width">
       <div class="text-center c display-1">Contact</div>
          <div id="boxOfInput" class="row">  
            <div class="col-md-6" id="left">
            <div class="row N">
              <label class="w-75 text-center" >Full Name:</label>
              <input class="" type="text" placeholder="what's your first name?" />
            </div>
            <br>
            <div class="row N ">
              <label class="w-75 text-center" >Email Address:</label>
              <input class=""  type="text" placeholder="you@example.com" />
            </div>
            <br> 
            <div class="row N ">
              <label class="w-75 text-center" >Message:</label>
              <input class=""  type="textarea" placeholder="comment" />
            </div>
             <div class="row N ">
                <button id="send" class="fs-5" type="button">send <i class="fa-regular fa-paper-plane fs-5"></i></button>
             </div>
          </div>
      <div class="col-md-6" id="icon">
        <img class=" image" style="" src="../assets/Ariana.jpg" alt=""/>
      </div>
      </div>
        </div>
      </form>
    </main>
     <Footer />
  </div>
</template>
<script>
import Footer from '../components/footer.vue'
export default {
  components: { Footer }
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');
main {
    display: flex;
    justify-content: center;
    align-items: center;
  height: 104vh;
  width: 100%;
}
#body {
  width: 100%;
  background: linear-gradient(lightgrey,#28D084);
}
body {
  background-color: lightgrey;
  overflow-x: hidden;
  height: 110vh;
  user-select: none;
}
#background {
    display: flex;
    justify-content: center;
    align-items: center;
  width: 100%;
  height: 100%;
}



input{
  height: 50px;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid;
  width: 50%;
}


input[type="text"]::placeholder {
  color: #28D084;
font-family: 'Nunito', sans-serif;
}

input[type="text"]{
color: #28D084;
font-family: 'Nunito', sans-serif;
border: 1px solid black;
width: 50%;
}

input[type="textarea"]::placeholder {
  color: #28D084;
  vertical-align: text-top;
  padding-bottom: 10px;
  transform: translateY(-30px);
font-family: 'Nunito', sans-serif;
}



input[type="textarea"] {
  color: #28D084;
  border: 1px solid black;
  height: 100px;
 font-family: 'Nunito', sans-serif;
  width: 50%;
}

input[type="textarea"]::text{
  color: #28D084;
  height: 100px;
  transform: translateY(-30px);
 font-family: 'Nunito', sans-serif;

}

.c {
  width: 100%;
  padding: 50px;
  color:white;
  font-family: 'Nunito', sans-serif;
  text-shadow: 0vw 0vw 1vw #28D084 ;
}



label {
  font-size: large;
  color: white;
  font-family: 'Nunito', sans-serif;
}

#left{
    border-right: 5px solid white ;
}
.N{
  display: flex;  
  justify-content: center;
}
#width{
width:65%;
}

img{
    object-fit: cover;
    border-radius: 50%;
    width: 75%;
    height: auto;
    box-shadow: 0vw 0vw 1vw white ;
}

#icon{
    display: flex;
    justify-content: center;
}

#send{
    margin-top: 6% ;
    width:50%;
    color: #28D084;
    background-color: white;
    border: none;
    border-radius: 50px;
    font-family: 'Nunito', sans-serif;
}

#send:hover{
  box-shadow: 0vw 0vw 1vw white;  
  transition: all 1s;
}

.fa-phone-flip{
    font-size: 55px;
}

@media(max-width:1440px){
 img{
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: auto;
    box-shadow: 0vw 0vw 1vw #28D084 ;
}

input{
  width: 85%;
}
}

@media(max-width:1024px){
 img{
    object-fit: cover;
    border-radius: 50%;
    width: 100%;
    height: auto;
    box-shadow: 0vw 0vw 1vw #28D084 ;

}

#icon{
    display: block;
}

input[type="textarea"] {
  width: 75%;
}
input[type="text"]{
width: 75%;
}

}

@media(max-width:768px){

input[type="textarea"] {
  width: 75%;
}
input[type="text"]{
width: 75%;
}

#icon{
    display: flex;
    align-items: center;
}

#width{
width:90%;
}

}

@media(max-width:425px){

input[type="textarea"] {
  width: 75%;
}
input[type="text"]{
width: 75%;
}

#icon{
    display: flex;
    align-items: center;
}

#width{
width:90%;
}
body{
    overflow-y: auto;
     height: 120vh;  
}
main {
    display: flex;
    justify-content: center;
    align-items: center;
  height: 110vh;
  width: 100%;
}

 img{
    object-fit: cover;
    border-radius:0;
    width: 85%;
    height:70%;
    box-shadow: 0vw 0vw 1vw #28D084 ;
}

#left{
    border-right: none;
}

}



</style>
