import HyperLink from '../../components/layout/HyperLink';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <section className='mx-auto mb-12 flex max-w-3xl flex-col items-center px-4'>
      <div className='mb-10 w-40 rounded-full shadow-bsRound2 duration-700 hover:shadow-none'>
        <img
          src='Donny Rendi Portrait.png'
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
          Over my career, I've worked on dozens of professional websites across
          countries, including Indonesia, Singapore, Australia, Europe, and the
          US.
        </p>
        <p>
          Also a founder & leader of 280+ member non-profit organization,
          Devsigner Labs.
        </p>
        <p>
          A reliable individual with strong communication and teamwork skills.
        </p>
        <p>
          Exceptional attention to detail, pixel-perfect has always been my
          approach.
        </p>
        <p className='mb-12'>
          Currently open to any opportunity as a FrontEnd React Next JS
          Developer. <br />
          Feel free to check out my works below 🙂
        </p>
        <p className='m-0 text-xs'>
          PS: I didn't do the design, only the development part. Source is
          stated
        </p>
      </div>
    </section>
  );
};

export default Hero;
