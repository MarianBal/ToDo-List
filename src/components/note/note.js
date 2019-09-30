import React, {Component} from 'react';
import Button from '../button/button'


import './note.css';

class  Note extends Component {

    render(){
    return (
        <div className="contenedor">
          {this.props.array.map((n, i)=><div className="nota"><Button remove = {this.props.remove} i={i}/>{n}</div>)}
        </div>
    );
    };
}
  export default Note;
