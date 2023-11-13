'use client';

import { useDispatch } from 'react-redux';
import { modalActions } from '../../../redux/modal';
import {
  FaDesktop,
  FaTabletAlt,
  FaMobileAlt,
  FaLongArrowAltLeft,
} from 'react-icons/fa';
import HyperLink from '../../layout/HyperLink';
import { useState } from 'react';

type IFrameProps = {
  projectURL: string | undefined;
  figmaEmbedURL: string | undefined;
  handleDeviceWidth: (device: 'DESKTOP' | 'TABLET' | 'MOBILE') => void;
  deviceView: string;
};

const IFrameModal = (props: IFrameProps) => {
  const { projectURL, figmaEmbedURL, handleDeviceWidth, deviceView } = props;
  const [iFrameShow, setIFrameShow] = useState('LIVE_SITE');
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(modalActions.toggleModal());
  };

  const responsiveSelectorClasses =
    'h-9 w-9 cursor-pointer items-center justify-center rounded-md border-none bg-white duration-150 hover:bg-opacity-30';

  const iframeSelectorClasses =
    'py-1 px-4 rounded-lg text-white duration-150 hover:bg-bluePrimary';

  return (
    <>
      <div
        className={`flex items-center bg-bluePrimary ${
          deviceView === 'MOBILE' ? 'justify-center' : 'justify-between'
        } py-3 px-4 md:px-6 md:py-4`}
      >
        <button
          className={`${
            deviceView === 'MOBILE' ? 'hidden' : ''
          } flex cursor-pointer items-center gap-2 border-none bg-transparent text-sm font-medium text-white`}
          onClick={showModalHandler}
        >
          <FaLongArrowAltLeft />
          Back
        </button>
        <div className='hidden md:flex md:gap-6'>
          <button
            className={`hidden ${responsiveSelectorClasses} lg:flex ${
              deviceView === 'DESKTOP' ? 'bg-opacity-30' : 'bg-opacity-10'
            }`}
            onClick={() => handleDeviceWidth('DESKTOP')}
          >
            <FaDesktop className='h-4 w-4 text-white' />
          </button>
          <button
            className={`flex ${responsiveSelectorClasses} ${
              deviceView === 'TABLET' ? 'bg-opacity-30' : 'bg-opacity-10'
            }`}
            onClick={() => handleDeviceWidth('TABLET')}
          >
            <FaTabletAlt className='h-4 w-4 text-white' />
          </button>
          <button
            className={`flex ${responsiveSelectorClasses} ${
              deviceView === 'MOBILE' ? 'bg-opacity-30' : 'bg-opacity-10'
            }`}
            onClick={() => handleDeviceWidth('MOBILE')}
          >
            <FaMobileAlt className='h-4 w-4 text-white' />
          </button>
        </div>
        <HyperLink
          href={projectURL ? projectURL : '#'}
          className={`${
            deviceView === 'MOBILE' ? 'hidden' : ''
          } rounded-md bg-redSecondary px-2 py-1 md:px-3 md:py-2 text-sm text-white no-underline`}
          newTab
        >
          Visit Site
        </HyperLink>
      </div>
      <div
        id='modal-iframe-wrapper'
        className='relative flex h-[85%] w-full justify-center overflow-hidden duration-150 shadow-md bg-white'
      >
        <iframe
          src={projectURL ? projectURL : ''}
          className={`${
            iFrameShow === 'LIVE_SITE' ? 'block' : 'hidden'
          } w-full h-full`}
        ></iframe>
        {figmaEmbedURL && (
          <iframe
            className={`${iFrameShow === 'FIGMA' ? 'block' : 'hidden'}`}
            width='100%'
            height='107%'
            src={figmaEmbedURL}
            allowFullScreen
          ></iframe>
        )}
        {figmaEmbedURL && (
          <div className='absolute bottom-1 flex gap-4 px-4'>
            <button
              className={`${iframeSelectorClasses} ${
                iFrameShow === 'LIVE_SITE'
                  ? 'bg-bluePrimary'
                  : 'bg-bluePrimaryHover'
              }`}
              onClick={() => setIFrameShow('LIVE_SITE')}
            >
              Live Site
            </button>
            <button
              className={`${iframeSelectorClasses} ${
                iFrameShow === 'FIGMA'
                  ? 'bg-bluePrimary'
                  : 'bg-bluePrimaryHover'
              }`}
              onClick={() => setIFrameShow('FIGMA')}
            >
              Figma
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default IFrameModal;
