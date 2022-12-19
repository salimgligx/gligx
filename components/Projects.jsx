import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import hms from '../public/assets/projects/hms.jpg'
import dian from '../public/assets/projects/dian.JPG'
import vega from '../public/assets/projects/vega.JPG'
import seha from '../public/assets/projects/seha.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#98999a]'>
          Projects
        </p>
        <h2 className='py-4'>PROJECT WE ARE WORKING ON</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='HMS MIRDIF HOSPITAL'
            backgroundImg={hms}
            projectUrl='/hms'
            tech='Bootstrap'
          />
          <ProjectItem
            title='Dian Jewellery'
            backgroundImg={dian}
            projectUrl='/dian'
            tech='React JS'

          />
          <ProjectItem
            title='VEGA PRO LIGHTING'
            backgroundImg={vega}
            projectUrl='/vega'
            tech='WordPress'

          />
          <ProjectItem
            title='Saaeha Medical Tourism'
            backgroundImg={seha}
            projectUrl='/saaeha'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
