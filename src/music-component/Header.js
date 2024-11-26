import React,{Component} from 'react';
import './Header.css'; 

class Header extends Component{
    constructor(){
        super()
        this.state={                    
            title:'React App',         
            userInput:'Plz. enter Product to search'  
        }
    }
    
    inputChange=(event)=>{ 
        this.setState({userInput:event.target.value ? event.target.value : 'Plz.enter Product to search'})
    }
    render(){ 
        return(
            <div>
                <center>
                    <h1> Music Store</h1>
                    <center>
                        <input placeholder="Product to Search"
                        onChange={this.inputChange}/>  
                    </center>
                    <p>{this.state.userInput}</p>   
                </center>
                <hr/>
            </div>
        )
    }
}

export default Header;