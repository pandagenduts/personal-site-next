'use client';

import Hero from '@/components/home/Hero';
import Portfolio from '@/components/home/Portfolio';
import Modal from '@/components/modal/Modal';
import { useAppSelector } from '@/redux/hooks';

const body = document.querySelector<HTMLBodyElement>('body');

export default function Home() {
  const { isShowModal } = useAppSelector((state) => state.theModal);

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
