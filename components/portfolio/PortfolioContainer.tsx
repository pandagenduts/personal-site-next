import { motion } from 'framer-motion';

export default function PortfolioContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className='grid h-auto grid-cols-1 gap-4 sm:w-full sm:grid-cols-2 lg:grid-cols-3'
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      transition={{ staggerChildren: 0.1 }}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {children}
    </motion.div>
  );
}
