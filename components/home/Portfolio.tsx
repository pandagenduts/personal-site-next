'use client';

import { useEffect, useState } from 'react';
import {
  reactProjectDatas,
  wordpressProjectDatas,
  htmlProjectDatas,
} from '../../datas/portfolioDatas';
import PortfolioCard from './PortfolioCard';
import { useQueryParam, StringParam, withDefault } from 'use-query-params';
import { ProjectData } from './types';
import PortfolioButton from './PortfolioButton';

const theButtons = [
  {
    category: 'REACT',
    theSearchParams: 'react-nextjs',
    buttonText: 'React & Next JS',
  },
  {
    category: 'WORDPRESS',
    theSearchParams: 'wordpress',
    buttonText: 'WordPress',
  },
  {
    category: 'HTML',
    theSearchParams: 'html',
    buttonText: 'HTML CSS JS',
  },
];

let init = true;
const Portfolio = () => {
  const [cardCategory, setCardCategory] = useState<string>('REACT');
  const [projectDatas, setProjectDatas] =
    useState<ProjectData[]>(reactProjectDatas);
  const [projectParams, setProjectParams] = useQueryParam(
    'project',
    withDefault(StringParam, ''),
  );

  const updateSearchParams = (category: string) => {
    setProjectParams(category);
  };

  const handleCardCategory = (category: string) => {
    setCardCategory(category);
  };

  // useEffect(() => {
  //   console.log(projectParams);
  //   if (projectParams === 'react-nextjs') {
  //     setProjectDatas(reactProjectDatas);
  //   } else if (projectParams === 'wordpress') {
  //     setProjectDatas(wordpressProjectDatas);
  //   } else if (projectParams === 'html') {
  //     setProjectDatas(htmlProjectDatas);
  //   }
  // }, []);

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    if (cardCategory === 'REACT') setProjectDatas(reactProjectDatas);
    else if (cardCategory === 'WORDPRESS')
      setProjectDatas(wordpressProjectDatas);
    else if (cardCategory === 'HTML') setProjectDatas(htmlProjectDatas);
  }, [cardCategory]);

  return (
    <section className='container w-full px-4' id='portfolio'>
      <h2 className='text-center'>Portfolio</h2>
      <div className='mb-10 flex justify-center gap-4'>
        {theButtons.map(({ category, theSearchParams, buttonText }) => (
          <PortfolioButton
            activeCardCategory={cardCategory}
            category={category}
            handleCardCategory={handleCardCategory}
            updateSearchParams={updateSearchParams}
            theSearchParams={theSearchParams}
            key={category}
          >
            {buttonText}
          </PortfolioButton>
        ))}
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
