import React, { Component} from 'react'
import ContainerViewPort from '../containerviewPort/containerviewPort';

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
        this.onFocusViewPort = this.onFocusViewPort.bind(this)
        
    }

    render()
    {
        return (<>         
            <div ref={this.title} className='container row title' 
                style={{backgroundImage:   `linear-gradient( rgba(163, 163, 63, ${this.state.luminity}), rgb(255, 255, 0, ${this.state.luminity})), url(${this.props.image})` }}>                 
                <h2>{this.props.title}</h2>
                <ContainerViewPort references={this.title} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort}></ContainerViewPort>
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

    onFocusViewPort = ()=>{
        
        this.props.onFocusViewPort({nameComponent: 'titleAbout', colorHeader:'white'});                        
        const Card = this.title.current.getBoundingClientRect().height
        const valueLuminity = Number((this.title.current.getBoundingClientRect().top * -1 / Card).toFixed(2));
        this.setState({
            ...this.state,
            luminity:valueLuminity
        })        
    }
    
}