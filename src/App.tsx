import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import TextEditor from './components/textEditor';
import Statistics from './components/statistika';
import DonutChart from './components/documentChart';
import './App.css';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className='app'>
        <TextEditor />
        <div>
          <Statistics />
          <DonutChart />
        </div>
      </div>
    </Provider>
  );
};

export default App;
