import React from "react";

let Carousel = (props) =>{
  let {foto1,foto2} = props
    return(
      
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">

  <div class="carousel-item active" style={{ backgroundImage: `url(${foto1})` }} >
      <div class="container">
         <h2>WEB DESING</h2>
         <p>Somos lo que ven de nosotros</p>
      </div>
    </div>

    <div class="carousel-item " style={{ backgroundImage: `url(${foto2})` }} >
      <div class="container">
      <h2>Edi Javier</h2>
        <p>Web developer</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
     
    )
}
export default Carousel;