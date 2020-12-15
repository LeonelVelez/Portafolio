import { Component } from 'react';
import Header from './components/header/header'
import Home from './pages/home/home';

class App extends Component {  
  constructor(props)
  {
    
    super(props)    
    this.state = {
      documentInfo : {
        scrollY:0,
        scrollX:0,
        height:0,
        width:0
      }
    }
  }
  render() {
    return (
      <section>
        <Header documentInfo={this.state.documentInfo} ></Header>       
        <Home></Home>
      </section>      
    );
  }

  componentDidMount()
  {
    this.setState({         
      documentInfo : this.getInformationDocument()             
    })     
    window.addEventListener('scroll', ()=>{            
      this.setState({         
        documentInfo : this.getInformationDocument()                    
        
      })     
    })

    window.addEventListener('resize', ()=>{            
      this.setState({         
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
}
 
export default App;
