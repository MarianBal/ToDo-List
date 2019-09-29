import React, {Component} from 'react';
import Button from '../button/button'


import './note.css';

class  Note extends Component {

  // state = {
  //   titulo:'Mis notas',
  //   nota: '',
  //   arrayDeNotas: [],
  //   mostrarNota: false,
  //           funcionEnviadaPorPorps: ()=>console.log('algo')
  //       }
  //   }

  //   componentDidMount(){
  //       this.setState({
        
  //       })
  //   };

    
    render(){
    return (
        <div className="contenedor">
        
        {this.props.array.map((n, i)=><div className="nota"><Button remove = {this.props.remove} i={i}/>{n}</div>)}
        </div>
    );
    };
}
  export default Note;
