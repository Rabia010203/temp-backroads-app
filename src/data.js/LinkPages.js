import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const LinkPages = [
    {id:1, href:"#home", text: "home"},
    {id:2, href:"#about", text: "about"},
    {id:3, href:"#services", text: "services"},
    {id:4, href:"#tours", text: "tours"},

]
export const socialLinks = [
    {id:1, href:"https://www.twitter.com", classlocation:"fab fa-twitter"},
    {id:2, href:"https://www.facebook.com", classlocation:"fab fa-facebook"},
    {id:3, href:"https://www.instagram.com", classlocation:"fab fa-squarespace"},
    
]
export const services = [
    {id:1, icon:"fas fa-wallet fa-fw" ,title:"saving money",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    {id:2, icon:"fas fa-tree fa-fw" ,title:"endless hiking",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },
    {id:3, icon:"fas fa-socks fa-fw", title:"amazing comfort",text:"Lorem ipsum dolor sit amet consectetur adipisicing elit." },

]
export const tours = [
    {id:1, img1:{tour1}, date:"august 26th, 2020",title:"Tibet Adventure",imfo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",location:"china", duration:"6 days",cost:"from $2100" },
    {id:2, img2:{tour2}, date:"october 1th, 2020",title:"best of java",imfo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",location:"indonesia",duration:"11 days",cost:"from $1400" },
    {id:3, img3:{tour3}, date:"september 15th, 2020",title:"explore hong kong",imfo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",location:"hong kong",duration:"8 days",cost:"from $5000" },
    {id:4, img4:{tour4}, date:"december 5th, 2019",title:"kenya highlights",imfo:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugitqui corporis.",location:"kenya",duration:"20 days",cost:"from $3300"},
     
]