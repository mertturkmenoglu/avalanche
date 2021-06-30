import React from 'react';
import classnames from 'classnames';

export interface CardProps {
  children: React.ReactNode;
  background?: string;
  rounded?: 'sm' | 'md' | 'lg' | 'xl';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const Card = ({
  children, background = 'bg-white', rounded = 'md', shadow = 'md', className,
}: CardProps) => {
  const classes = classnames(background, rounded ? `rounded-${rounded}` : '', shadow ? `shadow-${shadow}` : '', className);
  return (
    <div className={classes}>{children}</div>
  );
};

export default Card;
