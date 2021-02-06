import React, { useEffect, useState} from 'react'
import './skills.css'
import Grid from './../../../components/grid/grid'
import Vars from './../../../vars'

let Skills = (props)=>{
    
    let [state, setState] = useState({});
    //constructor
    useEffect(()=>{
        
    })

    //didmount
    useEffect(()=>{
        
    }, [])

    //didupdate
    

    
    return (<>
        <h2>I Can Help U With This ...</h2>
        <Grid type="grid-5-1">
            {
                Vars.Paragraphs.home.skills[0].items.map(x=>{
                    return (
                        <div key={x.id}></div>
                    );
                })
            }
        </Grid>
        <Grid type="grid-5-2">
            {
                Vars.Paragraphs.home.skills[0].items.map(x=>{
                    return (
                        <div key={x.id}></div>
                    );
                })
            }
        </Grid>
        <Grid type="grid-5-3">
            {
                Vars.Paragraphs.home.skills[0].items.map(x=>{
                    return (
                        <div key={x.id}></div>
                    );
                })
            }
        </Grid>
    </>);
}

export default Skills;