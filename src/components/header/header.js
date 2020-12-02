import {Component } from 'react';
import {Vars} from './../../vars'
import './header.css' 
import LogoHeader from './../../img/portada/logoHeader.svg'
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
              <li >
                <img id="logoHeader"  src={LogoHeader} alt="logo of Leonel Velez" >
                </img>
              </li>  
              <li>
                <div id="logoMenu">
                  <p></p>
                  <p></p>
                </div>
                 
              </li>  
          </header>        
          <ul id="nav" >                
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
 
 
