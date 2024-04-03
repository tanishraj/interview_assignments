import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page.component';
import songDetails from './components/song-details/song-details.component';
import CategoryTitle from "./components/category-title/category-title.component";
import withSplashScreen from './components/splash-screen/withSplashScreen.component';

import './App.css';

function App() {
  return (
    <div className="app">

      <CategoryTitle title="Songs" />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/songDetails" component={songDetails} />
      </Switch>
    </div>
  );
}

export default withSplashScreen(App);
