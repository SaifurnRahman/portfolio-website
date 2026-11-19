import React from 'react';
import Hero from '../components/Hero';
import WhatIDo from '../components/WhatIDo';
import Projects from '../components/Projects';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SkillsSection from '../components/SkillsSection';
import PricingSection from '../components/PricingSection';
import FaqSection from '../components/FaqSection';

const Home = () => {
    return (
        <div id="home">       
            <Hero></Hero>
            <WhatIDo></WhatIDo>
            
            <Projects></Projects>
            <SkillsSection></SkillsSection>
            <TestimonialsSection></TestimonialsSection>
        
            <PricingSection index="05" />
            <TeamSection index="06" showPageLink />
            <FaqSection index="07" />
            
        </div>
    );
};

export default Home;