import React, {Component} from 'react'
import portada from './../../../img/mePortada.jpg'
import Vars from './../../../vars'
import './cover.css'
import { BsArrowDownShort } from "react-icons/bs";
import ContainerViewPort from '../../../components/containerviewPort/containerviewPort';


export default class Cover extends Component
{
    constructor(props)   
    {
        super(props)
        this.cover = React.createRef()
        this.titleCover = React.createRef()
        this.imageCover = React.createRef()
        this.onFocusViewPort = this.onFocusViewPort.bind(this)

    }

    render()
    {
        return (
            <div className="container column" id="cover" ref={this.cover}>
                <div className="container row" id="body" >
                    <img ref={this.imageCover} className="text-left" id="portadaImg" src={portada}  alt="Leonel Vélez"></img>
                    <section >
                        <h1 className="text-rigth" ref={this.titleCover}>
                            {Vars.ParagraphHome.title}
                        </h1>
                    </section>
                </div>                
            <div id="footer" onClick={this.goToLocalComponent}>
                
                <BsArrowDownShort color="var(--color-secondary)" size="60px"  >                    
                </BsArrowDownShort>                             
            </div>                
                <ContainerViewPort type={'cover'} references={this.cover} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                <ContainerViewPort type={'titleCover'} references={this.titleCover} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
                <ContainerViewPort type={'imageCover'} references={this.imageCover} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} ></ContainerViewPort>
            </div>
        );
    }
    onFocusViewPort = (e)=>{
        if(e.type === 'cover' && e.match)
        {
            this.props.onFocusViewPort({colorHeader:{menu:'var(--color-secondary)', nav:'var(--color-secondary)'}, type:e.type})
        }else{
            if(e.type === 'titleCover' && e.match)
            {
                if(window.matchMedia('(max-width:900px)').matches)
                {
                    
                    this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
                }

            }else{
                if(e.type === 'imageCover' && e.match)
                {
                    if(window.matchMedia('(max-width:400px)').matches)
                    {                        
                        this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
                    }   
                }
                         
            }                        
        }
        
    }

    goToLocalComponent = ()=>
    {
        
        this.props.onGoToLocalComponent(
            {cover:
                {
                    top:this.cover.current.getBoundingClientRect().top,
                    bottom: this.cover.current.getBoundingClientRect().bottom,
                    height: this.cover.current.getBoundingClientRect().height
                }
            }
         )
    }
}