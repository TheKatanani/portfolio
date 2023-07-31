// images 
import upwork from '../assets/images/Upwork.png'
import brand from '../assets/images/brand.png'
import game from '../assets/images/game.png'
import resturant from '../assets/images/resturant.png'
import test from '../assets/images/Screenshot 2023-07-28 145654.png'
import test2 from '../assets/images/Screenshot 2023-07-28 160436.png'
import test3 from '../assets/images/Screenshot 2023-07-28 171838.png'
import test4 from '../assets/images/Screenshot 2023-07-29 172617.png'

export const info = {
  name:"Mohammed Katanani",
  jobTitle:"Front-End Developer",
  discription:"Hello, and welcome to my portfolio! My name is Mohammed Katanani, and I'm a front-end developer skilled in React, Redux, HTML, CSS, and JavaScript. My portfolio showcases examples of my work in development and user experience. Let's collaborate! Please feel free to contact me with any questions or opportunities.",
  facebock:"https://www.facebook.com/MohammedKatanani10",
  instagram:"https://www.instagram.com/mohammed_katanani",
  linkedin:"https://www.linkedin.com/in/mohammed-katanani",
  github:"https://github.com/mohammed-katanani",
}
export const MenuItems =[
  {path:'about',name:'ABOUT ME'},
  {path:'resume',name:'RESUME'},
  {path:'projects',name:'PROJECTS'},
  {path:'contact',name:'CONTACT'},
  {path:'portfolio',name:'PORTFOLIO'},
]
export const porjects =[
  {
    img:test3,
    img2:upwork,
    skills:["json-server","styled-component","react","redux","authantication"],
    title:"Upwork Clone", 
    subTitle:"Freelance Platform",
    discription:["UpworkP1", "UpworkP2", "UpworkP3"] ,
    demo:"https://gsg-upwork.netlify.app",
    repo:"https://github.com/Mohammed-katanani/Upwork"
  },
  {
    img:test2,
    img2:brand,
    skills:["two Themes","styled-component","react","responsive"],
    title:"Brand(AliExpress clone)", 
    subTitle:"e-commerce website",
    discription:["BrandP1", "BrandP2", "BrandP3","BrandP4","BrandP5","BrandP6"] ,
    demo:"https://brand-ali-express-clone.netlify.app",
    repo:"https://github.com/Mohammed-katanani/ecommerceProject"
  },
  {
    img:test4,
    img2:game,
    skills:["authantication","class coomponents","react"],
    title:"PS-Game", 
    discription:["PS-GameP1", "PS-GameP2", "PS-GameP3","PS-GameP4"] ,
    demo:"https://ps-game.netlify.app",
    repo:"https://github.com/Mohammed-katanani/ps-game"
  },
  {
    img:test,
    img2:resturant, 
    skills:["responsive","class coomponents","react"],
    title:"Vegan Restaurant Website", 
    discription:["RestaurantP1", "RestaurantP2"] ,
    demo:"https://vegan-restaurant-mk.netlify.app",
    repo:"https://github.com/Mohammed-katanani/vegan-restaurant"
  },
]

export const portfolio =[
  {
    img:upwork,
    skills:["json-server","styled-component","react","redux","authantication"],
    title:"Upwork Clone", 
    discription:"" ,
    demo:"https://gsg-upwork.netlify.app",
    repo:"https://github.com/Mohammed-katanani/Upwork"
  },
  {
    img:upwork,
    skills:["Html","css"],
    title:"Upwork Clone", 
    discription:"" ,
    demo:"https://gsg-upwork.netlify.app",
    repo:"https://github.com/Mohammed-katanani/Upwork"
  },
]