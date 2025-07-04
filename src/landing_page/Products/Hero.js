import React from "react";

function Hero() {
    return ( 
        <div className="contianer border-bottom mb-5">
            <div className="row p-5 mt-5 text-center">
                 <h1 className="mb-3" style={{fontSize:"2.9rem", color:"#424242"}}>Zerodha Products</h1>
                <p style={{fontSize:"1.3rem"}}>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings →</a></p>
            </div>
        </div>
     );
}

export default Hero;