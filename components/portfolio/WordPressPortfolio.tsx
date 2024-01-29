import { wordpressProjectDatas } from '@/datas/portfolioDatas';
import { ProjectData } from '../home/types';
import PortfolioCard from './PortfolioCard';
import PortfolioContainer from './PortfolioContainer';

export default function WordPressPortfolio() {
  return (
    <PortfolioContainer>
      {wordpressProjectDatas.map((item: ProjectData) => (
        <PortfolioCard key={item.slug} itemData={item} />
      ))}
    </PortfolioContainer>
  );
}
