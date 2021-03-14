import React, { useEffect, useState} from 'react'
import './skills.css'
import Grid from './../../../components/grid/grid'
import Vars from './../../../vars'

let Skills = (props)=>{
    
    let numberCycle=0;
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

        {Vars.Paragraphs.home.skills.map(recorre=>{
            
            let itemNumber = 0;
            let typeGrid = '';
            if(recorre.items.length > 5)
            {
                itemNumber  = 5;

            }else{
                itemNumber = recorre.items.length;     
                typeGrid =  `grid-${itemNumber}`
                if(recorre.items.length === 5)
                {
                    numberCycle++;
                    typeGrid = typeGrid + `-${numberCycle}`
                    if(numberCycle === 3)
                    {
                        numberCycle = 0;
                    }                    
                }
                
            }
            
           return <Grid type={typeGrid} key={recorre.id}>
                {
                    recorre.items.map(reccoreItems=>{
                        return   (
                            <div key={ `${recorre.id}-${reccoreItems.id}`}></div>
                        );
                    })
                }
            </Grid>
        })}
      
    </>);
}

export default Skills;