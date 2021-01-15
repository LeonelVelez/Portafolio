import React, {Component} from 'react'
import ContainerCapa from '../../../components/containeCapa/containerCapa';
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';
import imageMe from './../../../img/aboutMe.jpg'
import  './me.css';
export default class Me extends Component
{
    changeCaps = false;
    constructor(props)
    {
        super(props)
        this.state = {capa:[
            {id:1, type:'description', show:false},
            {id:2, type:'imageMe', show:false}                        
        ]}
        this.onFocusViewPort = this.onFocusViewPort.bind(this)        
    }

    render()
    {
        return (
            <>
                <ContainerViewPort type={'me'}  documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} >
                    <section id="me" className="container row" >
                        <div className="child"></div>
                        <ContainerCapa image={imageMe} className="child" id="imagenIlustra" colorCap="var(--color-secondary)" show={this.state.capa.find(x=>x.id===2).show}></ContainerCapa>    
                        <ContainerCapa id="description" className="container column center" background="var(--color-primary)" colorCap="var(--color-secondary)" show={this.state.capa.find(x=>x.id===1).show}  >
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
                        </ContainerCapa>                                                                                                                                
                    </section>
                </ContainerViewPort>
                
            </>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'me' && e.match)
        {
            if(!this.changeCaps)
            {
                let maps = this.state.capa;
                maps.map(x=>{
                    x.show = true;
                })
                console.log(maps)
                this.setState({capa:maps}, ()=>this.changeCaps = true)
            }
            
            if(window.matchMedia('(max-width: 992px)').matches)
            {
                this.props.onFocusViewPort({colorHeader:{menu:'var(--color-secondary)', nav:'var(--color-secondary)'}, type:e.type})
            }else{
                this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'var(--color-secondary)'}, type:e.type})
            }
            
        }        
    }

}