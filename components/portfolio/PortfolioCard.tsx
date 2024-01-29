import { useDispatch } from 'react-redux';
import { modalActions } from '../../redux/modal';
import { ProjectData } from '../home/types';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PortfolioCard = ({ itemData }: { itemData: ProjectData }) => {
  const { title, imageCover } = itemData;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalActions.modalDataUpdate(itemData));
    dispatch(modalActions.toggleModal());
  };

  return (
    <motion.div
      className='relative cursor-pointer overflow-hidden rounded-xl shadow-xl'
      onClick={handleClick}
      variants={{
        hidden: { y: 10, opacity: 0 },
        visible: { y: 0, opacity: 1 },
      }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ type: 'spring', duration: 0.5 }}
    >
      {imageCover === '' ? (
        <div className='w-full max-w-[395px] h-full min-h-[395px] bg-slate-500'></div>
      ) : (
        <Image
          src={imageCover}
          alt='portfolio-image'
          width={1261}
          height={1261}
          className='object-contain'
        />
      )}

      <div className='absolute left-0 top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-slate-900 bg-opacity-0 opacity-0 duration-300 hover:bg-opacity-60 hover:opacity-100'>
        {title && <p className='font-montserrat text-xl text-white'>{title}</p>}
        <button className='rounded-full bg-bluePrimary px-4 py-2 text-sm text-white'>
          See Preview
        </button>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
