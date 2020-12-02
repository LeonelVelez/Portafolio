import {Component } from 'react';
import Vars from './../../vars'
 
export default class Header extends Component {  
 menu =[];
 constructor(props) {
    super(props);
    this.menu =  Vars.Menu;
    
  }

  render() {

    return (
      <div>          
          <header>
              <li>
                <p>&#60; &#47; &#62;</p>
              </li>  
              <li>
                 <p>

                 <p>
                </p>
                      
                </p>                 
              </li>  
          </header>        
          <ul>                
              {
                this.menu.map((obje)=>{
                return <li key={obje.id}>{obje.name}</li>
                })                                                              
              }                                          
          </ul>
      </div>              
    );
  }
}
 
 
