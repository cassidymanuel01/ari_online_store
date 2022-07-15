<template>
  <div id="body" class="about container">
    <div id="about-section" class="row mx-auto">
    <div id="about" class="col-md-6 mx-auto">
      <p class="text-start">About...</p>
      <h1>"Just Like Magic"</h1>
      <p>In the winter of 2022 4 goated developers noticed a gap in the Ariana Grande paraphernalia market, with the extremely high demand for these products 'The Goats' created an online store to sell strictly Ariana Grande products. Why? you may ask... for the love of code.</p>
    </div>
    <div id="polaroid" class="card col-md-6 mx-auto">
      <i class="bi bi-instagram"></i>
      <a target="blank" href="https://www.instagram.com/arianagrande"><img id="image" src="../assets/About-Images/Polaroid-of-ari.jpg" 
      class="card-img-top" alt=""></a>
      <div class="card-body">
        <h5 class="fw-bold">ARIANA GRANDE</h5> 
      </div>
    </div>
    </div>
    
    <h2>Happy customers</h2>
    <div id="carousel" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <h3>'John Doe'</h3>
          <p>I came here to look for a gift my girlfriend and my experience on this site was extremely pleasant i had no idea what to look for as i am not an ariana fan but the easy to navigate website made my job much easier and delivery was extremely fast. ps. The about section looks amazing.</p>
          <span>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star"></i>
          </span>
        </div>
        <div class="carousel-item">
          <h3>'Jane Doe'</h3>
          <p>Quality products. Does not feel at all like I'm missing out on make-up or fragrances. There is also nearly always a terrific deal on, so the savings are a big help and the items are always updated so i subscribed.</p>
          <span>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
          </span>
        </div>
        <div class="carousel-item">
          <h3>'Jackie Goe'</h3>
          <p>I had always tried to shop locally and had used the same music store for years. when it started to get more and more difficult to find what i was actually looking for i turned to the internet I found the site and it had everything i was looking for.</p>
          <span>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
          </span>
        </div>
        <div class="carousel-item">
          <h3>'Lee Pho'</h3>
          <p>This is one of my favorite websites to use due to its responsiveness and beautiful about section.I am a web developer and have come accross some horrendeous websites so to see one so elegantly executed it brings joy to my heart. The product I purchased was an album that came out in 2013 and it was deliverd on time within a week i would definately reccomend it to a friend.</p>
          <span>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-fill"></i>
            <i class="bi bi-star-half"></i>
            <i class="bi bi-star"></i>
          </span>
        </div>
      </div>
      <div id="button" class="carousel-indicators">
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
      </div>
    </div>
    <div>
      <!-- Modals -->
    <h1>THE TEAM</h1>
    <div class="row">
      <div class="col-md-6" data-bs-toggle="modal" data-bs-target="#CassidyModal">
        <img id="professionalImage" src="../assets/Cassidy2.jpg" alt="CassidyImage" class="img-fluid my-3">
      </div>
      <div class="col-md-6" data-bs-toggle="modal" data-bs-target="#ReaganModal">
        <img id="professionalImage" src="../assets/Reagan.jpg" alt="ReaganImage" class="img-fluid my-3">
      </div>
      <div class="col-md-6" data-bs-toggle="modal" data-bs-target="#MikhailModal">
        <img id="professionalImage" src="../assets/Mikhail2.jpg" alt="MikhailImage" class="img-fluid my-3">
      </div>
      <div class="col-md-6" data-bs-toggle="modal" data-bs-target="#JaredModal">
        <img id="professionalImage" src="../assets/Jared2.jpg" alt="JaredImage" class="img-fluid my-3">
        </div>
    </div>
    <div id="modals">
    <!-- modal 1 -->
      <div id="CassidyModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Cassidy Manuel</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div class="modal-body row">
              <div class="col-md-6">
                <p>I am 19 years old and currently a student at Life Choices Coding Academy. I am respectful, dedicated and a team player. I always keep a positive mindset when I approach situations. I also always try to enjoy the little things in life. I have always been fascinated by coding ever since I realised that it was not as hard and bad as I thought it would be. I feel that coding is fun. Since then, I have developed an interest in coding.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="../assets/Cassidy2.jpg" alt="CassidyImage">
              </div>
            </div>
            <div class="modal-footer mx-auto">
              <a target="_blank" href="https://www.linkedin.com/in/cassidy-manuel-08b537245/"><button type="button" class="btn btn-primary"><i class="bi bi-linkedin"></i></button></a><a target="_blank" href="https://github.com/cassidymanuel01">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-github"></i></button></a>
            </div>
          </div>
        </div>
      </div>
<!-- modal 2 -->
      <div id="ReaganModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Reagan Carolussen</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div class="modal-body row">
              <div class="col-md-6">
                <p>I am a hard-working, multi-talented individual. I love talking to people and learning new things. I spend a lot of my free time discovering new things as well as developing new hobbies. My passion for programming came when I discovered my love for solving problems and logic-based puzzles. Programming was the one thing that made me feel like I was doing something I genuinely liked.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="../assets/Reagan.jpg" alt="ReaganImage">
              </div>
            </div>
            <div class="modal-footer mx-auto">
              <a target="_blank" href="https://www.linkedin.com/in/reagan-carolussen-03054823a/"><button type="button" class="btn btn-primary"><i class="bi bi-linkedin"></i></button></a>
              <a target="_blank" href="https://github.com/Reagan701/"><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><i class="bi bi-github"></i></button></a>
            </div>
          </div>
        </div>
  	</div>
<!-- modal 3 -->
      <div id="MikhailModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Mikhail Thomas</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div class="modal-body row">
              <div class="col-md-6">
                <p>I am an aspiring web developer taking part in the Life Choices coding internship. I am an athletic, respectful, hardworking and dedicated young man who is committed to improving as a person no matter how difficult the journey is. I grew up in Cape Town, South Africa where i currently reside. I am a practicing massage therapist and I'm currently taking part in the holistic massage course at Healing Hands Academy. I am a jiu jitsu practitioner and coach at Estrategia bjj, this is where I found my passion for coaching, health and fitness. I am using all of these activities to learn lessons that will help me pursue my long term goal of becoming independant.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="../assets/Mikhail2.jpg" alt="MikhailImage">
              </div>
            </div>
            <div class="modal-footer mx-auto">
              <button type="button" class="btn btn-primary"><a target="_blank" href="https://www.linkedin.com/in/mikhail-thomas-177065208/"><i class="bi bi-linkedin"></i></a></button>
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"><a target="_blank" href="https://github.com/MikhailThomas"><i class="bi bi-github"></i></a></button>
            </div>
          </div>
        </div>
      </div>
<!-- modal 4 -->
      <div id="JaredModal" class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title text-center">Jared Isaacs</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
              </button>
            </div>
            <div class="modal-body row">
              <div class="col-md-6">
                <p>Jared Isaacs is a part-time web-developer, app developer and a pinch of graphic designer, since not only does he create them, but design the layout and graphics for them, which gives it that final touch. His passionate about software development, thus large projects gives him the ways and means of learning new methods of coding, new coding techniques and most of all feeds the spermologist within him.</p>
              </div>
              <div class="col-md-6">
                <img class="img-fluid" src="../assets/Jared2.jpg" alt="JaredImage">
              </div>
            </div>
            <div class="modal-footer mx-auto">
              <button type="button" class="btn btn-primary"><a target="_blank" href="https://www.linkedin.com/in/jared-isaacs-854514245/"><i class="bi bi-linkedin"></i></a></button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal"><a target="_blank" href="https://github.com/AkutoBlade"><i class="bi bi-github"></i></a></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  </div>
    <Footer/>

</template>

<script scoped>
  import Footer from '../components/footer.vue'
  export default {
  components:{Footer}
}
</script>
// style //
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Cedarville+Cursive&family=Righteous&display=swap');

div.container{
  padding-right:2rem;
  padding-left:2rem;
}

#body{
  font-family: 'Nunito', sans-serif;
  background-image: url('../assets/About-Images/e3fe0075268b7ec798d7e1242d0cfe09.jpg');
  background-size: cover;
  background-position: center;
  background-repeat:no-repeat;
}
#about-section{
  padding-top: 30px;
  border-top: solid 10px;
  border-top-color: black;
}
#about h1{
  font-size: 50px;
}
#about p{
  font-size: 19px;
}
#polaroid{
  max-width: 260px;
  height: 380px;
  min-height: 370px;
  border: solid;
  border-radius: 0px;
  box-shadow: 3px 3px 3px;
  background-color: whitesmoke;
  font-family: 'Cedarville Cursive', cursive;
}
#polaroid:hover{
  color: black;
}
#polaroid i{
  margin-top: 10px;
  color: #28D084;
}
#image{
  max-height: 300px;
  max-width: 240px;
  margin-top: 10px;
  border: solid;
  border-radius: 0px;
  border-color: black;
}

h2{
  padding: 10px;
  padding-top: 20px;
  font-size: 50px;
}
h3{
  margin: 10px;
}
#carousel{
  margin-bottom: 20px;
  min-height: 255px;
  padding-bottom: 50px;
}
#carousel p{
  font-size: 19px;
}
#carousel i{
  color: gold;
}
#button button{
  background-color: black;
  border-radius: 50%;
  height: 10px;
  width: 10px;
}
a{
  color: black;
  }
  #professionalImage{
    max-height: 414px;
    max-width: 100%;
    aspect-ratio: 1 !important;
    object-fit: cover;
    cursor: pointer;
    border-radius: 10%;
    border: dotted;
    /* transition: all 0.3s linear; */
  }
  #professionalImage:hover{
    border: 3px solid #28D084;
  }
</style>