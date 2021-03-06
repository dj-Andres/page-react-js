import React from 'react';
import HeroSection from '../../HeroSection';
import Percing from '../../Percing';
import {homeObjOne,homeObjTwo,homeObjThree,homeObjFour} from './Data';

function Home() {
    return (
        <>
         <HeroSection {...homeObjOne} />
         <HeroSection {...homeObjThree} />
         <HeroSection {...homeObjTwo} />
         <Percing />
         <HeroSection {...homeObjFour} />
        </>
    )
}

export default Home


