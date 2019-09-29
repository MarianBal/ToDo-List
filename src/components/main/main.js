import React, {Component} from 'react';
import Note from '../note/note';
<<<<<<< HEAD

import './Main.css';



class  Main extends Component {
    constructor(props){
        super(props)
        this.state = {
            titulo:'Mis notas',
            nota: '',
            arrayDeNotas: [],
            mostrarNota: false,        }
    }

        componentDidMount(){
            this.setState({
            
            })
        };

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

        funcionDelPadre = () => {
            console.log('soy el padre')
        }
    
    render(){
        return (
            <div>
                <h1>{this.state.titulo} </h1>
                <textarea value={this.state.nota} onChange={this.handleChange}></textarea>
                <button onClick={this.agregar}>Agregar</button>
                {this.state.mostrarNotas === true ? <Note array = {this.state.arrayDeNotas} funcion={this.funcionDelPadre}/> : ''
            }
            </div>
        )
    }
}


=======
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

>>>>>>> f245ea969203577b936e8b3537a1dc052a3fc6e8
export default Main;