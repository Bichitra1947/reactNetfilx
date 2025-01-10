
import './CardSeries.css'
export const CardSeries=(props)=>{
    const {name,id,img_url,rating,description,cast,genre,watch_url}=props.data
    const marginST={margin:"2.2rem 0"}
    return (
        <li key={id} className="card">
            <div>
            <img src={img_url} alt="image" width="40%" height="40%" />
            </div>
            <div className='card-contain '>
            <h2> Movie name : {name}</h2>
            <h3>Rating : <span className={`rate ${rating>=8.5?"superHit":"avargeHit"}`}>{rating}</span></h3>
            <p className='text-3xl font-bold underline'>Description :{description}</p>
            <p>Cast :{cast}</p>
            <p>Genre :{genre}</p>
            <a href={watch_url} target="_blank" rel="noopener noreferrer">
                <button type="button" className="btn btn-primary">Watch now</button>
            </a>
            </div>
        </li>
    )

}