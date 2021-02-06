import React, {Component, useEffect, useState} from 'react'
import './grid.css'

let Grid = (props)=>{
    
    

    //constructor
    useEffect(()=>{
        
    })

    //didmount
    useEffect(()=>{
    
    }, [])

    return (<>
        <section id={props.type} className="grid">            
                {props.children}
        </section>
    </>);

}

export default Grid;