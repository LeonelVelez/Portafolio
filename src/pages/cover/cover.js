import {Component} from 'react'
import portada from './../../img/mePortada.jpg'
import Vars from './../../vars'
export default class Cover extends Component
{
    constructor(props)   
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                <img src={portada}  alt="Leonel Vélez"></img>
                <section>
                    <h1>
                        {Vars.ParagraphHome.title}
                    </h1>
                </section>
            </div>
        );
    }
}