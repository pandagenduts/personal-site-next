'use client';

import { useQueryParam, StringParam, withDefault } from 'use-query-params';
import PortfolioButton from '../portfolio/PortfolioButton';
import { AnimatePresence } from 'framer-motion';
import ReactPortfolio from '../portfolio/ReactPortfolio';
import WordPressPortfolio from '../portfolio/WordPressPortfolio';
import HtmlPortfolio from '../portfolio/HtmlPortfolio';

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
      <AnimatePresence>
        {projectParams === 'react-nextjs' && <ReactPortfolio />}
        {projectParams === 'wordpress' && <WordPressPortfolio />}
        {projectParams === 'html-css-js' && <HtmlPortfolio />}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
