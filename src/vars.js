import React from 'react'
import { BsHouse, BsPerson,BsFolder,BsPlay,BsLayoutTextWindowReverse } from "react-icons/bs";
let Names =  {
    firtsName: 'Leonel',
    secondName: 'Vélez'
}
let Vars = {
    Menu : [{
        id: 1,
        name : 'Home',
        path: '',
        subMenu:[],
        icon: <BsHouse size='30px' color='black' ></BsHouse>        
    },
    {
        id: 2,
        name : 'About me',
        path: '',
        subMenu:[] ,
        icon: <BsPerson size='30px' color='black' ></BsPerson>        
    },
    {
        id: 3,
        name : 'Proyects',
        path: '',
        subMenu:[] ,
        icon: <BsFolder size='30px' color='black' ></BsFolder>        
    },
    {
        id: 4,
        name : 'U Need This',
        path: '',
        subMenu:[
            {
                id: 1,
                name : 'Development Web',
                path: '',
            },
            {
                id: 2,
                name : 'Development Movil',
                path: '',
            },
            {
                id: 3,
                name : 'Backend',
                path: '',
            },
            {
                id: 4,
                name : 'SEO',
                path: '',
            },
            {
                id: 5,
                name : 'App Publication And admin',
                path: '',
            },
            {
                id: 6,
                name : 'Web Site Admin',
                path: '',
            },
        ] ,
        icon: <BsPlay size='30px' color='black' ></BsPlay>  
    },
    {
        id: 5,
        name : 'My Cv',
        path: '',
        subMenu:[] ,
        icon: <BsLayoutTextWindowReverse size='30px' color='black' ></BsLayoutTextWindowReverse>        
    },
],
    
    ParagraphHome:{
        title: `Hi, my name is ${Names.firtsName}. I'm Software Developer, Back, Front, Philanthropist & Playboy`
    }
}
export default Vars;
export {Names, Vars} ;
