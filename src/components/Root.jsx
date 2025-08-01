import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import About from './About';
import ToolCard from './ToolCard';
import FavoriteTools from './ToolCard';
import Marquee from './Marquee';
import ContactSection from './ContactSection';
import TestimonialsSection from './TestimonialsSection';
import ServicesSection from './ServicesSection';

const Root = () => {
    return (
        <div className='bg-black Primary-Font'>
            <Navbar></Navbar>
            <Header></Header>
            <Marquee></Marquee>
            <div id='aboutme'>
                <About></About>
            </div>
            <div id='services'>
                <ServicesSection></ServicesSection>
            </div>
            <FavoriteTools></FavoriteTools>
            <Marquee></Marquee>
            <div id='testimonials'>
                <TestimonialsSection></TestimonialsSection>
            </div>
            <div id='letstalk'>
                <ContactSection></ContactSection>
            </div>
             <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;