import React from 'react';
import classNames from 'classnames';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l'
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({loading = true, size = LoaderSize.m, className}) => {
  const classes = classNames('loader', `loader_size_${size}`, className);
  return loading ? <span className={classes}></span> :  null;
};
