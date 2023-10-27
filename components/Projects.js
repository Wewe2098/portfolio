import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/skills/hangman.png';
import itunesImg from '../public/assets/skills/itunes.png';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#8e2f2f]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <div>
            <Link href='https://benevolent-boba-af54fe.netlify.app/' passHref>
                <Image src={propertyImg} alt='Property Finder' />
            </Link>
            <p>Title: HangMan Game</p>
            <p>Tech: React JS</p>
          </div>
          <div>
            <Link href='https://comfy-valkyrie-a0178a.netlify.app' passHref>
                <Image src={itunesImg} alt='Crypto App' />
            </Link>
            <p>Title: Itunes Search App</p>
            <p>Tech: React JS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
