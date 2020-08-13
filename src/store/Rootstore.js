import { action, observable, decorate } from "mobx";
export default class RootStore {
    isModifyingSettings = false;
    language = "";
    user = "VIktor";
    order = "C455AD";
    theme = window.localStorage.getItem('theme') || 'dark';
    activeTab = window.localStorage.getItem('activeTab') || '1';

    selectLanguage = (item) => {
        this.language = item
    }

    themeSelector = (item) => {
        const style = document.getElementById('style-direction');
        localStorage.setItem('theme', item);
        this.theme = item
        if (this.theme === 'dark') {
            style.href = '/DarkTheme.css';
        } else {
            style.href = '/App.css';
        }
    }

    activateTab = (tab) => {
        if (this.activeTab !== tab) {
            this.activeTab = tab;
            localStorage.setItem('activeTab', tab);
        }
    };

}
decorate(RootStore, {
    isModifyingSettings: observable,
    language: observable,
    theme: observable,
    activeTab: observable,

    themeSelector: action,
    activateTab: action
})