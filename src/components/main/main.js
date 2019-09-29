import React, {Component} from 'react';
import Note from '../note/note';
import './Main.css';

class Main extends Component {

  state = {
    note: '',
    notesArray: [],
		showNotes: false,      
		}


  agregar = () =>{
    const nuevoArray = [...this.state.arrayDeNotas]
    nuevoArray.push(this.state.nota);

    this.setState({
      arrayDeNotas:nuevoArray,
      mostrarNotas:true,
      nota:''
    })
  }

  handleChange = e =>{
  	this.setState({
      nota:e.target.value
    })
	}

  render(){
    return (
      <div className="background">
        <div>To Do List</div>
        <input value={this.state.nota} onChange={this.handleChange}></input>
        <button onClick={this.agregar}>Agregar</button>
        	{this.state.mostrarNotas === true ? <Note array = {this.state.arrayDeNotas} funcion={this.funcionDelPadre}/> : ''}
    	</div>
  	)
  }
}

export default Main;