import {
    FaBootstrap,
    FaNodeJs,
    FaHtml5,
    FaJava,
    
    FaPhp,
    FaReact,
  } from "react-icons/fa";
  import { BiData, BiLogoMongodb   } from "react-icons/bi";

//education donnees 
export const EducationData =[{
    id:1,
    Nom:'BACCALAURÉAT',
    duree:'2018',
    etablisement:'Lycée Aggoune MD Lyazid, Ighil Ali, Bejaia, Algérie' ,
    specialite:'SCIENCE EXPÉRIMENTALE    ',
    couleur:'bg-green-500'
 },{
     id:2,
     Nom:'LICENCE',
     duree:'2018-2021',
     etablisement:'Université Abderrahmane Mira, Bejaia, Algérie',
     specialite:'SYSTÈMES INFORMATIQUES',
    couleur:'bg-blue-600' 
  }
  ,{
    id:3,
    Nom:'Master',
    duree:'2021-2023',
    etablisement:'Université Abderrahmane Mira, Bejaia, Algérie',
    specialite:'génie logiciel',
    couleur:'bg-yellow-500' 
 }

 ] 

//comptétences donnees 

export const competencesDev =[{
   id:1,
   Nom:'Java (SPRING BOOT)',
   pourcentage:70,
   icon:                <FaJava class="w-8 h-8 text-purple-600" />

},{
    id:2,
    Nom:'PHP',
    pourcentage:45,
    icon:                <FaPhp class="w-8 h-8 text-purple-600" />
 
 },{
    id:3,
    Nom:'HTML CSS JS',
    pourcentage:80,
    icon:  <>
    <FaHtml5 class="w-8 h-8 text-purple-600" />
    
    </>
 },{
    id:4,
    Nom:'BOOTSTRAP, TAILWIND CSS',
    pourcentage:75,
    icon:             <FaBootstrap  class="w-8 h-8 text-purple-600" /> 

 },{
    id:5,
    Nom:'REACT JS, REACT NATIVE',
    pourcentage:75,
    icon:               <FaReact class="w-8 h-8 text-purple-600" /> 
 
 },
 {
    id:6,
    Nom:'Nodejs',
    pourcentage:80,
    icon:     <FaNodeJs class="w-8 h-8 text-purple-600" />

 },
 {
    id:7,
    Nom:'MongoDB',
    pourcentage:75,
    icon:                <BiLogoMongodb class="w-8 h-8 text-purple-600" />

 },
 {
    id:8,
    Nom:'MYSQL, ORACLE',
    pourcentage:75,
    icon:                <BiData class="w-8 h-8 text-purple-600" />
 
 },
] 
export const competencesGestion =[{
    id:1,
    Nom:'UML',
    pourcentage:85,
    
 },{
     id:2,
     Nom:'SCRUM',
     pourcentage:75,
     
  }
 ] 

 //projets donnees 

 export const ProjectData =[

{
   id:1,
   Nom:'IShop',
   type:'Site Web Statique ',
   images:[
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848777/Portfolio/Ishop/ishop_landing_gjyjtz.png",
} ,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848793/Portfolio/Ishop/PRODUCT_ISHOP_hyh2oj.png",
} ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848798/Portfolio/Ishop/AUTH_ISHOP_wfqq8s.png",
}      
   ],
   desc:'Site Web statique E-commerce réaliser avec (Html & Css & Bootstrap 4)'
},
{
   id:2,
   Nom:'Souq.com',
   type:'Application Web',
   images:[
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688852013/Portfolio/SOUQ/Suuq_bqtszf.png",
} ,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688851993/Portfolio/SOUQ/auth_azij0f.png",
} ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688851994/Portfolio/SOUQ/CONTACT_hsfvwc.png",
},{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688852017/Portfolio/SOUQ/CAT_lfup5n.png",
} ,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688852011/Portfolio/SOUQ/Produit_qwubyr.png",
}        
   ],
   desc:'Application web E-commerce (Produits neufs et occasions) réaliser avec (Html & Css & Scss & Bootstrap 4 & Php & MySql)'
},   {
   id:3,
   Nom:'Rendoc',
   type:'Appilcation Web ',
   images:[
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848223/Portfolio/Rendoc/Rendoc_g7tkzy.png",
} ,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848223/Portfolio/Rendoc/Rendoc_auth_tklxxu.png",
} ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848217/Portfolio/Rendoc/Rendoc_rdv_auzlkc.png",
}      
   ],
   desc:"Application de E-Santé (Prise de rendez-vous en ligne & Avis médicaux) réaliser avec (NodeJS & MySQL & Html & Css & Bootstrap 4)" 
},
{
   id:4,
   Nom:'Mega Market',
   desc:"Caisse Informatisé réaliser avec (Java & JavaFX & Oracle)  ",
  type:'Application Desktop',
  images:[
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688847326/Portfolio/MegaMarket/Capture_d_%C3%A9cran_2023-07-08_104051_k4owo8.jpg",
} ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688847328/Portfolio/MegaMarket/produits_hi6qvp.jpg",
}  ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688847327/Portfolio/MegaMarket/Vente_lm36my.jpg",
}  ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688847328/Portfolio/MegaMarket/liste_vente_hf48vm.jpg",
}  ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688847326/Portfolio/MegaMarket/authentification_oruoya.jpg",
}      
  ],
  
},
{
   id:5,
   Nom:'Goodswap',
   desc:"Plateforme de charité (don & échange d'objets & espace pour les organisations carritatives) réaliser avec (MongoDB & ExpressJS & React JS &  React Native  & NodeJS) en appliquant (SCRUM & MVC) ",
  type:'Application Mobile/Web',
  images:[
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849053/Portfolio/GOODSWAP/ScreenShot_Tool_-20230622134252_f1ntzq.png",
} ,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849111/Portfolio/GOODSWAP/Login_page_i6wdb4.png",
},
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849687/Portfolio/GOODSWAP/Page_Article_-_Copie_v7mjyx.png",
}
,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849113/Portfolio/GOODSWAP/Page_Contact_gs25kf.png",
}
,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849040/Portfolio/GOODSWAP/Contact_Emetteur_a7c7iu.jpg",
}
,
{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688849056/Portfolio/GOODSWAP/ALLEVENT_omygxn.png",
}
 ,{      image:"https://res.cloudinary.com/digybqksh/image/upload/v1688848954/Portfolio/GOODSWAP/appmobile_jreeil.svg",
}      
  ],
  
},
 ] 
