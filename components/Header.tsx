import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul className='flex gap-4'>
          <li><Link href='/' className='font-medium'>Home</Link></li>
          {/* <li><Link href='/projects' className='font-medium'>Projects</Link></li> */}
          <li><Link href='/projects/asd' className='font-medium'>Project Detail</Link></li>
        </ul>
      </nav>
    </header>
  );
}
