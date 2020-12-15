import {Component} from 'react'
import Cover from './cover/cover'
import Title from './../../components/title/title'
import imageAbout from '././../../img/tittleAboutMe.jpg'
import {Vars} from './../../vars'
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
                <Title image={imageAbout} title={Vars.Menu[1].name.toUpperCase()} ></Title>
            </div>
        );
    }

    
}