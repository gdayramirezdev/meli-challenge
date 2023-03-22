import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from '../styles/components/Finder.module.scss';

type FinderProps = {
  initialSearch: string;
};

export const Finder: React.FunctionComponent<FinderProps> = ({initialSearch}) => {
  const [search, setSearch] = useState('');

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(()=> setSearch(initialSearch), [initialSearch])

  return (
    <>
      <div className={styles.header}>
        <div className={styles.finder}>
          <input
            className={styles.searchInput}
            type='text'
            value={search}
            onChange={onChange}
            placeholder='Nunca dejes de buscar'
          />
          <button type='button' className={styles.searchButton}>
            <Image
              src='/search.svg'
              alt='Search Icon'
              width={24}
              height={24}
              priority
            />
          </button>
        </div>
      </div>
    </>
  );
};
