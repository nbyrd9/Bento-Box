import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';

const AppRouter = () => {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <Switch>
                <Route component={ProductsList} path="/" exact={true} />
                <Route component={AddProduct} path="/add" />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;