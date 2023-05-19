import React from 'react';

import './App.scss';
import './styles/PhotoList.scss';
import TopicList from './components/TopicList';

// Note: Rendering a single component to build components in isolation


const App = () => (

  <div className="App">
     <TopicList/>
  </div>
)

export default App