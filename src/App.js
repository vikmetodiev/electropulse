import React from "react";
import Navbaru from "./components/Navbar.js";
import { inject, observer } from "mobx-react";
import { Helmet } from "react-helmet";
import Footer from "./components/Footer.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
    const style = document.getElementById("style-direction");
    if (this.store.theme === "dark") {
      style.href = "/DarkTheme.css";
    } else {
      style.href = "/App.css";
    }
  }
  componentDidMount() {
    console.log(window.localStorage.getItem("theme"));
    const style = document.getElementById("style-direction");
    if (this.store.theme === "dark") {
      style.href = "/DarkTheme.css";
    } else {
      style.href = "/App.css";
    }
  }

  render() {
    return (
      <div className="App">
        <Helmet>
          <meta
            property="og:title" content="Stop the trolls"          
          />
        </Helmet>
        <Navbaru />
        <Footer />
      </div>
    );
  }
}

export default inject("store")(observer(App));
