import logo from "../images/logo.svg";
import {socialLinks} from "../data.js/LinkPages" ;
import { SocialLinks } from "./SocialLinks";
import { PageLinks } from "./PageLinks";
 export function Navbar (){

return (
<nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <PageLinks parentClass="nav-links" itemClass="nav-link"/>
        {/* <ul className="nav-links" id="nav-links">
        {LinkPages.map((link) => {
           return <li key={link.id}>
            <a href={link.href} className="nav-link"> {link.text} </a>
          </li> */}
           
       
        <ul className="nav-icons">
          {socialLinks.map((icon) => {
            
              return <SocialLinks key={icon.id} itemClass="nav-icon" {...icon}/>
          })}
          
        </ul>
      </div>
    </nav>
    )
    }
