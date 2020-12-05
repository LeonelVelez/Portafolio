import {Component} from 'react'
import portada from './../../../img/mePortada.jpg'
import Vars from './../../../vars'
import './cover.css'
import { BsArrowDownShort } from "react-icons/bs";


export default class Cover extends Component
{
    constructor(props)   
    {
        super(props)
    }

    render()
    {
        return (
            <div className="container column" id="cover" >
                <div className="container row" id="body">
                    <img className="text-left" id="portadaImg" src={portada}  alt="Leonel Vélez"></img>
                    <section >
                        <h1 className="text-rigth">
                            {Vars.ParagraphHome.title}
                        </h1>
                    </section>
                </div>                
            <div id="footer">
                
                <BsArrowDownShort color="black" size="60px" >                    
                </BsArrowDownShort>                             
            </div>                
            </div>
        );
    }
}