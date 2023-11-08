'use client';

import { useEffect, useState } from 'react';
import {
  reactProjectDatas,
  wordpressProjectDatas,
  htmlProjectDatas,
} from '../../datas/portfolioDatas';
import PortfolioCard from './PortfolioCard';
import { ProjectData } from './types';

const Portfolio = () => {
  const [cardCategory, setCardCategory] = useState<
    'REACT' | 'WORDPRESS' | 'HTML'
  >('REACT');
  const [projectDatas, setProjectDatas] =
    useState<ProjectData[]>(reactProjectDatas);

  const buttonClasses = 'duration-150 hover:text-bluePrimary';

  useEffect(() => {
    if (cardCategory === 'REACT') setProjectDatas(reactProjectDatas);
    else if (cardCategory === 'WORDPRESS')
      setProjectDatas(wordpressProjectDatas);
    else if (cardCategory === 'HTML') setProjectDatas(htmlProjectDatas);
  }, [cardCategory]);

  return (
    <section className='container w-full px-4' id='portfolio'>
      <h2 className='text-center'>Portfolio</h2>
      <div className='mb-10 flex justify-center gap-4'>
        <button
          onClick={() => setCardCategory('REACT')}
          className={`${buttonClasses} ${
            cardCategory === 'REACT' ? 'text-bluePrimary' : ''
          }`}
        >
          React & Next JS
        </button>
        <button
          onClick={() => setCardCategory('WORDPRESS')}
          className={`${buttonClasses} ${
            cardCategory === 'WORDPRESS' ? 'text-bluePrimary' : ''
          }`}
        >
          WordPress
        </button>
        <button
          onClick={() => setCardCategory('HTML')}
          className={`${buttonClasses} ${
            cardCategory === 'HTML' ? 'text-bluePrimary' : ''
          }`}
        >
          HTML CSS JS
        </button>
      </div>
      <div className='grid h-auto grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 lg:grid-cols-3 '>
        {projectDatas.map((item: ProjectData, index: number) => (
          <PortfolioCard key={index} itemData={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
