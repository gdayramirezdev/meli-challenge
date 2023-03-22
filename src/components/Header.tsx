import React from 'react';
import { Finder } from '@/components';
import Image from 'next/image';

import styles from '../styles/components/Header.module.scss';

type HeaderProps = {
  initialSearch: string
};

export const Header: React.FunctionComponent<HeaderProps> = ({initialSearch}) => {
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
        <Finder initialSearch={initialSearch}/>
      </div>
    </header>
  );
};
