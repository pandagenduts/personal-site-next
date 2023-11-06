'use client';

import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import { useSelector } from 'react-redux';
import Modal from '@/components/modal/Modal';

const body = document.querySelector<HTMLBodyElement>('body');

type RootState = {
  theModal: {
    isShowModal: boolean;
  };
};

export default function Home() {
  const {isShowModal} = useSelector((state: RootState) => state.theModal);

  // remove the scrollbar when modal is shown
  if (body) {
    if (isShowModal) {
      body.classList.add('active');
    } else {
      body.classList.remove('active');
    }
  }

  return (
    <>
      <Hero />
      <Portfolio />
      {isShowModal ? <Modal /> : null}
    </>
  );
}
