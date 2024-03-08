import { LinkPages } from "../data.js/LinkPages";

export const PageLinks = ({parentClass, itemClass}) => {
    return (
      
    <ul className={parentClass}>
    {LinkPages.map((link) => {
      const {id, href, text } = link;
      return <li key={id}>
        <a href={href} className={itemClass}>{text}</a>
      </li>
    })}
      
      
    </ul>
    )
}