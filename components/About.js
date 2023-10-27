import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/skills/profile-image.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#8e2f2f]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
          Experienced Digital Designer with a demonstrated history of working in
          the Printing and Digital industry. Skilled in Magazine Design, Banner,
          adverts, Logo, landing page, video editing, and websites.
          </p>
          <p className='py-2 text-gray-600'>
          A Full Stack Web Developer proficient in building dynamic and interactive
          web applications. Specialized in both front-end and back-end technologies,
          ensuring seamless user experiences and robust functionality. My expertise
          also includes Desktop Publishing and Digital Imaging Design
          from Vega School. I always push myself to learn more, and that's why I am
          where I am because I never get tired of learning.
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
