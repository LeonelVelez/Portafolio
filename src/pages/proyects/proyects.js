
import React, {Component} from 'react';
import GridProyects from './gridproyects/gridproyects'
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
                    console.log(className)
                    console.log(recorre.id)
                    return (<div key={recorre.id} className={className}> {recorre.id}</div>)
                })} 

       
            </GridProyects>
        </>);
    }


}