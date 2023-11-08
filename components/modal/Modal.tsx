'use client';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalActions } from '../../redux/modal';
import { useAppSelector } from '@/redux/hooks';
import IFrame from './components/IFrame';
import Pill from '../layout/Pill';


const Modal = () => {
  const [deviceView, setDeviceView] = useState('DESKTOP');
  const dispatch = useDispatch();

  const { modalData } = useAppSelector((state) => state.theModal);

  const {
    title,
    description,
    projectURL,
    figmaEmbedURL,
    techUsed,
    techExplanation,
  } = modalData;

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  let contentWidth = '';
  if (deviceView === 'DESKTOP') {
    contentWidth = 'max-w-full';
  } else if (deviceView === 'TABLET') {
    contentWidth = 'max-w-[800px]';
  } else if (deviceView === 'MOBILE') {
    contentWidth = 'max-w-[400px]';
  }

  const handleDeviceWidth = (device: 'DESKTOP' | 'TABLET' | 'MOBILE') => {
    setDeviceView(device);
  };

  return (
    <div
      id='modal'
      className='fixed left-0 top-0 z-50 flex h-full w-full items-center justify-center px-4 py-4'
    >
      <div
        id='backdrop'
        className='absolute left-0 top-0 z-10 flex h-screen w-screen items-center justify-center bg-slate-900 bg-opacity-50'
        onClick={showModalHandler}
      ></div>
      <div
        id='content'
        className={`z-20 h-full w-full overflow-y-auto rounded-2xl bg-bgWhite transition-all duration-300 ${contentWidth}`}
      >
        <IFrame
          projectURL={projectURL}
          figmaEmbedURL={figmaEmbedURL}
          handleDeviceWidth={handleDeviceWidth}
          deviceView={deviceView}
        />
        <div className='px-2 pt-2'>
          {title && <h3>{title}</h3>}
          {techUsed && (
            <div className='mb-4 flex flex-wrap gap-1'>
              {techUsed?.map((item, index) => <Pill key={index}>{item}</Pill>)}
            </div>
          )}
          {description && (
            <>
              <h4>Description</h4>
              <ul>
                {description.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
          {techExplanation && (
            <>
              <h4>Tech Explanation</h4>
              <ul>
                {techExplanation.map((item, index) => (
                  <li key={index}>
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
