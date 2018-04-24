import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <nav className="nav">
            <h1><Link to="/">Bloc Jams</Link></h1>
            {/* <Link to="/">Landing</Link> */}
            <h4><Link to="/library">Library</Link></h4>
          </nav>
        </header>

        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
