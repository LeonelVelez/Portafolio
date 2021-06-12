    
import React, {Component} from 'react';
import './gridproyects.css'

export default class GridProyects extends Component
{
    constructor(props)
    {
        super(props)

        this.props.children.forEach(re=>{
            console.log(re);
        })
        
        if(window.matchMedia("(min-width: 1200px)").matches)
        {
            this.addRows(0);
        }
        if(window.matchMedia("(max-width: 1200px)").matches)
        {
            this.addRows(1);
        }
        if(window.matchMedia("(max-width: 500px)").matches)
        {
            this.addRows(2);
        }

        window.matchMedia("(min-width: 1200px)").addEventListener('change', (x)=>{
            if(x.matches)
            {
                this.addRows(0);
            }            
        })
        window.matchMedia("(max-width: 1200px)").addEventListener('change', (x)=>{
            if(x.matches)
            {
                this.addRows(1);
            }            
        })
        window.matchMedia("(max-width: 500px)").addEventListener('change', (x)=>{
            if(x.matches)
            {
                this.addRows(2);
            }            
        })
        
    }
    render()
    {
        this.iterator = 0;
        this.iteratorGrid = 1;
        return (<> 
            <section id="gridProyects" style={{gridTemplateRows : `repeat(${this.lengthRows},90px)`}}>
                {this.renderChildren(this.iterator, this.iteratorGrid)}              
            </section>
        
        </>);
    }

    renderChildren(iterator, iteratorGrid)
    {
        
        var gridRowFromItem1 = 0;
        var gridRowToItem1 = 0;

        var gridRowFromItem2 = 0;
        var gridRowToItem2 = 0;

        var gridRowFromItem3 = 0;
        var gridRowToItem3 = 0;

        var gridRowFromItem4 = 0;
        var gridRowToItem4 = 0;
        let mult = 0;
        if(window.matchMedia("(max-width: 1200px)").matches)
        {
            if(window.matchMedia("(max-width: 500px)").matches)
            {
                mult = 16;
            }else{
                mult = 24;
            }
            
        }else{
            mult = 16 + 1;
        }
        
        return this.props.children.map(children => {
            
            iterator++;
            if(iterator === 5)
            {
                iterator = 1;
                iteratorGrid ++;
            }
            
            switch(children.props.className)
            {

                case 'item-1':
                    if(iteratorGrid === 1)
                    {
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            
                            if(window.matchMedia("(max-width: 500px)").matches)
                            {
                                gridRowFromItem1 = 1;
                                gridRowToItem1 = 4;
                            }else{
                                gridRowFromItem1 = 1;
                                gridRowToItem1 = 6;
                            }
                            
                        }else{
                            gridRowFromItem1 = 1;
                            gridRowToItem1 = 7;
                        }
                        
                    }else{
                        
                        gridRowFromItem1 = gridRowFromItem1+ mult;          
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            if((window.matchMedia("(max-width: 500px)").matches))
                            {
                                gridRowToItem1 = gridRowFromItem1 + 3;
                            }else{
                                gridRowToItem1 = gridRowFromItem1 +5;
                            }

                            
                        }else{
                            gridRowToItem1 = gridRowToItem1 + mult;
                        }          
                        
                    }
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem1}/${gridRowToItem1}`}});
                    
                case 'item-2':
                    if(iteratorGrid === 1)
                    {
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            
                            if(window.matchMedia("(max-width: 500px)").matches)
                            {
                                gridRowFromItem2 = 5;
                                gridRowToItem2 =8;
                            }else{
                                gridRowFromItem2 = 7;
                                gridRowToItem2 = 12;
                            }
                        }else{
                            gridRowFromItem2 = 4;
                            gridRowToItem2 = 10;
                        }
                        
                    }else{
                        gridRowFromItem2 = gridRowFromItem2 + mult;                    
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            if((window.matchMedia("(max-width: 500px)").matches))
                            {
                                gridRowToItem2 = gridRowFromItem2 + 3;
                            }else{
                                gridRowToItem2 = gridRowFromItem2 +5;
                            }
                        }else{
                            gridRowToItem2 = gridRowToItem2 + mult;
                        }          
                    }
                    
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem2}/${gridRowToItem2}`}});
                    

                case 'item-3':
                    if(iteratorGrid === 1)
                    {
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            
                            if(window.matchMedia("(max-width: 500px)").matches)
                            {
                                gridRowFromItem3 =9;
                                gridRowToItem3 = 12;
                            }else{
                                gridRowFromItem3 =13;
                                gridRowToItem3 = 18;
                            }
                        }else{
                            gridRowFromItem3 = 8;
                            gridRowToItem3 = 14;
                        }
                        
                    }else{
                        gridRowFromItem3 = gridRowFromItem3 + mult;                    
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            if((window.matchMedia("(max-width: 500px)").matches))
                            {
                                gridRowToItem3 = gridRowFromItem3 + 3;
                            }else{
                                gridRowToItem3 = gridRowFromItem3 +5;
                            }
                        }else{
                            gridRowToItem3 = gridRowToItem3 + mult;
                        }          
                    }
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem3}/${gridRowToItem3}`}});
                    

                case 'item-4':
                    if(iteratorGrid === 1)
                    {
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            
                            if(window.matchMedia("(max-width: 500px)").matches)
                            {
                                gridRowFromItem4 = 13;
                                gridRowToItem4 =16;
                            }else{
                                gridRowFromItem4 = 19;
                                gridRowToItem4 = 24;
                            }
                        }else{
                            gridRowFromItem4 = 11;
                            gridRowToItem4 = 17;
                        }
                        
                    }else{
                        gridRowFromItem4 = gridRowFromItem4 + mult;                    
                        if(window.matchMedia("(max-width: 1200px)").matches)
                        {
                            if((window.matchMedia("(max-width: 500px)").matches))
                            {
                                gridRowToItem2 = gridRowFromItem4 + 3;
                            }else{
                                gridRowToItem2 = gridRowFromItem4 +5;
                            }
                        }else{
                            gridRowToItem4 = gridRowToItem4 + mult;
                        }          
                    }
                    
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem4}/${gridRowToItem4}`}});
                    
            }                    
            
        })
    }

    addRows(type)
    {
        this.lengthRows = 0;
        this.props.children.forEach(children=>{
            switch(children.props.className)
            {
    
                case 'item-1':                 

                    switch(type)
                    {
                        case 0:
                            this.lengthRows = this.lengthRows + 7;
                        break;

                        case 1:
                            this.lengthRows = this.lengthRows + 6;
                        break;

                        case 2:
                            this.lengthRows = this.lengthRows + 4;
                        break;

                    }
                    
                    break;
                    
                case 'item-2':
                    switch(type)
                    {
                        case 0:
                            this.lengthRows = this.lengthRows + 3;
                        break;

                        case 1:
                            this.lengthRows = this.lengthRows + 6;
                        break;

                        case 2:
                            this.lengthRows = this.lengthRows + 4;
                        break;

                    }
                    break;
                    
    
                case 'item-3':
                    switch(type)
                    {
                        case 0:
                            this.lengthRows = this.lengthRows + 4;
                        break;

                        case 1:
                            this.lengthRows = this.lengthRows + 6;
                        break;

                        case 2:
                            this.lengthRows = this.lengthRows + 4;
                        break;

                    }
                    break;
                    
    
                case 'item-4':
                    switch(type)
                    {
                        case 0:
                            this.lengthRows = this.lengthRows + 2;
                        break;

                        case 1:
                            this.lengthRows = this.lengthRows + 6;
                        break;

                        case 2:
                            this.lengthRows = this.lengthRows + 4;
                        break;
                    }       
                    
                    break;
                    
            }   
        })

    }


}