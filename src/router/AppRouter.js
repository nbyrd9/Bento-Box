import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import AddProduct from '../components/AddProduct';
import ProductsList from '../components/ProductsList';
import useLocalStorage from '../hooks/useLocalStorage';

const AppRouter = () => {
    const [products, setProducts] = useLocalStorage('products', []); 
    
    return (
      <BrowserRouter>
        <div>
          <Header />
          <div className="main-content">
            <Switch>
                <Route component={ProductsList} path="/" exact={true} />
                <Route
                    render={(props) => (
                        <AddProduct {...props} products={products} setProducts={setProducts} />
                    )}
                    path="/add"
                    />
            </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;