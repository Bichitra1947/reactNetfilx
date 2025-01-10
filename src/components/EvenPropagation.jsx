export const EventPropagation=()=>{
    const grandParentDiv=()=>{
        console.log("Hiii grand div")
    }
    const ParentDiv=()=>{
        console.log("Hiii parent div")
    }
    const childDiv=(event)=>{
        console.log(event)
        event.stopPropagation();
        console.log("Hiii child div")
    }
    return(
        <>
        <section>
            <div className="g-div" onClick={grandParentDiv}>
                <div className="p-div " onClick={ParentDiv}>
                    <button className="c-div btn btn-primary" type="button" onClick={childDiv} >
                        child div
                    </button>

                </div>
            </div>
        </section>
        </>

    )
}