import React, {Component} from 'react';
import Button from '../button/button'


import './note.css';

class  Note extends Component {
    constructor(props){
        super(props)
        this.state = {
            titulo:'Mis notas',
            nota: '',
            arrayDeNotas: [],
            mostrarNota: false,
            funcionEnviadaPorPorps: ()=>console.log('algo')
        }
    }

    componentDidMount(){
        this.setState({
        
        })
    };

    
    render(){
    return (
        <div className="contenedor">
        
        {this.props.array.map(n=><div className="nota"><Button cerrar = {this.props.funcion}/>{n}</div>)}
        </div>
    );
    };
}
  export default Note;
