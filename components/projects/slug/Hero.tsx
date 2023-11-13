'use client';

import IFrameStatic from '@/components/projects/slug/IFrameStatic';
import { useState } from 'react';
import { DeviceType } from './types';

type Props = {
  data: {
    projectURL: string | undefined;
    figmaEmbedURL: string | undefined;
  };
};

export default function Hero(props: Props) {
  const { projectURL, figmaEmbedURL } = props.data;
  const [deviceView, setDeviceView] = useState('DESKTOP');

  const handleDeviceView = (device: DeviceType) => {
    setDeviceView(device);
  };

  let sectionWidth = '';
  if (deviceView === 'DESKTOP') {
    sectionWidth = 'max-w-full';
  } else if (deviceView === 'TABLET') {
    sectionWidth = 'max-w-[800px]';
  } else if (deviceView === 'MOBILE') {
    sectionWidth = 'max-w-[400px]';
  }

  return (
    <section
      className={`${sectionWidth} duration-150 mx-auto px-2 h-[800px] flex flex-col`}
    >
      <IFrameStatic
        projectURL={projectURL}
        figmaEmbedURL={figmaEmbedURL}
        handleDeviceView={handleDeviceView}
        deviceView={deviceView}
      />
    </section>
  );
}
