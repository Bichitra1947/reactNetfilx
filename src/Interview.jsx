const Interview=()=>{
    const student=[]
    return(
        <>
        {/* <p>{student.length==0&& "No student found"}</p> */}
        <p>{!Boolean(student.length)&& "No student found"}</p>
        {/* <p>{!student.length&& "No student found"}</p> */}
        <p>student number : {student.length}</p>
        </>
    )
}
export default Interview