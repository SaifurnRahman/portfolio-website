import React from 'react';
import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import Journey from '../components/Journey';
import TestimonialsSection from '../components/TestimonialsSection';
import Marquee from '../components/Marquee';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
    return (
        <div id="home">       
            <Hero></Hero>
            <WhatIDo></WhatIDo>
            
            <Projects></Projects>
            <SkillsSection></SkillsSection>
            <TestimonialsSection></TestimonialsSection>
        
            <Journey></Journey>
            
        </div>
    );
};

export default Home;