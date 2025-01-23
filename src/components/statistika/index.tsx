import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';

interface TextState {
  uniqueWordsCount: number;
  totalWords: number;
}

const Statistics: React.FC<TextState> = () => {
  const { uniqueWordsCount, totalWords }: TextState = useSelector((state: RootState) => state.text);
  const repeatedWords = totalWords - uniqueWordsCount;

  return (
    <div className={styles.statistics}>
      <p>Təkrarlanan sözlər: {repeatedWords}</p>
      <p>Ümumi sözlərin sayı: {totalWords}</p>
    </div>
  );
};

export default React.memo(Statistics);
