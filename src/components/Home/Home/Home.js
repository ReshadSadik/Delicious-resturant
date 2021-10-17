import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Breakfast from '../Menu/Items/Breakfast/Breakfast';
import Dinner from '../Menu/Items/Dinner/Dinner';
import Items from '../Menu/Items/Items/Items';
import Lunch from '../Menu/Items/Lunch/Lunch';

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Items></Items>
      <Switch>
        <Route exact path="/home/breakfast">
          <Breakfast></Breakfast>
        </Route>
        <Route exact path="/home/lunch">
          <Lunch></Lunch>
        </Route>
        <Route exact path="/home/dinner">
          <Dinner></Dinner>
        </Route>
      </Switch>
      <About></About>
      <Footer></Footer>
    </div>
  );
};

export default Home;
