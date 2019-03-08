// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/main/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Goods from './pages/Goods';
import Info from './pages/Info';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Admin from './pages/Admin';

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
            <Route exact path="/info" component={Info} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/admin" component={Admin} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
