import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './index.module.scss';
import { useMemo } from 'react';

interface DonutChartProps {
  uniqueWordsCount: number;
  totalWords: number;
}

const DonutChart: React.FC<DonutChartProps> = () => {
  const { uniqueWordsCount, totalWords } = useSelector((state: RootState) => state.text);

  const repeatedWords = totalWords - uniqueWordsCount;
  const uniquePercentage = useMemo(() => {
    if (totalWords > 0) {
      return ((uniqueWordsCount / totalWords) * 100).toFixed(2);
    } else {
      return '0';
    }
  }, [totalWords, uniqueWordsCount]);

  const repeatedPercentage = (100 - parseFloat(uniquePercentage)).toFixed(2);

  return (
    <div className={styles.donut}>
      <svg width="200" height="200" viewBox="0 0 42 42" className={styles.donutSvg}>
        <circle
          className="donut-ring"
          cx="21"
          cy="21"
          r="15.91549431"
          fill="transparent"
          stroke="#eee"
          strokeWidth="3.8"
        />
        <circle
          className="donut-segment"
          cx="21"
          cy="21"
          r="15.91549431"
          fill="transparent"
          stroke="#4c6ef5"
          strokeWidth="3.8"
          strokeDasharray={`${parseFloat(repeatedPercentage)} ${100 - parseFloat(repeatedPercentage)}`}
          strokeDashoffset="25"
        />
        <circle
          className="donut-segment"
          cx="21"
          cy="21"
          r="15.91549431"
          fill="transparent"
          stroke="#ff6b6b"
          strokeWidth="3.8"
          strokeDasharray={`${uniquePercentage} ${100 - uniquePercentage}`}
          strokeDashoffset={`calc(25 - ${parseFloat(repeatedPercentage)})`}
        />
      </svg>
      <div className={styles.donutSegment}>
        <p className="firstParagraph" style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#4c6ef5' }}>
          {repeatedWords}
        </p>
        <p className="secondParagraph" style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#ff6b6b' }}>
          {totalWords}
        </p>
      </div>
      <div style={{ marginTop: '10px', textAlign: 'left' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#4c6ef5', marginRight: '5px', borderRadius: '50%' }}></span>
          <span style={{ fontSize: '12px' }}>Təkrarlanan sözlər</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ display: 'inline-block', width: '10px', height: '10px', backgroundColor: '#ff6b6b', marginRight: '5px', borderRadius: '50%' }}></span>
          <span style={{ fontSize: '12px' }}>Ümumi sözlər</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(DonutChart);