// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/Header';
import PageHeader from './components/header/PageHeader';
import Footer from './components/footer/Footer';
import Home from './components/main/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Goods from './pages/Goods';
import Info from './pages/Info';

class App extends Component {
  render() {
    // admin here (?)
    return (
      <Router>
        <div className="App">
          <Header />
          <PageHeader />
          <div className="contentWrapper">
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/goods" component={Goods} />
            <Route exact path="/info" component={Info} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
