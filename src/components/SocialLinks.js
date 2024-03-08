export const SocialLinks = ({href,classlocation,itemClass}) => {
return (
    <>
        <li>
          <a href={href} target="_blank" rel="noreferrer" className={itemClass}
            ><i className={classlocation}></i></a>
        </li>
    </>
)
}
            