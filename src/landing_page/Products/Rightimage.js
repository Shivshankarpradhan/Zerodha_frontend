import React from "react";

function Rightside({
      imageURL,
  productName,
  productDescription,
  learnMore,

}) {
    return (
        <div className="container mt-5 p-5">
            <div className="row m-5 ">
                <div className="col-6 p-5 " style={{marginTop:"6%"}}>
                    <h1 className="mb-2">{productName}</h1>
                    <p>{productDescription}</p>
                    <a href={learnMore} style={{textDecoration:"none"}}>Learn more</a>
                </div>
                <div className="col-6 ">
                    <img src = {imageURL} width={"99%"}/>
                </div>

            </div>

            
        </div>
     );
}

export default Rightside;