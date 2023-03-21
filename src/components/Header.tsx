import React from 'react';
import { Finder } from '@/components';
import Image from 'next/image';

import styles from '../styles/components/Header.module.scss';

export const Header: React.FunctionComponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image 
          src='/logo.jpg'
          alt='mercado-libre-logo'
          width='58'
          height='44' 
        />
      </div>
      <div className={styles.finder}>
        <Finder />
      </div>
    </header>
  );
};
