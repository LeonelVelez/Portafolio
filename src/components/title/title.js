import React, { Component} from 'react'
import './title.css'
export default class Title extends Component
{
    constructor(props)
    {
        super(props)
        this.title = React.createRef();
        this.state = {
            colorRgba:'',
            luminity:0
        }
        
    }

    render()
    {
        return (<> 
            <div  className='container row title' ref={this.title}
                style={{backgroundImage:   `linear-gradient( rgba(163, 163, 63, ${this.state.luminity}), rgb(255, 255, 0, ${this.state.luminity})), url(${this.props.image})` }}
            >                 
                <h2>{this.props.title}</h2>
            </div>
        </>);
    }
    componentDidMount()
    {
        const Card = this.title.current.getBoundingClientRect().height
        const valueLuminity = Number((this.title.current.getBoundingClientRect().top * -1 / Card).toFixed(2));
        this.setState({
            ...this.state,
            luminity:valueLuminity
        })
    }
    componentDidUpdate(newprops)
    {
        if(newprops.documentInfo !== this.props.documentInfo)       
        {
            
            if(this.title.current.getBoundingClientRect().top <= 0 && this.title.current.getBoundingClientRect().bottom >= 0)
            {                                
                const Card = this.title.current.getBoundingClientRect().height
                const valueLuminity = Number((this.title.current.getBoundingClientRect().top * -1 / Card).toFixed(2));
                this.setState({
                    ...this.state,
                    luminity:valueLuminity
                })
            }         
        }
    }
}