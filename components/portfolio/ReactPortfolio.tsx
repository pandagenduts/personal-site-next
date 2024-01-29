import { reactProjectDatas } from '@/datas/portfolioDatas';
import { ProjectData } from '../home/types';
import PortfolioCard from './PortfolioCard';
import PortfolioContainer from './PortfolioContainer';

export default function ReactPortfolio() {
  return (
    <PortfolioContainer>
      {reactProjectDatas.map((item: ProjectData) => (
        <PortfolioCard key={item.slug} itemData={item} />
      ))}
    </PortfolioContainer>
  );
}
