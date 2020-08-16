import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Search from './components/Search';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Search />
        <p>
          Search results goes here.
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
