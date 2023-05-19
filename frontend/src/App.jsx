import React from 'react';


import './App.scss';
import HomeRoute from './routes/HomeRoute';
import photos from './mocks/photos';
import topics from './mocks/topics';
import { photoLabContext } from './Context';


// Note: Rendering a single component to build components in isolation

const App = () => {
  return (
    <photoLabContext.Provider value={{topics, photos}}>
      <div className="App">
        <HomeRoute/>
      </div>
    </photoLabContext.Provider>
  );
};


export default App;