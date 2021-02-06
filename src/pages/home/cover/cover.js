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
        this.state = {viewPort : {onFocusChildren: false , type: ''}}
        this.cover = React.createRef()        
        this.onFocusViewPort = this.onFocusViewPort.bind(this)

    }

    render()
    {
        return (
            <ContainerViewPort type={'cover'}  documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} >
                <div className="container column" id="cover" ref={this.cover}>
                <div className="container row" id="body" >
                <ContainerViewPort type={'imageCover'}  documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} >
                    <img  className="text-left" id="portadaImg" src={portada}  alt="Leonel Vélez"></img>
                </ContainerViewPort>
                    
                    <section >
                        <ContainerViewPort type={'titleCover'}  documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort} >
                            <h1 className="text-rigth" >
                                {Vars.Paragraphs.home.cover.title}
                            </h1>
                        </ContainerViewPort>                        
                    </section>
                </div>                
                <div id="footer" onClick={this.goToLocalComponent}>                    
                    <BsArrowDownShort color="var(--color-secondary)" size="60px"  ></BsArrowDownShort>                             
                </div>                                                                        
                </div>
            </ContainerViewPort>            
        );
    }
    onFocusViewPort = (e)=>{
        
        switch (e.type) {
            case 'cover':
                    if(e.match)
                    {
                        
                        if(!this.state.viewPort.onFocusChildren)
                        {
                            this.props.onFocusViewPort({colorHeader:{menu:'var(--color-secondary)', nav:'var(--color-secondary)'}, type:e.type})    
                        }                        
                    }
            break;

            case 'titleCover':
                    if(e.match)
                    {
                        if(window.matchMedia('(max-width:900px)').matches)
                        {                          

                            this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
                            this.setState(
                                {viewPort:{onFocusChildren:true, type : e.type}}                                
                            )
                        }
                    }else{
                        if(this.state.viewPort.onFocusChildren && this.state.viewPort.type === 'titleCover' )
                        {
                            this.setState(
                                {viewPort:{onFocusChildren:false, type : e.type}}                                
                            )
                        }
                        

                    }            
            break;

            case 'imageCover':
                    if(e.match)
                    {
                        if(window.matchMedia('(max-width:400px)').matches)
                        {                        
                            this.props.onFocusViewPort({colorHeader:{menu:'white', nav:'white'}, type:e.type})
                            this.setState(
                                {viewPort:{onFocusChildren:true, type : e.type}}                                
                            )
                            
                        }
                    }else{
                        if(this.state.viewPort.onFocusChildren && this.state.viewPort.type === 'imageCover' )
                        {
                            this.setState(
                                {viewPort:{onFocusChildren:false, type : e.type}}                                
                            )
                        }                
                    }
            break;        
            default:

            break;
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