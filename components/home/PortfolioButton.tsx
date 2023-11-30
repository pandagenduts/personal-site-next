'use client'

type Props = {
  activeCardCategory: string;
  category: string;
  updateSearchParams: (category: string) => void;
  children: React.ReactNode;
}
export default function PortfolioButton(props: Props) {
  const {activeCardCategory, category, updateSearchParams, children } = props;

  return (
    <button
    onClick={() => {
      updateSearchParams(category);
    }}
    className={`duration-150 hover:text-bluePrimary ${
      activeCardCategory === category ? 'text-bluePrimary' : ''
    }`}
  >
    {children}
  </button>
  )
}
