import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { updateText } from '../../redux/textSlice';
import styles from './index.module.scss';


const TextEditor: React.FC = () => {
  const dispatch = useDispatch();

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateText(e.target.value));
  }, [dispatch]);

  return (
    <textarea className={styles.textEditor}
      placeholder="Mətninizi daxil edin..."
      onChange={handleChange}
    />
  );
};

export default React.memo(TextEditor);
