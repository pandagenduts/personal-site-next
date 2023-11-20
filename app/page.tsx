'use client';

import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import Modal from '@/components/modal/Modal';
import { useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';



export default function Home() {
  const { isShowModal } = useAppSelector((state) => state.theModal);

  useEffect(() => {
    const body = document.querySelector<HTMLBodyElement>('body');
    if (body) {
      if (isShowModal) {
        body.classList.add('active');
      } else {
        body.classList.remove('active');
      }
    }
  })
  // remove the scrollbar when modal is shown


  return (
    <>
      <Hero />
      <Portfolio />
      {isShowModal ? <Modal /> : null}
    </>
  );
}
