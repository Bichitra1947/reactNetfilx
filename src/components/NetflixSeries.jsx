import Serieses from "../api/Serieses.json"
import { CardSeries } from "./CardSeries";

const NetflixSeries=()=>{
    return(
        <>
        <h2 className="card-hadding">List of best netflix series</h2>
        <ul className="grid grid-three-cols">
            {Serieses.map((newEle)=>{
               return(
                <CardSeries key={newEle.id} data={newEle}/> 
               )
            })}
        </ul>
        </>
    );
}
export default NetflixSeries;