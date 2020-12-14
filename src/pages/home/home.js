import {Component} from 'react'
import Cover from './cover/cover'
import About from './about/about'
export default class Home extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (
            <div>
                <Cover></Cover>               
                <About></About>    
            </div>
        );
    }
}