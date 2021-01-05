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
                style={{backgroundImage:   `linear-gradient( rgba(255, 255, 0, ${this.state.luminity}), rgb(255, 255, 0, ${this.state.luminity})), url(${this.props.image})` }}>                 
                <h2>{this.props.title}</h2>
                <ContainerViewPort type='titleAboutMe' references={this.title} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort}></ContainerViewPort>
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

    onFocusViewPort = (e)=>{
        if(e.type==='titleAboutMe' && e.match)
        {            
            this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
            const Card = Number(this.title.current.getBoundingClientRect().height * 0.80).toFixed(2);
            const valueLuminity = Number((this.title.current.getBoundingClientRect().top * -1 /Card ).toFixed(2));
            
            this.setState({
                ...this.state,
                luminity:valueLuminity
            })  
        }else{
            this.setState({
                ...this.state,
                luminity:0
            })  
        }              
    }
    
}