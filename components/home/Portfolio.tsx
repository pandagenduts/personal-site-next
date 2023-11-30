'use client';

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
    category: 'react-nextjs',
    buttonText: 'React & Next JS',
  },
  {
    category: 'wordpress',
    buttonText: 'WordPress',
  },
  {
    category: 'html-css-js',
    buttonText: 'HTML CSS JS',
  },
];

const Portfolio = () => {
  const [projectParams, setProjectParams] = useQueryParam(
    'project',
    withDefault(StringParam, ''),
  );
  
  const updateSearchParams = (category: string) => {
    setProjectParams(category);
  };
  
  let projectDatas: ProjectData[] = reactProjectDatas;

  if (projectParams === 'react-nextjs') projectDatas = reactProjectDatas;
  else if (projectParams === 'wordpress') projectDatas = wordpressProjectDatas;
  else if (projectParams === 'html-css-js') projectDatas = htmlProjectDatas;

  return (
    <section className='container w-full px-4' id='portfolio'>
      <h2 className='text-center'>Portfolio</h2>
      <div className='mb-10 flex justify-center gap-4'>
        {theButtons.map(({ category, buttonText }) => (
          <PortfolioButton
            activeCardCategory={projectParams}
            category={category}
            updateSearchParams={updateSearchParams}
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
