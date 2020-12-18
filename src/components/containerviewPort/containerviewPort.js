import React, {Component} from 'react'

    class ContainerViewPort extends Component
    {
        constructor(props)
        {
            super(props)                
        }
        render()
        {            
            return (
                <></>
             );         
        }           
        componentDidUpdate(newprops)
        {                        
            if(newprops.documentInfo !== this.props.documentInfo)       
            {
                if(this.props.references.current.getBoundingClientRect().top <= 0 && this.props.references.current.getBoundingClientRect().bottom >= 0)
                {
                    this.props.onFocusViewPort({type:this.props.type});                        
                }
            }            
        }
    }    

export default ContainerViewPort