import React from "react";

function Team() {
    return ( 
        <div className="container">

            <div className="row p-5">
                <h1 className="text-center">People</h1>
            </div>
            <div className="row text-muted   ">
                <div className="col-6 text-center align-items-center gp-0 ">
                    <img src="models/images/nithinKamath.jpg" style={{borderRadius:"100%" , width:"50%"}}/>
                    <h5 className="mt-3">Nithin Kamath</h5>
                    <p>Founder, CEO</p>
                </div>
                <div className="col-6 mt-4  fs-6 ">
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the <br></br>hurdles he faced during his decade long stint as a trader. Today, <br></br>Zerodha has changed the landscape of the Indian broking industry.</p>
                    <p>He is a member of the SEBI Secondary Market Advisory Committee<br></br> (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                    <p>Playing basketball is his zen.</p>
                    <p>Connect on <a>Homepage</a> / <a>TradingQnA</a> / <a>Twitter</a></p>
                </div>
            </div>
        </div>
    );
}

export default Team;