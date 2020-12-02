import {Component} from 'react'
import portada from './../../../img/mePortada.jpg'
import Vars from './../../../vars'
import './cover.css'
export default class Cover extends Component
{
    constructor(props)   
    {
        super(props)
    }

    render()
    {
        return (
            <div className="container row" id="portada">
                <img id="portadaImg" src={portada}  alt="Leonel Vélez"></img>
                <section>
                    <h1>
                        {Vars.ParagraphHome.title}
                    </h1>
                </section>
            </div>
        );
    }
}