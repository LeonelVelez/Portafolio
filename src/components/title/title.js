import {Component} from 'react'
import './title.css'
export default class Title extends Component
{
    constructor(props)
    {
        super(props)
        
    }

    render()
    {
        return (<> 
            <div id='about' className='container row' 
                style={{backgroundImage:   `linear-gradient( rgba(163, 163, 63, 0.2), rgb(255, 255, 0, 0.2)), url(${this.props.image})` }}
            >                 
                <h2>{this.props.title}</h2>
            </div>
        </>);
    }    
}