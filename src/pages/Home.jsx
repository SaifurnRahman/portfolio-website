import React from 'react';
import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SkillsSection from '../components/SkillsSection';

const Home = () => {
    return (
        <div id="home">       
            <Hero></Hero>
            <WhatIDo></WhatIDo>
            
            <Projects></Projects>
            <SkillsSection></SkillsSection>
            <TestimonialsSection></TestimonialsSection>
        
            <TeamSection showPageLink />
            
        </div>
    );
};

export default Home;