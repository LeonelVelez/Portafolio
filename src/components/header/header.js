import React,{Component, useEffect } from 'react';
import {Vars} from './../../vars'
import './header.css' 
import {ReactComponent as LogoHeader} from './../../img/portada/logoHeader.svg'
import { Link } from 'react-router-dom';

export default class Header extends Component {  
 
 tag = 'BsArrowDownShort'
 constructor(props) {
    super(props);
    this.menuButtonTop = React.createRef();
    this.header = React.createRef();
    
    this.state = {
      menu: {
        gradosMenu : 'rotateY(90)',
        open: false,
        gradosButtonMenuTop : 'rotateZ(0)',
        gradosButtonMenuBottom : 'rotateZ(0)',
        positionButtonMenuTop : '0px' ,
        colorIcons: {menu:'var(--color-secondary)', nav:'var(--color-secondary)'}      
      },
      documentInfo : this.props.documentInfo,
      itemsMenu : Vars.Menu
    }
        
  }

    
  componentDidMount()
  {
    
    window.matchMedia('(max-width: 1320px)').addEventListener('change',(e)=>{
      if(e.matches)
      {
        
        this.menuButtonTop.current.style.top = '20px'
      }
    })

    window.matchMedia('(min-width: 1320px)').addEventListener('change', (e)=>{
      if(e.matches)
      {
        
        this.menuButtonTop.current.style.top = '50px'
      }
    })
    
  }

  
  componentDidUpdate = (newprop)=>
  {               
     if(newprop.documentInfo !== this.props.documentInfo)
     {
        if(this.state.menu.open) 
        {
          this.closeMenu();
        }
     }
     
     if(newprop.colorMenu !== this.props.colorMenu || newprop.colorNav !== this.props.colorNav)          
     {
       
       this.setState(
         {
          ...this.state,
          menu: {...this.state.menu, colorIcons: {menu:this.props.colorMenu, nav:this.props.colorNav}}          
         }
       )
       
     }
  }
  
  render() {

    return (
      <div>          
          <header ref={this.header} >              
              <Link to='/home' onClick={()=>{this.onMovePath('/home')}}><LogoHeader  id='logoHeader' fill={this.state.menu.colorIcons.nav} stroke={this.state.menu.colorIcons.nav} ></LogoHeader></Link>
              
              <section id="navBar" className="container row">
                <ul id="nav" className="container row"  style={{transform: this.state.menu.gradosMenu}}>                
                  {
                    this.state.itemsMenu.map((obje)=>{                    
                    return (<Link to={obje.path}  key={obje.id} className='items'   >
                          <li onClick={()=>{this.onMovePath(obje.path)}} >   <a>{obje.icon}</a> {obje.name}</li>
                       </Link>)                                                                                                            
                    })                                                              
                  }                                          
                </ul>
                <div id="logoMenu" onClick={this.actionMenu}>
                  <p ref={this.menuButtonTop} id='logoTop' style={{transform : this.state.menu.gradosButtonMenuTop, borderColor:this.state.menu.colorIcons.menu, backgroundColor:this.state.menu.colorIcons.menu}}></p>
                  <p id='logoBottom'style={{transform : this.state.menu.gradosButtonMenuBottom, borderColor:this.state.menu.colorIcons.menu, backgroundColor:this.state.menu.colorIcons.menu }}></p>
                </div>
              </section>                            
          </header>                  
      </div>              
    );
  }


  
  actionMenu = ()=>{    
    if (!this.state.menu.open)
    {
      
      this.openMenu()  
    }else{
       this.closeMenu()     
    }  

  }

  openMenu = ()=>{
    let top = '0px';
    let colorMenu = 'var(--color-secondary)';
    if(window.matchMedia('(max-width: 1320px)').matches)
    {
      top = '30px';
      
    }else{
      if(window.matchMedia('(min-width: 1320px)').matches)
      {
        colorMenu = this.state.menu.colorIcons.menu
        top = '60px';
      }
    }
    this.setState({
      menu : {
        ...this.state.menu,
        gradosMenu: 'rotateY(0deg)',
        open : true,
        gradosButtonMenuTop: 'rotateZ(405deg)',
        gradosButtonMenuBottom: 'rotateZ(-405deg)'        ,
        positionButtonMenuTop: top,
        colorIcons :{...this.state.menu.colorIcons, menu:colorMenu}
        
      }        
    }, ()=> {
      
      this.menuButtonTop.current.style.top = this.state.menu.positionButtonMenuTop
      this.changeZIndexHeader('2')
    })      
  }

  closeMenu = ()=>{
    
    let top = '0px';
    if(window.matchMedia('(max-width: 1320px)').matches)
    {
      top = '20px';
    }else{
      if(window.matchMedia('(min-width: 1320px)').matches)
      {
        top = '50px';
      }
    }
    this.setState({
      menu : {
        ...this.state.menu,
        gradosMenu: 'rotateY(90deg)',
        open : false,
        gradosButtonMenuTop: 'rotateZ(0deg)',
        gradosButtonMenuBottom: 'rotateZ(0deg)',
        positionButtonMenuTop: top,
        colorIcons :{...this.state.menu.colorIcons, menu:this.props.colorMenu}        
        }        
      }, ()=> {
        this.menuButtonTop.current.style.top = this.state.menu.positionButtonMenuTop                      
        this.changeZIndexHeader('1')
      })      
  }

  onMovePath = (e)=>{
    this.closeMenu()
    window.scroll({
      top:0,
      left:0,
      behavior:'smooth'
    })    
  }

  changeZIndexHeader = (index)=>{
    if(window.matchMedia('(max-width: 538px)').matches)
    {
      this.header.current.style.zIndex = index
    }
    
  }
  

  
  
}
 
 
