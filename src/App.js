import React, { createContext } from 'react';

import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './components/Review/Rewiew'
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import ProductDeatil from './components/ProductDeatil/ProductDeatil';
import Loggin from './components/Loggin/Loggin';
import { AuthContextProvider, PrivateRoute } from './components/Loggin/useAuth';
import Shipment from './components/Shipment/Shipment';

 
function App() {
  const user = {name: "kodumia", email: "kodumia@gmail.com"}
  return (
    <div>
      <AuthContextProvider>
        <Header></Header>
        <Router>
          <Switch>
            <Route path='/shop'>
            <Shop></Shop>
            </Route>
            <Route path='/review'>
              <Review></Review>
            </Route>
            <Route path="/inventory">
              <Inventory></Inventory>
            </Route>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/product/:productkey">
              <ProductDeatil></ProductDeatil>
            </Route>
            <PrivateRoute path="/shipment">
              <Shipment></Shipment>
            </PrivateRoute>
            <Route path="/loggin">
              <Loggin></Loggin>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        </AuthContextProvider>
    
      
      
    </div>
  );
}

export default App;
