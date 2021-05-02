import React, { useEffect, useState} from 'react'
import './tech.css'



const Tech = (props)=>{


    return (<>
            <div>
                <section id="tech">
                    {props.icon}
                </section>
            </div>
        </>);
}



export default Tech;