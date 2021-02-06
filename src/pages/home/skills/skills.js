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
        <Grid>
            {
                Vars.Paragraphs.home.skills[0].items.map(x=>{
                    return (
                        <div key={x.id}>skill</div>
                    );
                })
            }
        </Grid>
    </>);
}

export default Skills;