import Image from 'next/image';
import HyperLink from '../../components/layout/HyperLink';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className='mx-auto mb-12 flex max-w-3xl flex-col items-center px-4'>
      <div className='mb-10 w-40 rounded-full shadow-bsRound2 duration-700 hover:shadow-none'>
        <Image
          src='/donny-rendi-portrait.png'
          width={263}
          height={263}
          className='rounded-full shadow-bsRound duration-500 hover:shadow-none'
          alt='Donny-Profile-Photo'
        />
      </div>
      <h1>Donny Rendi</h1>
      <h4 className='mb-8 font-medium'>FrontEnd | React | Next JS Developer</h4>
      <div className='mb-12 flex gap-6 text-bluePrimary'>
        <HyperLink href='#' newTab className='duration-150 hover:scale-95'>
          <FaLinkedin className='h-6 w-6' />
        </HyperLink>
        <HyperLink href='#' newTab className='duration-150 hover:scale-95'>
          <FaGithub className='h-6 w-6' />
        </HyperLink>
        <HyperLink href='#' newTab className='duration-150 hover:scale-95'>
          <MdEmail className='h-6 w-6' />
        </HyperLink>
      </div>
      <div>
        <p>
          A self-taught FrontEnd React Next JS developer with about 2 years
          experience in HTML, CSS, JavaScript and WordPress.
        </p>
        <p>
          Specializing in slicing Figma design pixel-perfectly and responsive.
          Exceptional attention to detail.
        </p>
        <p>Let my works do the talk below 🙂</p>
        <p className='mt-12 text-xs'>
          PS: I didn&rsquo;t do the design, only the development part. Source is
          stated
        </p>
      </div>
    </section>
  );
};

export default Hero;
