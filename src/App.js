import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ListView from './components/ListView/ListView';
import SingleView from './components/SingleView/SingleView';
import './App.css';

function App() {
  const [selectedSalon, setSelectedSalon] = useState({});

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path='/'
          exact
          render={(props) => (
            <ListView {...props} setSalon={setSelectedSalon} />
          )}
        />
        <Route
          path='/salons/:id'
          exact
          render={(props) => <SingleView {...props} salon={selectedSalon} />}
        />
        <Route
          path='/'
          render={() => <h1 className='not-found'>404: Page not found</h1>}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
