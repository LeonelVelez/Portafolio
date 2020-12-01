import {Component } from 'react';
 
export default class Header extends Component {
  lista = [{
      id: 1,
      nombre: 'About Me'
  },
  {
    id: 2,
    nombre: 'How i can help u'
  },

  {
    id: 3,
    nombre: 'My Cv'
  },
  
]
  valor;
  render() {

    return (
      <div>
          <input value={this.valor}>

          </input>
          <h1>
                {this.valor}
          </h1>
          <header>
            <ul>                
            {this.lista.map(x=>{
                return <li key={x.id}>
                    {x.nombre}
                </li>
            })}                                            
            </ul>
        </header>
        
      </div>  
      
      
    );
  }
}
 
 
