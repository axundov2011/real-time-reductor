import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

const Statistics: React.FC = () => {
  const { uniqueWordsCount, totalWords } = useSelector((state: RootState) => state.text);

  const repeatedWords = totalWords - uniqueWordsCount;

  return (
    <div className={styles.statistics}>
      <p>Təkrarlanan sözlər: {repeatedWords}</p>
      <p>Ümumi sözlərin sayı: {totalWords}</p>
    </div>
  );
};

export default Statistics;
