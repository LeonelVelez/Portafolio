import {Component} from 'react'
import './about.css'
export default class About extends Component
{
    constructor(props)
    {
        super(props)
    }

    render()
    {
        return (<> 
            <div id='about' className='container row'>                 
                <h2>ABOUT <br></br> ME </h2>
            </div>
        </>);
    }
}