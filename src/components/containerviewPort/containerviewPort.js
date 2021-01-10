import React, {Component} from 'react'

    class ContainerViewPort extends Component
    {
        constructor(props)
        {
            super(props)                
            this.containerView = React.createRef();
        }
        render()
        {            
            return (
                <>
                <section ref={this.containerView}>
                       {this.props.children} 
                </section>
                </>
             );         
        }           
        componentDidUpdate(newprops)
        {
            
            if(newprops.documentInfo !== this.props.documentInfo)       
            {                
                if(this.containerView.current.getBoundingClientRect().top <= 0 && this.containerView.current.getBoundingClientRect().bottom >= 0)
                {
                    this.props.onFocusViewPort({type:this.props.type, match:true});                        
                }else{
                    this.props.onFocusViewPort({type:this.props.type, match:false});                        
                }
            }            
        }
    }    

export default ContainerViewPort