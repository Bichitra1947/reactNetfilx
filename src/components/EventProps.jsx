export const EventProps=()=>{
    const WelcomeUserHendler=(user)=>{
        console.log("hii ",user);
    } 
    return(
        <>
        <WelcomeUser onClick={()=>WelcomeUserHendler("Bichitra")}/>
        </>
    )
}

const WelcomeUser=(props)=>{
    const mousehover=()=>{
        alert("you hover me");
        props.onClick();
        props.WelcomeUserHendler("Mohan");
    }
    return(
        <>
            <button type="button" className="btn btn-primary"onClick={props.onClick} >Click here</button> <span>to get the message</span>
            <br />
            <br />
            <button type="button" className="btn btn-primary" onMouseEnter={mousehover} >hover me</button>
        </>
    )
}