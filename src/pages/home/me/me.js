import React, {Component} from 'react'
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';

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
                    <div></div>
                    <div id="imagenIlustra"></div>
                    <div id="description">
                        <h2> Who i'm? How can i help u? </h2>
                        <p> 
                            Well! I'm software engineer, I'm 22 years old and I have worked on many software proyects in Guayaquil, Ecuador.
                            As you can see, I can speak both languages (english and spanish), and this is not the only skill I have. Next,  you can check out my skills and Portafolio.
                            <br></br>
                            <br></br>
                            <span id="cita">
                                "La ignorancia es la cuna del miedo pero a mi no me da miedo preguntar por qué?"
                                <span id="autor" ></span>
                            </span>
                            <br></br>
                            <button>Checkout my Skills</button>
                            <button>Or maybe my Porfafolio</button>
                        </p>
                    </div>
                    <ContainerViewPort type={'me'} references={this.me} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                </section>
            </>
        );
    }
    onFocusViewPort = (e)=>{
        this.props.onFocusViewPort({colorHeader:{menu:'black', nav:'black'}, type:e.type})
    }

}