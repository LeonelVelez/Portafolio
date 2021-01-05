import React, {Component} from 'react'
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';
import  './me.css';
export default class Me extends Component
{
    constructor(props)
    {
        super(props)
        this.onFocusViewPort = this.onFocusViewPort.bind(this)
        this.me = React.createRef();
    }

    render()
    {
        return (
            <>
                <section id="me" className="container row" ref={this.me}>
                    <div className="child"></div>
                    <div className="child" id="imagenIlustra"></div>                                                    
                    <ContainerViewPort type={'me'} references={this.me} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                </section>
            </>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'me' && e.match)
        {
            this.props.onFocusViewPort({colorHeader:{menu:'black', nav:'black'}, type:e.type})
        }        
    }

}