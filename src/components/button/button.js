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

        <i onClick={()=>this.props.remove(this.props.i)} className="fas fa-plus "></i>

        )
    }
  }


export default Button;
