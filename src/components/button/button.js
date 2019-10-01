import React from 'react';
import './button.css';

const Button = ({ remove, index }) => {

  return (
    <i onClick={()=>remove(index)} className="fas fa-plus close"></i>
        )
  }


export default Button;
