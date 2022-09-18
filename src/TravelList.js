import { Component } from 'react';
import marker from './marker.png';
import swal from 'sweetalert';

export class TravelList extends Component{
    state = {
        userInput: '',
        list: []
    }
    addItem(input){
        if(input===''){
          swal({
            icon: 'error',
            title: 'Oops...',
            text: 'Please, enter an item!'
        })}
        else{
            let array = this.state.list;
            array.push(input)
            this.setState({list: array, userInput:''})
        }
    }
    deleteItem(){
        let array = this.state.list;
        array.length = 0;
        this.setState({list: array})
    }
    crossedWord(e){
        const li = e.target;
        li.classList.toggle('crossed')
    }
    onChangeEvent(e){
        this.setState({userInput: e})
    }
    onFormSubmit(e){
        e.preventDefault();
    }
    render(){
        return(<div>
            <form onSubmit = {this.onFormSubmit}>
                <div className='box'>
                <input onChange={(e)=>{this.onChangeEvent(e.target.value)}}
                 value={this.state.userInput} type='text' placeholder='Where to travel?'/>
                </div>
                <div className='box'>
                 <button onClick={()=>{this.addItem(this.state.userInput)}} className='btn add'>Add</button>
                </div>
                   <ul>
                    {this.state.list.map((item, i) => 
                    <li onClick={this.crossedWord} key={i}><img src={marker} width='30px' alt=''/>{item}</li>)}
                    </ul> 
                <div className='box'>
                    <button onClick={()=>{this.deleteItem()}} className='btn delete'>Delete</button>    
                </div>  
            </form>
        </div>)
    }
}