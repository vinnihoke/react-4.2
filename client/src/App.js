// React Imports
import React, { useState } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Local Imports
import SavedList from './Movies/SavedList';
import Movie from './Movies/Movie';
import MovieList from './Movies/MovieList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = (movie) => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <BrowserRouter>
      <div>
        <SavedList list={savedList}/>
        <Route exact path="/" component={MovieList} />
        <Route exact path="/movies/:id" render={(props) => <Movie addToSavedList={addToSavedList} {...props}/>}/>
      </div>
    </BrowserRouter>
  );
};

export default App;
