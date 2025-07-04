import React from "react";

function Leftside( {
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row m-5 ">
        <div className="col-6">
          <img src={imageURL}/>
        </div>

        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
<a href={tryDemo}>Try demo</a>
          <a href={learnMore} style={{marginLeft:"50px"}}>Learn More</a>
          </div>
          
          <div className="mt-3">
  <a href={googlePlay}><img src="models/images/googlePlayBadge.svg"/></a>
          <a href={appStore} style={{marginLeft:"20px"}}><img src="models/images/appstoreBadge.svg"/></a>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Leftside;
