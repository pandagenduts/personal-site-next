import { htmlProjectDatas } from '@/datas/portfolioDatas';
import { ProjectData } from '../home/types';
import PortfolioCard from './PortfolioCard';
import PortfolioContainer from './PortfolioContainer';

export default function HtmlPortfolio() {
  return (
    <PortfolioContainer>
      {htmlProjectDatas.map((item: ProjectData) => (
        <PortfolioCard key={item.slug} itemData={item} />
      ))}
    </PortfolioContainer>
  );
}
