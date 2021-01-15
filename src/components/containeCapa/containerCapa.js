import React, {Component} from 'react'
import {Validate} from 'is-valid-value'
import './containerCapa.css'

export default class ContainerCapa extends Component
{
    constructor(props)
    {
        
        super(props)
        this.state =
         {
             element:{width:'0px', heigh:'100%', background:'transparent', visibility:'hidden', backgroundImage:''}             
         }

         
    }

    render()
    {    
        
        return (
          <section  className={`${this.props.className}`} id={this.props.id} style={{...this.props.style, backgroundImage:`url(${this.state.element.backgroundImage})`}} >
              <div className='capa' style={{...this.props.style, background:`${this.state.element.background}`, visibility:`${this.state.element.visibility}`}}>
                {this.props.children}
                <div id="capa"  style={{ ...this.props.style, background:this.props.colorCap, width:this.state.element.width,height:this.state.element.heigh, transition:'0.7s', display:'inline-block', visibility:'visible'}}></div>
              </div>            
          </section>  
        );
    }
    componentDidMount()
    {
     
     
        
        this.validateShowing()
    }

    validateShowing = ()=>{
        
        
        if(Validate.value(this.props.show))
        {
            if(this.props.show)
            {                
                this.setState({
                    ...this.state,
                    element:{...this.state.element, width:'100%'}                    
                }, ()=>{
                    
                    setTimeout(()=>{
                        
                        this.setState(                            
                            {
                                ...this.state,                                                                
                                element:{...this.state.element, width:'0px', visibility:'visible', background:this.props.background, backgroundImage:this.props.image}                                
                            },
                            ()=>console.log(this.state)                                                    
                         )           
                         
                    },600)
                })
                
            }else{
                this.setState(
                    {
                        ...this.state,
                        element:{...this.state.element, width:'0px'}
                    }
                )
                 
            }
        }
    }
    componentDidUpdate(preProps)
    {
        if(this.props.show !== preProps.show)
        {
            this.validateShowing()
        }
    }
}