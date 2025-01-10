export const EventHandler=()=>{

        function evenAlert(){
            alert("hii this is alert message")
        }
    return(
        <>
       <span>to go message :</span> <button className="btn btn-primary" type="button" onClick={evenAlert}>click here</button>
        </>
    )
}