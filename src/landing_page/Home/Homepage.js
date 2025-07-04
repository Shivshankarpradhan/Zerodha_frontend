import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Eduction from './Eduction';
import Openaccount from '../Openaccount';

 
function Home() {
    return (  
           <>
          
           <Hero />
           <Awards/>
           <Stats />
           <Pricing />
           <Eduction />
           <Openaccount/>
          
          
        </>
    );
}

export default Home;