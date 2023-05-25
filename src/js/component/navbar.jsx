import React from "react";

let Navbar = (props) =>{
    
    const items = props.items.map(item => (
        <li class="nav-item">
          <a class="nav-link" href={item.url}>
            {item.label}
          </a>
        </li>
      ));
    return(        
          
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <img src={props.logo} style={{ width: '30px', height: '30px' }}/>
  </a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul class="navbar-nav mr-auto">{items}</ul>
  </div>
</div>
</nav>
    )
}

export default Navbar;