import React, {Component, useEffect, useState} from 'react'
import './grid.css'

let Grid = (props)=>{
    
    let [state, setState] = useState({
        rows:0,
        colums:5
    });

    //constructor
    useEffect(()=>{
        
    })

    //didmount
    useEffect(()=>{
    
    }, [])

    

    
    return (<>
        <section id='grid'>            
                {props.children}
        </section>
    </>);
}

export default Grid;