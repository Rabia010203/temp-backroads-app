import { socialLinks } from "../data.js/LinkPages";
import { PageLinks } from "./PageLinks";
import { SocialLinks } from "./SocialLinks";

export function Footer(){
    return (
        <>
             <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link"/>
      <ul className="footer-icons">
      {socialLinks.map((icon) => {
        
        return <SocialLinks key={icon.id} itemClass="footer-icon"{...icon}/>
      })}
        
        
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
        </>
    )
}