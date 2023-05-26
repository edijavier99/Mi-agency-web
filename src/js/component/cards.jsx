import React from "react";

let Cards = (props) =>{
    let {photo,title,text,job,altura,anchura,nClase,startClass,borderClass} = props
    return(
        <div class={`card ${borderClass}`}>
        <div class="row d-flex justify-content-center"> 
          <div class="col-12 text-center">
          <img class={nClase} width={anchura} height={altura} src={photo}/>
          </div>
        </div>
        <div class="card-body">
          <div class=" container-fluid d-flex align-items-center justify-content-center text-center flex-column">
          <h4 class="card-title">{title}</h4>
          <h6 class="text-primary">{job}</h6>
          <p class="card-text"> <i class={startClass}></i>{text}</p>
        </div>
        </div>
      </div>
    )
}
export default Cards;