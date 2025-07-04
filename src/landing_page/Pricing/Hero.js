import React from "react";

function Hero() {
    return (  
        <div className="continer mt-5">
            <div className="row  text-center p-5">
                <h1>Charges</h1>
                <h4 className="text-muted" >List of all charges and taxes</h4>
            </div>
             <div className="row mt-5 p-5 text-center  border-top"style={{marginLeft:"10%", marginRight:"10%"}}>
                <div className="col-4 ">
                    <img src="models/images/pricing0.svg" width={"70%"}/>
                    <h3 style={{marginBottom:"1.5rem"}}>Free equity delivery</h3>
                    <p>All equity delivery investments (NSE, BSE),<br></br> are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-4 ">
                    <img src="models/images/intradayTrades.svg" width={"70%"}/>
                    <h3 style={{marginBottom:"1.5rem"}}>Intraday and F&O trades
</h3>
<p>Flat ₹ 20 or 0.03% (whichever is lower) per <br></br> executed order on intraday trades across <br></br>equity, currency, and commodity trades. Flat  <br></br>₹20 on all option trades.</p>
                </div>
                <div className="col-4 ">
                    <img src="models/images/pricingMF.svg" width={"70%"}/>
                    <h3 style={{marginBottom:"1.5rem"}}>Free direct MF</h3>
                    <p>All direct mutual fund investments are <br></br>absolutely free — ₹ 0 commissions & DP <br></br>charges.</p>
                </div>
             </div>
        </div>
    );
}

export default Hero;