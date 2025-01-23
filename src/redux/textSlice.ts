import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { processText } from '../utils/textProcessing';
import { stopWords } from '../utils/stopWords';

interface TextState {
  text: string;
  uniqueWordsCount: number;
  totalWords: number;
}

const initialState: TextState = {
  text: '',
  uniqueWordsCount: 0,
  totalWords: 0,
};

const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    updateText(state, action: PayloadAction<string>) {
      const { uniqueWordsCount, totalWords } = processText(action.payload, stopWords);
      state.text = action.payload;
      state.uniqueWordsCount = uniqueWordsCount;
      state.totalWords = totalWords;
    },
  },
});

export const { updateText } = textSlice.actions;
export default textSlice.reducer;
