let Names =  {
    firtsName: 'Leonel',
    secondName: 'Vélez'
}
let Vars = {
    Menu : [{
        id: 1,
        name : 'Home',
        path: '',
        subMenu:[]        
    },
    {
        id: 2,
        name : 'About me',
        path: '',
        subMenu:[] 
    },
    {
        id: 3,
        name : 'Proyects',
        path: '',
        subMenu:[] 
    },
    {
        id: 4,
        name : 'How Can I Help U',
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
                id: 4,
                name : 'Backend',
                path: '',
            },
            {
                id: 3,
                name : 'SEO',
                path: '',
            },
            {
                id: 4,
                name : 'App Publication And admin',
                path: '',
            },
            {
                id: 4,
                name : 'Web Site Admin',
                path: '',
            },
        ] 
    },
    {
        id: 5,
        name : 'My Cv',
        path: '',
        subMenu:[] 
    },
],
    
    ParagraphHome:{
        title: `Hi, my name is ${Names.firtsName}. I'm Software Developer, Back, Front, Philanthropist & Playboy`
    }
}
export default Vars;
export {Names, Vars} ;
