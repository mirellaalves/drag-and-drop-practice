import React from 'react';
import shapes from './dragAndDropData/index';
import Shape from './components/Shape';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <ul className='shapes'>{ shapes.map(({ id, name, img }) => {
        return (
          <div className='shape'>
            {Shape(id, name, img)}
          </div>
        )
      })}</ul>
    </div>
  )
}

export default App;
