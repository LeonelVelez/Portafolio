import {Component} from 'react'
import Cover from './cover/cover'
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
            </div>
        );
    }
}