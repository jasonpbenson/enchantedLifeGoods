// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/main/Home';
import Login from './components/main/pages/loginReg/Login';
import Register from './components/main/pages/loginReg/Register';
import Goods from './components/main/pages/goods/Goods';
import ProductDetails from './components/main/pages/goods/ProductDetails';
import Info from './components/main/pages/info/Info';
import Account from './components/main/pages/account/Account';
import Cart from './components/main/pages/cart/Cart';
import UpdateAddress from './components/main/pages/cart/UpdateAddress';
import ConfirmOrder from './components/main/pages/cart/ConfirmOrder';
import ThankYou from './components/main/pages/cart/ThankYou';
import Admin from './components/main/pages/admin/Admin';

class App extends Component {
  render() {
    // admin here (?)
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="contentWrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/goods" component={Goods} />
            <Route exact path="/goods/:id" component={ProductDetails} />
            <Route exact path="/info" component={Info} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/updateAddress" component={UpdateAddress} />
            <Route exact path="/confirmOrder" component={ConfirmOrder} />
            <Route exact path="/thankYou" component={ThankYou} />
            <Route exact path="/admin" component={Admin} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
