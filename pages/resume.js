import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sphiwe Mkwatheni | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Sphiwe Mkwatheni</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sphiwe-mkwatheni-a1952939/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/SphiweMotopi'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Digital Designer <span className='px-1'>|</span> Full Stack Web Development{' '}
              <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Digital Designer</p>
            <p className='py-2'>Full Stack Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>
        <p>
        Experienced Digital Designer with a demonstrated history of working in
          the Printing and Digital industry. Skilled in Magazine Design, Banner,
          adverts, Logo, landing page, video editing, and websites.
          A Full Stack Web Developer proficient in building dynamic and interactive
          web applications. Specialized in both front-end and back-end technologies,
          ensuring seamless user experiences and robust functionality. My expertise
          also includes Desktop Publishing and Digital Imaging Design
          from Vega School. I always push myself to learn more, and that's why I am
          where I am because I never get tired of learning.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Full-Stack Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span> RESTAPI
          </p>
        </div>
        </div>
    </>
  );
};

export default resume;