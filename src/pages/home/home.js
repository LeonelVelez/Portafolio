import {Component} from 'react'
import Cover from './cover/cover'
import Title from './../../components/title/title'
import imageAbout from '././../../img/tittleAboutMe.jpg'
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
                <Title image={imageAbout} title='ABOUT ME' ></Title>
            </div>
        );
    }

    
}