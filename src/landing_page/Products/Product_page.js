import React from "react";
import Hero from "./Hero";
import Leftside from "./Leftimage";
import Rightside from "./Rightimage";
import Univers from "./Univers";
function Productpage(){
  return (
    <>
      <Hero />
      <Leftside
        imageURL="models\images\kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
       <Rightside
       imageURL="models/images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore=""
        
        />
      
       <Leftside
        imageURL="models/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />
      <Rightside
       imageURL="models/images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore=""
      />
       <Leftside
        imageURL="models/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        tryDemo=""
        learnMore=""
        googlePlay=""
        appStore=""
      />

       <Univers/>
    </>

   
  );
}

export default Productpage;
