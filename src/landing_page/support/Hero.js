import React from "react";

function Hero() {
    return (  
        <div className="cotainer  p-5 " style={{backgroundColor : "#387ED1", height: "50vh"}}>
            <div className="row  "style={{marginRight:"19%" , marginLeft:"12%"} } >
                <div className="col-8 " style={{color: "white"}}>
                    <h5>Support Portal</h5>
                     <h5 style={{marginTop:"5%"}}>Search for an answer or browse help topics to create a <br></br> ticket</h5>
                    <input className="form-control me-1" type="search" placeholder="Eg: how tp activate the f&O," aria-label="Search" style={{marginTop:"2rem", width:"90%", height:"20%"}}/>
                     <br></br>
                     
<a href="" style={{ color:"white", }}>Track account opening</a>
                    <a href="" style={{ color:"white", marginLeft:"1rem"}}> Track segment activation</a>
                    <a href=""style={{ color:"white" ,marginLeft:"1rem"}}> Intraday margins</a>
                    <br></br>
                    <a href=""style={{color:"white", }}>Kite user manual</a>

                     
                    
                </div>
 
     
    <div className="col-4 " style={{color: "white", marginTop:"10%"}}>
       
        <h5>Featured</h5>
        <p>1.Surveillance measure on scrips - June 2025</p>
        <p>2.Latest Intraday leverages and Square-off timings</p>

    </div>

            </div>
        </div>
    );
}

export default Hero;
