import { useEffect } from 'react';
import AOS from 'aos';

import Cases from '@/components/Cases';
import Clients from '@/components/Clients';
import Contact from '@/components/ContactUs';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import QuemSomos from '@/components/QuemSomos';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';

import type { NextPage } from 'next';

const Home: NextPage = () => {

  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);

  return (
    <div className='w-full h-full text-[#1C1C1E]  dark:text-[#f4f4f4] dark:bg-[#080f04]'>
      
      <div id="quem-somos">
        <QuemSomos />
      </div>
      
      <div id="services">
        <Services />
      </div>
      
      <Clients />
      
      <div id="cases">
        <Cases />
      </div>
      
      <div id="testimonials">
        <Testimonials />
      </div>
      
      <div id="faq">
        <Faq />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
