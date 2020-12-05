import React,{Component, useEffect } from 'react';
import {Vars} from './../../vars'
import './header.css' 
import LogoHeader from './../../img/portada/logoHeader.svg'

export default class Header extends Component {  
 menu =[];
 tag = 'BsArrowDownShort'
 constructor(props) {
    super(props);
    this.menu =  Vars.Menu;
    this.state = {
      Menu: {
        gradosMenu : 'rotateY(90)',
        open: false,
        gradosButtonMenuTop : 'rotateZ(0)',
        gradosButtonMenuBottom : 'rotateZ(0)'        
      }
    }
    console.log(this.state)
  }

  OnRizable = ()=>{
    this.CloseMenu();
  }

  OnScroll = ()=>{
    this.CloseMenu();
  }
  
  componentDidMount()
  {
    window.addEventListener('resize', this.OnRizable);
    window.addEventListener('scroll', this.OnScroll)
  }

  componentWillUnmount()
  {
    window.removeEventListener('resize', this.OnRizable)
    window.removeEventListener('scroll', this.OnScroll)
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
                    const tagaux = this.tag;
                    return <li key={obje.id}> <a>{obje.icon}</a> {obje.name}</li>                   
                                                                                          
                    })                                                              
                  }                                          
                </ul>
                <div id="logoMenu" onClick={this.onNav}>
                  <p style={{transform : this.state.Menu.gradosButtonMenuTop}}></p>
                  <p style={{transform : this.state.Menu.gradosButtonMenuBottom }}></p>
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
        open : true,
        gradosButtonMenuTop: 'rotateZ(360deg)',
        gradosButtonMenuBottom: 'rotateZ(-360deg)'        
      }        
    })      
  }

  CloseMenu = ()=>{
    this.setState({
      Menu : {
        gradosMenu: 'rotateY(90deg)',
        open : false,
        gradosButtonMenuTop: 'rotateZ(0deg)',
        gradosButtonMenuBottom: 'rotateZ(0deg)'        
        }        
      })      
  }

  
  
}
 
 
