import React from 'react';
import HeroSection from '../../HeroSection';
import Percing from '../../Percing';
import {homeObjOne} from './Data';

function Services() {
    return (
        <>
         <Percing />
         <HeroSection {...homeObjOne} />
        </>
    )
}

export default Services


