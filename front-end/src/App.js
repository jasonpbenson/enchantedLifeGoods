// modules
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/main/Home'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <div className="contentWrapper">
            <Route exact path="/" component={Home} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
