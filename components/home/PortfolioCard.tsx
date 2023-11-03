import { useDispatch } from 'react-redux';
import { modalActions } from '../../redux/modal';

const PortfolioCard = ({ itemData }) => {
  const { title, imageCover } = itemData;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalActions.modalDataUpdate(itemData));
    dispatch(modalActions.toggleModal())
  };

  return (
    <div
      className='relative cursor-pointer overflow-hidden rounded-xl shadow-xl'
      onClick={handleClick}
    >
      {imageCover === '' ? (
        <div className='w-full max-w-[395px] h-full min-h-[395px] bg-slate-500'></div>
      ) : (
        <img src={imageCover} className='object-contain' />
      )}

      <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-slate-900 bg-opacity-0 opacity-0 duration-300 hover:bg-opacity-60 hover:opacity-100'>
        {title && <p className='font-montserrat text-xl text-white'>{title}</p>}
        <button className='rounded-full bg-bluePrimary px-4 py-2 text-sm text-white'>
          See Preview
        </button>
      </div>
    </div>
  );
};

export default PortfolioCard;
