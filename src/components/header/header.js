import React,{Component, useEffect } from 'react';
import {Vars} from './../../vars'
import './header.css' 
import LogoHeader from './../../img/portada/logoHeader.svg'

export default class Header extends Component {  
 menu =[];
 tag = 'BsArrowDownShort'
 constructor(props) {
    super(props);
    this.menuButtonTop = React.createRef();
    
    this.menu =  Vars.Menu;
    this.state = {
      menu: {
        gradosMenu : 'rotateY(90)',
        open: false,
        gradosButtonMenuTop : 'rotateZ(0)',
        gradosButtonMenuBottom : 'rotateZ(0)',
        positionButtonMenuTop : '0px'        
      },
      scroll : this.props.scroll
    }
        
  }

    
  componentDidMount()
  {
    
    window.matchMedia('(max-width: 1200px)').addEventListener('change',(e)=>{
      if(e.matches)
      {
        
        this.menuButtonTop.current.style.top = '20px'
      }
    })

    window.matchMedia('(min-width: 1200px)').addEventListener('change', (e)=>{
      if(e.matches)
      {
        
        this.menuButtonTop.current.style.top = '50px'
      }
    })
    
  }

  
  componentDidUpdate = (newprop)=>
  {    
        
     if(newprop.scroll.scrollY !== this.props.scroll.scrollY)
     {
        if(this.state.menu.open) 
        {
          this.CloseMenu();
        }
     }
     
  }
  
  render() {

    return (
      <div>          
          <header >              
              <img id="logoHeader"  src={LogoHeader} alt="logo of Leonel Velez" ></img>              
              <section id="navBar" className="container row">
                <ul id="nav" className="container row"  style={{transform: this.state.menu.gradosMenu}}>                
                  {
                    this.menu.map((obje)=>{
                    const tagaux = this.tag;
                    return <li key={obje.id}> <a>{obje.icon}</a> {obje.name}</li>                   
                                                                                          
                    })                                                              
                  }                                          
                </ul>
                <div id="logoMenu" onClick={this.onNav}>
                  <p ref={this.menuButtonTop} id='logoTop' style={{transform : this.state.menu.gradosButtonMenuTop}}></p>
                  <p id='logoBottom'style={{transform : this.state.menu.gradosButtonMenuBottom }}></p>
                </div>
              </section>                            
          </header>                  
      </div>              
    );
  }


  
  onNav = ()=>{    
    if (!this.state.menu.open)
    {
      
      this.OpenMenu()  
    }else{
       this.CloseMenu()     
    }  

  }

  OpenMenu = ()=>{
    let top = '0px';
    if(window.matchMedia('(max-width: 1200px)').matches)
    {
      top = '30px';
    }else{
      if(window.matchMedia('(min-width: 1200px)').matches)
      {
        top = '60px';
      }
    }
    this.setState({
      menu : {
        gradosMenu: 'rotateY(0deg)',
        open : true,
        gradosButtonMenuTop: 'rotateZ(405deg)',
        gradosButtonMenuBottom: 'rotateZ(-405deg)'        ,
        positionButtonMenuTop: top
      }        
    }, ()=> {
      
      this.menuButtonTop.current.style.top = this.state.menu.positionButtonMenuTop
      
    })      
  }

  CloseMenu = ()=>{
    
    let top = '0px';
    if(window.matchMedia('(max-width: 1200px)').matches)
    {
      top = '20px';
    }else{
      if(window.matchMedia('(min-width: 1200px)').matches)
      {
        top = '50px';
      }
    }
    this.setState({
      menu : {
        gradosMenu: 'rotateY(90deg)',
        open : false,
        gradosButtonMenuTop: 'rotateZ(0deg)',
        gradosButtonMenuBottom: 'rotateZ(0deg)',
        positionButtonMenuTop: top        
        }        
      }, ()=> {
        this.menuButtonTop.current.style.top = this.state.menu.positionButtonMenuTop                      
      })      
  }

  
  
}
 
 
