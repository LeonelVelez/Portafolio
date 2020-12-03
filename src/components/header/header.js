import {Component } from 'react';
import {Vars} from './../../vars'
import './header.css' 
import LogoHeader from './../../img/portada/logoHeader.svg'
export default class Header extends Component {  
 menu =[];
 constructor(props) {
    super(props);
    this.menu =  Vars.Menu;
    this.state = {
      Menu: {
        gradosMenu : 'rotateY(90)',
        open: false
      }
    }
    console.log(this.state)
  }

  render() {

    return (
      <div>          
          <header>              
              <img id="logoHeader"  src={LogoHeader} alt="logo of Leonel Velez" ></img>              
              <section id="navBar" className="container row">
                <ul id="nav" className="container row"  style={{transform: this.state.Menu.gradosMenu}}>                
                  {
                    this.menu.map((obje)=>{
                    return <li key={obje.id}>{obje.name}</li>
                    })                                                              
                  }                                          
                </ul>
                <div id="logoMenu" onClick={this.onNav}>
                  <p></p>
                  <p></p>
                </div>
              </section>                            
          </header>                  
      </div>              
    );
  }

  onNav = ()=>{    
    if (!this.state.Menu.open)
    {
      this.OpenMenu()  
    }else{
       this.CloseMenu()     
    }  

  }

  OpenMenu = ()=>{
    this.setState({
      Menu : {
        gradosMenu: 'rotateY(0deg)',
        open : true
      }        
    })      
  }

  CloseMenu = ()=>{
    this.setState({
      Menu : {
        gradosMenu: 'rotateY(90deg)',
          open : false
        }        
      })      
    }
  
}
 
 
