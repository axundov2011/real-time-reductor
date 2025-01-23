import { stopWords } from './stopWords';

export const processText = (text: string, customStopWords?: string[]) => {
  const stopWordsSet = new Set(customStopWords || stopWords);

  const words = text
    .toLowerCase()
    .replace(/[^\w\s]/gi, '')
    .split(' ')
    .filter((word) => word.trim() !== '' && !stopWordsSet.has(word));

  const uniqueWords = new Set(words);
  return {
    uniqueWordsCount: uniqueWords.size,
    totalWords: words.length,
  };
};
