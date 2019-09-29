import React, {Component} from 'react';
import Note from '../note/note';
import './Main.css';

class Main extends Component {

  state = {
    note: '',
    notesArray: [],
		showNotes: false,      
		}


  newToDo= () =>{
  
		this.state.notesArray.push(this.state.note);

    this.setState({

      showNotes:true,
      note:''
    })
  }

  handleChange = e =>{
  	this.setState({
      note:e.target.value
		})
  }
  
remove = i =>{
  this.setState({
    newArray: this.state.notesArray.splice(i,1)
    }) 
}

  render(){
    return (
      <div className="background">
        <div className="title">To Do List</div>
        <input placeholder="New To Do" value={this.state.note} onChange={this.handleChange}></input>
        <button onClick={this.newToDo}>Agregar</button>
        	{this.state.showNotes ? <Note array = {this.state.notesArray} remove={this.remove}/> : ''}
    	</div>
  	)
  }
}

export default Main;