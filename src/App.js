import { Component } from 'react';
import Header from './components/header/header'
import Me from './pages/me/me';


class App extends Component {
  
  render() {
    return (
      <section>
        <Header></Header>       
        <Me></Me> 
      </section>
      
    );
  }
}
 
export default App;
