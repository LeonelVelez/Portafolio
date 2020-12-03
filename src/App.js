import { Component } from 'react';
import Header from './components/header/header'
import Home from './pages/home/home';

class App extends Component {
  
  render() {
    return (
      <section>
        <Header></Header>       
        <Home></Home>
      </section>
      
    );
  }
}
 
export default App;
