import React from "react";
import Cards from "./cards.jsx";
import foto4 from "../../img/slide-1.jpg";
import foto5 from "../../img/slide-3.jpg";

let Reviews = () =>{
    return(
        <div class="container-fluid d-flex justify-content-center align-items-center flex-column">
            <div class="row d-flex justify-content-center">
                <div class="col-8 text-center">
                    <h1 class="mb-4">TESTIMONIOS</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam. </p>
                </div>
            </div>
            <div class="row text-center col-11 mt-4">
                <div class="col-12 col-md-4 mb-5">
                <Cards
                     photo={foto4}
                      borderClass="border-0" 
                      startClass="fas fa-quote-left pe-2" 
                      nClase="rounded-circle shadow-1-strong" 
                      altura="150px" anchura="150px" 
                      title={"Alex Morgan"} 
                      job={"web-developer"} 
                      className={"fas fa-quote-left pe-2"}
                      text= {"Ut enim ad minima veniam, quis nostru exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."}/>
                          <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                </div>
                <div class="col-12 col-md-4 mb-5">
                <Cards
                     photo={foto5}
                      borderClass="border-0" 
                      startClass="fas fa-quote-left pe-2" 
                      nClase="rounded-circle shadow-1-strong" 
                      altura="150px" anchura="150px" 
                      title={"Alex Morgan"} 
                      job={"Manager"} 
                      className={"fas fa-quote-left pe-2"}
                      text= {"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti."}/>
                              <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                </div>   
                <div class="col-12 col-md-4 mb-5">
                <Cards
                      photo={foto4}
                      borderClass="border-0" 
                      startClass="fas fa-quote-left pe-2" 
                      nClase="rounded-circle shadow-1-strong" 
                      altura="150px" anchura="150px" 
                      title={"Alex Morgan"} 
                      job={"Engineer"} 
                      className={"fas fa-quote-left pe-2"}
                      text= {"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi."}/>
                            <ul class="list-unstyled d-flex justify-content-center mb-0">
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star fa-sm text-warning"></i>
                                </li>
                                <li>
                                <i class="fas fa-star-half-alt fa-sm text-warning"></i>
                                </li>
                            </ul>
                </div>   
            </div>
        </div>
    )
}

export default Reviews;