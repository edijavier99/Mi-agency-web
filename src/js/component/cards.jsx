import React from "react";

let Cards = (props) =>{
    let {photo,title,text} = props
    return(
        <div class="card">
        <img src={photo}/>
        <div class="card-body">
          <h4 class="card-title">{title}</h4>
          <p class="card-text">{text}</p>
        </div>
      </div>
    )
}
export default Cards;