import React, { useEffect, useState} from 'react'
import './tech.css'



const Tech = (props)=>{

    let name = props.nanmeTech;
    if(props.nanmeTech.length > 0)
    {
        name = name[0].toUpperCase()  + name.substr(1).toLowerCase();

    }
    return (<>
            <div>
                <section id="tech">
                    <section className='descripcion'>
                        <p>{name}</p>
                    </section>
                    <p id="icon"></p>                    
                    < > {props.icon} </>
                     
                </section>
            </div>
        </>);
}



export default Tech;