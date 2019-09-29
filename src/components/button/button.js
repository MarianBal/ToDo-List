import React, { Component } from 'react';

import './button.css';



class Button extends Component {

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
  remove = e =>{
      const i = this.state.notesArray(e);
      this.state.notesArray(i, 1);
  }
  
  
    render(){
      return (
   
          <div className="close" onClick={()=>this.props.remove(this.props.i)} >X</div>

        )
    }
  }
  

export default Button;
