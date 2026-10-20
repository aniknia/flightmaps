import React from 'react';
import { Image } from '@chakra-ui/react';
import logo from './logo.svg';

export const Logo = props => {
  return (
    <Image
      animation="spin infinite 20s linear"
      _motionReduce={{ animation: 'none' }}
      src={logo}
      {...props}
    />
  );
};
