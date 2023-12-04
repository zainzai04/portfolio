import React, { useRef, useEffect } from 'react';
import Creative from './Creative';
import Routerr from './Router';
import './App.css'

const styles = {
  app: {
    textAlign: 'center',
  },
  header: {
    border: '1px solid black',
    margin: '1rem auto',
    padding: '1rem',
    width: '60%',
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    margin: '2rem',
  },
  projectContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '1rem',
    margin: '2rem',
  },
  project: {
    border: '1px solid black',
    width: '100px',
    height: '100px',
  },
};

function App() {
  return (
    <div className='big'><Routerr/></div>
  );
}

export default App;
