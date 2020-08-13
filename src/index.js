import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import WebFont from 'webfontloader';
import Root from "./Root.js";
import common_bg from "./translations/bg/common.json";
import common_en from "./translations/en/common.json";
import i18next from "i18next";
i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
  lng: window.localStorage.getItem('language') || 'bg',                              // language to use
  resources: {
    en: {
      common: common_en               // 'common' is our custom namespace
    },
    bg: {
      common: common_bg
    },
  },
});

WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});
ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
