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

handleTest =e => e.charCode === 13 ? this.newToDo() : '';


  render(){

    return (
      <div className="background">
        <input placeholder="New To Do" value={this.state.note} onChange={this.handleChange}onKeyPress={this.handleTest}></input>
        <i onClick={this.newToDo} className="fas fa-plus"></i>
        	{this.state.showNotes ? <Note array = {this.state.notesArray} remove={this.remove}/> : ''}
    	</div>
  	)
  }
}

export default Main;
