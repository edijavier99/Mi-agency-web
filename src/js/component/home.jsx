import React from "react";
import Navbar from "./navbar.jsx";
import Carousel from "./slide.jsx";
import Cards from "./cards.jsx";
import AnimatedText from "./textanimation.jsx";
import Footer from "./footer.jsx";
import Reviews from "./reviews.jsx"

//include images into your bundle
import foto1 from "../../img/foto-1.jpg";
import foto2 from "../../img/foto-2.jpg";
import foto3 from "../../img/slide-2.jpg";
import foto4 from "../../img/slide-1.jpg";
import foto5 from "../../img/slide-3.jpg";


//create your first component
const Home = () => {
	let menu = [
		{ label: "Home" },
		{ label: "Contact Us"},
		{ label: "About Us"},
		{label : "Portafolio"}
	  ];


	return (
		<div>
		  <Navbar items={menu} logo="http://assets.breatheco.de/apis/img/images.php?blob&random&cat=icon&tags=4geeks" />
		  <Carousel foto1={foto1} foto2={foto2} />
		  <div class=" d-flex justify-content-center align-items-center mt-5">
			<div class="row col-11">
				<div class="col-12 col-md-4 mb-3">
					<Cards photo={foto3}
						   altura="100%" anchura="100%" 
						   title={"Personalized design"} 
						   text={"We are the first company in the world been the best in our job"} /> 
				</div>
				<div class="col-12 col-md-4 mb-3">
					<Cards photo={foto4} 
						   altura="100%" anchura="100%" 
						   title={"24/7 Support"} 
						   text={"We bring our clients the best support posible on the way"}/> 
				</div>
				<div class="col-12 col-md-4">
					<Cards photo={foto5} 
						   altura="100%" anchura="100%"
						   title={"Fast delivery"} 
						   text={"Time delivery is aprox 5 working days,we want to offer the bbest service"}/> 
				</div>
			</div>	
		  </div>
		  <AnimatedText frase1={"Guiarte"} frase2={"Avanzar"} frase={"Apoyarte"}/>
		  <Reviews/> 
		  <br></br><br></br><br></br><br></br><br></br>
		  <Footer/>
	
		</div>
		
	);
};

export default Home;
