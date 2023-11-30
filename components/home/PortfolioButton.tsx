'use client'

type Props = {
  activeCardCategory: string;
  category: string;
  handleCardCategory: (category: string) => void;
  updateSearchParams: (category: string) => void;
  theSearchParams: string;
  children: React.ReactNode;
}
export default function PortfolioButton(props: Props) {
  const {activeCardCategory, category, handleCardCategory, updateSearchParams, theSearchParams, children } = props;

  return (
    <button
    onClick={() => {
      handleCardCategory(category);
      updateSearchParams(theSearchParams);
    }}
    className={`duration-150 hover:text-bluePrimary ${
      activeCardCategory === category ? 'text-bluePrimary' : ''
    }`}
  >
    {children}
  </button>
  )
}
