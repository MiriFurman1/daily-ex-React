import React, { useState } from 'react';
import './App.css';
import Card from './components/Card';
import Name from './components/Name';

import { data } from './mockData';
import { getNames, getPersonBefore } from './utils';

function App() {
  const [modifiedData, setModifiedData] = useState(data);

  return (
    <div className='App'>
      <Name namesArr={getNames(modifiedData)} />
      <Card personsArr={getPersonBefore(modifiedData, 1990)} />
    </div>
  );
}

export default App;