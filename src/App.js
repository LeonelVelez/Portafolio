import { Component } from 'react';
import Header from './components/header/header'
import Home from './pages/home/home';

class App extends Component {  
  constructor(props)
  {
    
    super(props)    
    this.state = {
      scroll : {
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
        <Header scroll={this.state.scroll} ></Header>       
        <Home></Home>
      </section>      
    );
  }

  componentDidMount()
  {
    this.setState({         
      scroll : {
        height:window.innerHeight,
        width:window.innerWidth,
        scrollX : window.scrollX,
        scrollY : window.scrollY,        
      }             
    })     
    window.addEventListener('scroll', ()=>{            
      this.setState({         
        scroll : {
          ...this.state.scroll,
          scrollX : window.scrollX,
          scrollY : window.scrollY,        
        }       
        
      })     
    })

    window.addEventListener('resize', ()=>{            
      this.setState({         
        scroll : {
          ...this.state.scroll,
          height : window.innerHeight,
          width : window.innerWidth,        
        }               
      })     
    })
      
  }

  
}


 
export default App;
