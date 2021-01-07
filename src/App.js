import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header/header'
import Home from './pages/home/home';
import Services from './pages/services/servicies'
class App extends Component {  
  constructor(props)
  {
    
    super(props)    
    this.onFocusViewPort = this.onFocusViewPort.bind(this)    
    this.onActionMenu = this.onActionMenu.bind(this)
    this.state = {
      documentInfo : {
        scrollY:0,
        scrollX:0,
        height:0,
        width:0
      },

      colorIconsHeader : {menu:'black', nav:'black'}
    }
  }
  render() {
    return (
      <section>
        <BrowserRouter>
          <Header documentInfo={this.state.documentInfo} colorMenu={this.state.colorIconsHeader.menu} colorNav={this.state.colorIconsHeader.nav} ></Header>       
          <Switch>            
            
            <Route exact path='/' render={(props)=>(this.getPage('Home', props))}></Route>
            <Route exact path='/home' render={(props)=>(this.getPage('Home', props))}></Route>
            <Route exact path='/services' render={(props)=>(this.getPage('Services', props))}></Route>
          </Switch>
        </BrowserRouter>
        
      </section>      
    );
  }

  componentDidMount()
  {
    this.setState({
      ...this.state,         
      documentInfo : this.getInformationDocument()             
    })     
    window.addEventListener('scroll', ()=>{            
      this.setState({ 
        ...this.state,        
        documentInfo : this.getInformationDocument()                    
        
      })     
    })

    window.addEventListener('resize', ()=>{            
      this.setState({         
        ...this.state,
        documentInfo : this.getInformationDocument()                            
      })     
    })      
  }

  getInformationDocument= ()=>{
    return {
        height:window.innerHeight,
        width:window.innerWidth,
        scrollX : window.scrollX,
        scrollY : window.scrollY,        
    }
  }  

  onFocusViewPort = (e)=>{
    this.setState({
      ...this.state,
      colorIconsHeader : {menu:e.colorHeader.menu, nav:e.colorHeader.nav}
    })
  }

  getPage = (page,props)=>{
    var pageSolicitada;

    switch (page)
    {
      case 'Home':
        pageSolicitada = <Home {...props} documentInfo={this.state.documentInfo}  onFocusViewPort={this.onFocusViewPort}  ></Home>
        break;
      case 'Services':
        pageSolicitada = <Services {...props}  ></Services>
        break;
    }

    return pageSolicitada

  }

  onActionMenu = (e)=>{

  }

  
}
 
export default App;
