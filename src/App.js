import React from "react";
import Navbaru from './components/Navbar.js'
import { inject, observer } from "mobx-react";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
  }
  componentDidMount() {
    const style = document.getElementById('style-direction');
    if (this.store.theme === 'dark') {
      style.href = '/DarkTheme.css';
    } else {
      style.href = '/App.css';
    }
  }

  render() {
    return (
      <div className="App">
        <Navbaru />
      </div>
    );
  }
}

export default (inject('store')(observer(App)));
