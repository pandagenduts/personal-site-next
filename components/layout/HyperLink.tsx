import React from 'react';

type HyperLinkProps = {
  href?: string;
  newTab?: boolean;
  className?: string;
  children?: React.ReactNode;
};

const HyperLink = ({ href, newTab, className, children }: HyperLinkProps) => {
  return (
    <a
      href={href ? href : '#'}
      target={newTab ? '_blank' : ''}
      rel='noopener noreferrer'
      className={className}
    >
      {children}
    </a>
  );
};

export default HyperLink;
