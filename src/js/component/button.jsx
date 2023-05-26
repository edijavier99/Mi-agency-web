import React from "react";

let Button = (props) =>{
    let {name,color,url} = props
    return(
        <a class={`btn btn-${color}`} href={url} role="button">{name}</a>
    )
}
export default Button;