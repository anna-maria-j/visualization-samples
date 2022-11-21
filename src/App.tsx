import React from 'react';
import Table from './components/Table';
import Charts from './components/Charts';
import classes from './App.module.scss';

function App() {
  return (
    <div className={classes.app}>
      <Table />
      <Charts />
    </div>
  );
}

export default App;
