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
        this.onFocusViewPort = this.onFocusViewPort.bind(this)
    }

    render()
    {        
        return (
            <div>
                <Cover documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort}></Cover>               
                <Title title={Vars.Menu[1].name.toUpperCase()} image={imageAbout} documentInfo={this.props.documentInfo} onFocusViewPort={this.onFocusViewPort}></Title>
                
            </div>
        );
    }

    onFocusViewPort = (e)=>{
        this.props.onFocusViewPort(e)
    }

    goToLocalComponent()
    {
        
    }

    
}