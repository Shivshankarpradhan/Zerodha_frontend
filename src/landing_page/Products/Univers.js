import React from "react";

function Univers() {
  return (
    <div className="container mt-5">
      <div className="row p-5 ">
        <h4 className="text-center">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h4>
        <div className="col mt-5  p-5 text-center">
          <h1>The Zerodha Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div className="row mt-5 p-5 text-center">
          <div className="col-4 ">
            <img src="models/images/zerodhaFundhouse.png" width={"55%"} />
            <p
              className="text-muted "
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
            >
              Our asset management venture<br></br>
              that is creating simple and transparent index<br></br>
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 ">
            <img src="models/images/sensibullLogo copy.svg" width={"65%"} />
            <p
              className="text-muted "
              style={{ fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
            >
              Options trading platform that lets you<br></br>
              create strategies, analyze positions, and examine<br></br>
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4">
            <img src="models/images/goldenpiLogo.png" width={"50%"} />
            <p
              className="text-muted "
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
            >
              Investment research platform<br></br>
              that offers detailed insights on stocks,<br></br>
              sectors, supply chains, and more.
            </p>
          </div>
        </div>

         <div className="row  p-5 text-center">
          <div className="col-4 ">
            <img src="models/images/streakLogo.png" width={"55%"} />
            <p
              className="text-muted "
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
            >
            Systematic trading platform<br></br>
that allows you to create and backtest<br></br>
strategies without coding.
            </p>
          </div>
          <div className="col-4 ">
            <img src="models/images/smallcaseLogo.png" width={"65%"} />
            <p
              className="text-muted "
              style={{ fontSize: "13px", fontWeight: "500", marginTop: "1rem" }}
            >
            Thematic investing platform<br></br>
that helps you invest in diversified<br></br>
baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4">
            <img src="models/images/dittoLogo.png" width={"50%"} />
            <p
              className="text-muted "
              style={{
                fontSize: "13px",
                fontWeight: "500",
                marginTop: "0.5rem",
              }}
            >
            Personalized advice on life<br></br>
and health insurance. No spam<br></br>
and no mis-selling.
            </p>
          </div>
        </div>

        <button className='btn btn-primary p-2 fs-5 mb-5' style={{width:"15%", margin:"0 auto"}} >Sign up for free</button>


      </div>
    </div>
  );                                                                              
}

export default Univers;
