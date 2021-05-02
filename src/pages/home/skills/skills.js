import React, { useEffect, useState} from 'react'
import './skills.css'
import Grid from './../../../components/grid/grid'
import Vars from './../../../vars'
import  Tech from './tech/tech'

let Skills = (props)=>{
    
    //let numberCycle=0;
    //let [state, setState] = useState({});


    //constructor
    let itemsSkills = new Array();
    let dividedItemsSkills = new Array();

    //didmount
    useEffect(()=>{
        
    }, [])
    
    
    const getNumbersOfGrids = ()=>{
        if(itemsSkills.length % 5 === 0)
        {
            return itemsSkills.length / 5;
        }else{
            let result = Number(itemsSkills.length / 5).toFixed(0)

            
            return (Number(result) +1);
        }
    }
    const divideArray = ()=>{

        let sumOfIncrement = 0;
        let lengthItemsSkills = itemsSkills.length;
        let validation = itemsSkills.length;
        let arrayReturn = new Array();        
        for(let iterador = 0; iterador < getNumbersOfGrids(); iterador++ )
        {
            let increment = 0;
            
            if(validation >= 5)
            {
                increment = 5
            }else{
                increment = validation;
            }
            sumOfIncrement = sumOfIncrement + increment;

            let arraySkills = itemsSkills.slice((sumOfIncrement-increment), sumOfIncrement )
            arrayReturn.push(arraySkills);
            validation = (lengthItemsSkills = lengthItemsSkills -5);
        }

        return arrayReturn;
    }
    
    const generateGridEelement = (recorre)=>{
       const retorno =  recorre.map((recorreItem, index)=>{
        return <Tech key={index} icon={recorreItem.icon} nanmeTech={recorreItem.name} ></Tech>
             
        });

        return retorno;
    };

    const generateGrid = ()=>
    {
        
        
        let typeFive=0;
        const retorno = dividedItemsSkills.map((recorre, index)=>{
            let type="grid-";    
            if(recorre.length < 5)
            {
                type = type + `${recorre.length}`
            }else{
                typeFive++;
                
                type = type + `${recorre.length}-${typeFive}`

                if(typeFive === 3)
                {
                    typeFive =0;
                }
            } 
            
            return <Grid key={index} type={type}>
                {
                    
                   generateGridEelement(recorre)
                }
            </Grid>  
          })

          return retorno;
    };

    
    Vars.Paragraphs.home.skills.map(recorre=>{

        recorre.items.forEach(recorreItem=>{
            itemsSkills.push(recorreItem);
        })
    })
    dividedItemsSkills = divideArray();

    
    return (<>
        <h2>I Can Help U With This ...</h2>        
        {        
            
            generateGrid()
        }
      
    </>);
}

export default Skills;