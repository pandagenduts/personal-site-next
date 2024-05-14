import type { Metadata } from 'next';
import { Montserrat, Poppins } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import ReduxProvider from '@/redux/ReduxProvider';
import QueryParamProv from '@/components/QueryParamProvider';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Donny Rendi | WordPress Elementor Designer & Developer',
  description: "Donny Rendi's Personal Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${poppins.className} ${poppins.variable} ${montserrat.variable}`}
      >
        <QueryParamProv>
          <ReduxProvider>
            <main className='pt-9'>{children}</main>
            <Footer />
          </ReduxProvider>
        </QueryParamProv>
      </body>
    </html>
  );
}
