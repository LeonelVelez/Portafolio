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
    window.addEventListener('scroll', ()=>{            
      this.setState({
        scroll : {
          scrollX : window.scrollX,
          scrollY : window.scrollY,
        }
      })     
    })
  }

  
}


 
export default App;
