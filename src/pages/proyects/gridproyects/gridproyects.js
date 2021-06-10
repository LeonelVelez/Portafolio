    
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
        this.lengthRows = 0;
        this.addRows();
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
        const mult = 16 + 1;
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
                        gridRowFromItem1 = 1;
                        gridRowToItem1 = 7;
                    }else{
                        
                        gridRowFromItem1 = gridRowFromItem1+ mult;                    
                        gridRowToItem1 = gridRowToItem1 + mult;
                    }
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem1}/${gridRowToItem1}`}});
                    
                case 'item-2':
                    if(iteratorGrid === 1)
                    {
                        gridRowFromItem2 = 4;
                        gridRowToItem2 = 10;
                    }else{
                        gridRowFromItem2 = gridRowFromItem2 + mult;                    
                        gridRowToItem2 = gridRowToItem2 + mult;
                    }
                    
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem2}/${gridRowToItem2}`}});
                    

                case 'item-3':
                    if(iteratorGrid === 1)
                    {
                        gridRowFromItem3 = 8;
                        gridRowToItem3 = 14;
                    }else{
                        gridRowFromItem3 = gridRowFromItem3 + mult;                    
                        gridRowToItem3 = gridRowToItem3 + mult;
                    }
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem3}/${gridRowToItem3}`}});
                    

                case 'item-4':
                    if(iteratorGrid === 1)
                    {
                        gridRowFromItem4 = 11;
                        gridRowToItem4 = 17;
                    }else{
                        gridRowFromItem4 = gridRowFromItem4 + mult;                    
                        gridRowToItem4 = gridRowToItem4 + mult;
                    }
                    
                    
                    return React.cloneElement(children, {style:{gridRow: `${gridRowFromItem4}/${gridRowToItem4}`}});
                    
            }                    
            
        })
    }

    addRows()
    {
        this.props.children.forEach(children=>{
            switch(children.props.className)
            {
    
                case 'item-1':                                       
                    this.lengthRows = this.lengthRows + 7
                    break;
                    
                case 'item-2':
                    this.lengthRows = this.lengthRows + 3
                    break;
                    
    
                case 'item-3':
                    this.lengthRows = this.lengthRows + 4
                    break;
                    
    
                case 'item-4':
                    this.lengthRows = this.lengthRows + 2
                    break;
                    
            }   
        })

    }


}