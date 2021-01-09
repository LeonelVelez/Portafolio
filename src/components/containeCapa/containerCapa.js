import React, {Component} from 'react'

export default class ContainerCapa extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
          <section className="capa" style={{background:`${this.props.color}`}}>
              {this.props.children}
          </section>  
        );
    }
}