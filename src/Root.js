import React from "react";
import { Provider } from "mobx-react";
import { I18nextProvider } from 'react-i18next'


import i18n from "./i18n";
import RootStore from "./store/Rootstore";

export default (props) =>
{
    const store = new RootStore();
    return (
                <Provider store={ store }>
                    <I18nextProvider i18n={ i18n }>
                        { props.children }
                    </I18nextProvider>
                </Provider>
    );
}