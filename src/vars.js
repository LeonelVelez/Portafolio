import React from 'react'
import { BsHouse,BsFolder,BsPlay,BsLayoutTextWindowReverse } from "react-icons/bs";
const Names =  {
    firtsName: 'Leonel',
    secondName: 'Vélez'
}
const Vars = {
    Menu : [{
        id: 1,
        name : 'Home',
        path: '/home',
        
        subMenu:[],
        icon: <BsHouse size='30px' color='black' ></BsHouse>        
    },    
    {
        id: 3,
        name : 'Proyects',
        path: '/proyects',        
        subMenu:[] ,
        icon: <BsFolder size='30px' color='black' ></BsFolder>        
    },
    {
        id: 4,
        name : 'U Need This',
        path: '/services',        
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
        path: 'cv',
        subMenu:[] ,
        icon: <BsLayoutTextWindowReverse size='30px' color='black' ></BsLayoutTextWindowReverse>        
    },
],

Paragraphs:
{
    home:{

        cover:{
            title: `Hi, my name is ${Names.firtsName}. I'm Software Developer, Back, Front, Philanthropist & Playboy`
        },
        me:{
            tile:`Who i'm? How can i help u?`,
            body:`Well! I'm software engineer, I'm 22 years old and I have worked on many software proyects in Guayaquil, Ecuador.
            As you can see, I can speak both languages (english and spanish), and this is not the only skill I have. Next,  you can check out my skills and Portafolio.`,
            footer:{
                cita: `"La ignorancia es la cuna del miedo pero a mi no me da miedo preguntar por qué?"`,
                autor: `Roberto Musso`
            }
        },
        skills:
        [
            {
                id:1,
                type:'Web Development',
                items:[
                    {
                        id:1,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:2,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''

                    },
                    {
                        id:3,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:4,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:5,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    }
                ],
                
            },
            {
                id:2,
                type:'Web Development',
                items:[
                    {
                        id:1,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:2,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:3,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:4,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:5,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    }
                ],
                
            }  ,
            {
                id:3,
                type:'Web Development',
                items:[
                    {
                        id:1,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:2,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:3,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:4,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:5,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:6,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:7,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    {
                        id:8,
                        name:'',
                        icon:'',
                        detail:'',
                        img: ''
                    },
                    
                ],
                
            } 
            

        ]             
    }    
}
}
export default Vars;
export {Names, Vars} ;
