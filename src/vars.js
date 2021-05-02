import React from 'react'
import imgjs from './img/skills/js.png'
import imgreact from './img/skills/react.png'
import imgangular from './img/skills/angular.png'
import imgts from './img/skills/ts.png'
import imgnode from './img/skills/node.png'
import imgcsharp from './img/skills/csharp.png'
import imgnetcore from './img/skills/netcore.jpg'
import imgdocker from './img/skills/docker.png'
import imgpostman from './img/skills/postman.png'
import imggit from './img/skills/git.png'
import imgionic from './img/skills/ionic.jpeg'
import { BsHouse,BsFolder,BsPlay,BsLayoutTextWindowReverse } from "react-icons/bs";
import { DiAngularSimple, DiReact, DiJavascript1, DiNodejs, DiIonic, DiDocker, DiGit} from "react-icons/di";
import { SiTypescript, SiCsharp, SiPostman} from "react-icons/si";


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
                        name:'javascript',
                        icon: <DiJavascript1 size="330px 330px" color="rgb(36, 34, 34)" className="icon" />,
                        detail:'',
                        img: imgjs
                        
                    },
                    {
                        id:2,
                        name:'react',
                        icon: <DiReact size="330px 330px" color="rgb(36, 34, 34)" className="icon" />,
                        detail:'',
                        img: imgreact,
                        imgSize : '600px 350px'

                    },
                    {
                        id:3,
                        name:'angular',
                        icon: <DiAngularSimple size="330px 330px" color="rgb(36, 34, 34)" className="icon" />,
                        detail:'',
                        img: imgangular,
                        imgSize : '680px 350px'

                    },
                    {
                        id:4,
                        name:'typescript',
                        icon: <SiTypescript size="100px 300px" color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'',
                        img: imgts,
                        imgSize : '250px 250px'
                    },
                    {
                        id:5,
                        name:'nodejs',
                        icon: <DiNodejs size="330px 330px"  color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'', 
                        img: imgnode,
                        imgSize : '350px 200px'
                    },
                    {
                        id:6,
                        name:'ionic',
                        icon: <DiIonic  size="330px 330px" color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'',
                        img: imgionic,
                        imgSize : '400px 350px'
                    }
                ],
                
            },
            {
                id:2,
                type:'Back End',
                items:[
                    {
                        id:1,
                        name:'c#',
                        icon:<SiCsharp size="330px 330px" color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'',
                        img: imgcsharp,
                        imgSize : '280px 350px'
                    },
                    {
                        id:2,
                        name:'postman',
                        icon: <SiPostman  size="330px 330px"  color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'',
                        img: imgpostman,
                        imgSize : '400px 350px'
                    },
                    {
                        id:3,
                        name:'docker',
                        icon: <DiDocker size="330px 330px" color="rgb(36, 34, 34)" className="icon" />,
                        detail:'',
                        img: imgdocker,
                        imgSize : '270px 200px'
                    },
                    {
                        id:4,
                        name:'git',
                        icon:<DiGit size="330px 330px"  color="rgb(36, 34, 34)" className="icon"/>,
                        detail:'',
                        img: imggit,
                        imgSize : '390px 300px'
                    }
                   
                    
                ],
                
            } 
            

        ]             
    }    
}
}
export default Vars;
export {Names, Vars} ;
