const Loader = () =>{
    return(
        <>
  <div className="d-flex justify-content-center m-5"  role="status">
  <div className="spinner-border" role="status" style={{width: "3rem", height: "3rem", borderWidth:"20px"}}>
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
      </>
    )
}

export default Loader;