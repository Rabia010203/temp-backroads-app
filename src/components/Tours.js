import { tours } from "../data.js/LinkPages";
import Tour from "./Tour";
import Title from "./Title"
export function Tours(){
    return (
        <>
            <section className="section" id="tours">
            <Title title="featured" subTitle="tours"/>
      

      <div className="section-center featured-center">
      {tours.map((tour) => {
        
        return <Tour key={tour.id} {...tour} />
      })}
        
        
      </div>
    </section>
        </>
    )
}