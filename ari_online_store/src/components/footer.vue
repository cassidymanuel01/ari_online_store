<template>
    <footer>  <section id="footer">
    <div class="container">
      <div class="row text-center text-xs-center text-sm-left text-md-left">
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5 class="fs-4">Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li class="fs-6"><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
            <li class="fs-6"><a href="/about"><i class="fa fa-angle-double-right"></i>About</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
            <li class="fs-6" ><a href=""><i class="fa fa-angle-double-right"></i>Videos</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5 class="fs-4">Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li class="fs-6"><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
            <li class="fs-6"><a href="/about"><i class="fa fa-angle-double-right"></i>About</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
            <li class="fs-6" ><a href=""><i class="fa fa-angle-double-right"></i>Videos</a></li>
          </ul>
        </div>
        <div class="col-xs-12 col-sm-4 col-md-4">
          <h5 class="fs-4">Quick links</h5>
          <ul class="list-unstyled quick-links">
            <li class="fs-6"><a href="/"><i class="fa fa-angle-double-right"></i>Home</a></li>
            <li class="fs-6"><a href="/about"><i class="fa fa-angle-double-right"></i>About</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>FAQ</a></li>
            <li class="fs-6"><a href=""><i class="fa fa-angle-double-right"></i>Get Started</a></li>
            <li class="fs-6" ><a href="https://wwwe.sunlimetech.com" title="Design and developed by"><i class="fa fa-angle-double-right"></i>Imprint</a></li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul class="list-unstyled list-inline social text-center fs-6">
            <li class="list-inline-item"><a href="/"><i class="fa fa-facebook"></i></a></li>
            <li class="list-inline-item"><a href=""><i class="fa fa-twitter"></i></a></li>
            <li class="list-inline-item"><a href=""><i class="fa fa-instagram"></i></a></li>
            <li class="list-inline-item"><a href=""><i class="fa fa-google-plus"></i></a></li>
            <li class="list-inline-item"><a href="" target="_blank"><i class="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        <br>
      </div>  
      <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
          <p class="h6"><u class="sub"><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a Registered MSP/ISO of Elavon, Inc. Western Cape [a wholly owned subsidiary of SA Bancorp, Minneapolis, MN]</p>
          <p class="h6">@copy All right Reversed.<a class="text-green ml-2" href="https://www.lifechoices.co.za/" target="_blank">Life-Choices</a></p>
        </div>
        <br>
      </div>  
    </div>
  </section>
  </footer>
</template>
<script>
export default {
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,300&display=swap');
*{
font-family: 'Nunito', sans-serif;
}
footer {
 background-color: white;
 box-shadow: 0vw -1vw 1vw white ;
}

/* Footer */
section {
    padding: 20px 0;
}

section .section-title {
    text-align: center;
    color:  #28D084;
    margin-bottom: 20px;
    text-transform: uppercase;
}
#footer {
    box-shadow: 0vw -1vw 1vw 1vw white ;
    background:  white!important;
}
#footer h5{
  padding-left: 10px;
    border-left: 3px solid #28D084 ;
    padding-bottom: 0px;
    margin-bottom: 20px;
    color:#28D084 ;
}
#footer a {
    color: #28D084 ;
    text-decoration: none !important;
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
}
#footer ul.social li{
  padding: 3px 0;
}
#footer ul.social li a i {
    margin-right: 5px;
  font-size:25px;
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#footer ul.social li:hover a i {
  font-size:30px;
  margin-top:-10px;
}
#footer ul.social li a,
#footer ul.quick-links li a{
  color:#28D084 ;
}
#footer ul.social li a:hover{
  color:#28D084 ;
}
#footer ul.quick-links li{
  padding: 3px 0;
  -webkit-transition: .5s all ease;
  -moz-transition: .5s all ease;
  transition: .5s all ease;
}
#footer ul.quick-links li:hover{
  padding: 3px 0;
  margin-left:5px;
  font-weight:700;
}
#footer ul.quick-links li a i{
  margin-right: 5px;
}
#footer ul.quick-links li:hover a i {
    font-weight: 700;
}

@media (max-width:767px){
  #footer h5 {
    padding-left: 0;
    border-left: transparent;
    padding-bottom: 0px;
    margin-bottom: 10px;
}
}

.h6{
    color: #28D084;
}

.fs-6{
    color: #28D084;
}

.sub{
    color: #28D084;
}

div.container{
  padding:9em;
}

</style>
