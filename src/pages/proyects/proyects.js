
import React, {Component} from 'react';
import GridProyects from './gridproyects/gridproyects'
import './proyects.css'
import Vars from './../../vars'
export default class Proyects extends Component
{
    constructor(props)
    {
        
        super(props)
        
    }
    componentDidMount()
    {
        
    }

    onHover = (e)=>{
        
        var rect = e.target.getBoundingClientRect();
        var x = e.clientX - rect.left; //x position within the element.
        var y = e.clientY - rect.top;  //y position within the element.

        const degX = this.getGradosToRotate(rect.width/2, 20, x)
        const degY = this.getGradosToRotate(rect.height/2, 20, y)
        
        document.getElementById(e.target.id).style.transform =`perspective(40cm) rotateY(${degX *-1}deg) rotateX(${degY}deg)`
        
    }

    onLeave = (e)=>{
        document.getElementById(e.target.id).style.transform =`perspective(40cm) rotateY(0deg) rotateX(0deg)`    

        
    }

    getGradosToRotate = (valueElement, degrMax, position)=>{
        const factor = valueElement / degrMax
        return degrMax - (position / factor)   
    }

    render()
    {
        this.iterator = 0;
        return (<> 
            <GridProyects>
             {    Vars.Paragraphs.proyects.proyects.map((recorre,index)=>{
                    this.iterator++;
                    if(this.iterator === 5)
                    {
                        this.iterator = 1
                    }
                    const className = `item-${this.iterator}` 
                    
                    return (
                    <div key={recorre.id} id={"proyect-" + recorre.id} onMouseMove={this.onHover} onMouseLeave={this.onLeave}   className={className}> {recorre.id}

                    </div>)
                })}        
            </GridProyects>
        </>);
    }


}