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
                    <div id="description" className="container center">
                        <section >
                            <h2> Who i'm? How can i help u? </h2>
                            <p> 
                                Well! I'm software engineer, I'm 22 years old and I have worked on many software proyects in Guayaquil, Ecuador.
                                As you can see, I can speak both languages (english and spanish), and this is not the only skill I have. Next,  you can check out my skills and Portafolio.
                                <br></br>
                                <br></br>
                                <span id="cita">
                                    "La ignorancia es la cuna del miedo pero a mi no me da miedo preguntar por qué?"
                                    <br></br>
                                    <span id="autor" >- Roberto Musso</span>
                                </span>
                                <br></br>         
                                <div className="container row center" id="buttons">
                                    <button className="button offline ">Checkout my Skills</button>
                                    <button className="button outline ">Or maybe my Porfafolio</button>                                                        
                                </div>                   
                                
                            </p>
                        </section>
                        
                    </div>                                                
                    <ContainerViewPort type={'me'} references={this.me} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                </section>
            </>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'me' && e.match)
        {
            if(window.matchMedia('(max-width: 992px)').matches)
            {
                this.props.onFocusViewPort({colorHeader:{menu:'black', nav:'black'}, type:e.type})
            }else{
                this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'black'}, type:e.type})
            }
            
        }        
    }

}