import React from 'react';

import './button.css';


const Button = props=>{
    return <div className="botonCerrar" onClick={props.cerrar}>X</div>
}

export default Button;
