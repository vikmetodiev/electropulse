import React from "react";
import {
  TabContent,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
  Navbar,
} from "reactstrap";
import { ReactComponent as HomeImg } from "./home-icon-silhouette.svg";
import { ReactComponent as ServiceImg } from "./handyman-tools.svg";
import { ReactComponent as AboutImg } from "./quill-drawing-a-line.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelopeOpenText,
  faSun,
  faMoon,
  faGlobeEurope,
} from "@fortawesome/free-solid-svg-icons";
import { inject, observer } from "mobx-react";
import MainPage from "./MainPage.js";
import Contacts from "./Contacts.js";
import About from "./About.js";
import Projects from "./Projects.js";
import { withTranslation } from "react-i18next";
import { useTranslation } from "react-i18next";
import Scrollspy from "react-scrollspy";
import { isMobile } from "react-device-detect";
function HeaderComponent(props) {
  const [t, i18n] = useTranslation("common");
  if (window.localStorage.getItem("language") === "bg") {
    return (
      <NavItem>
        <NavLink
          onClick={() => {
            i18n.changeLanguage("en");
            localStorage.setItem("language", "en");
            isMobile ? props.toggle() : i18n.changeLanguage("en");
          }}
        >
          <FontAwesomeIcon
            icon={faGlobeEurope}
            className="nav-icons"
            style={{ fontSize: 20 }}
          />{" "}
          {t("navbar.language")}
        </NavLink>
      </NavItem>
    );
  } else {
    return (
      <NavItem>
        <NavLink
          onClick={() => {
            i18n.changeLanguage("bg");
            localStorage.setItem("language", "bg");
            isMobile ? props.toggle() : i18n.changeLanguage("bg");
          }}
        >
          <FontAwesomeIcon
            icon={faGlobeEurope}
            className="nav-icons"
            style={{ fontSize: 20 }}
          />{" "}
          Language
        </NavLink>
      </NavItem>
    );
  }
}
class Navbaru extends React.Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;

    this.state = {
      transform: 0,
      isOpen: false,
    };
  }

  componentDidMount() {
    // if(this.state.theme === 'dark') {
    //     require('../DarkTheme.css');
    //  } else {
    //     require('../App.css');
    //  }
    const style = document.getElementById("style-direction");
    style.href = "/App.css";
    document.body.scrollTop = 0;
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (event) => {
    let scrollTop = event.srcElement.body.scrollTop,
      itemTranslate = Math.min(0, scrollTop / 3 - 60);

    this.setState({
      transform: itemTranslate,
    });
  };

  scrollIntoView = (refName) => {
    this["$ref" + refName].scrollIntoView({
      behaviour: "smooth",
      block: "start",
      inline: "center",
    });
    this.setState({
      activeId: refName,
    });
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    var scrollTop =
      window.pageYOffset !== undefined
        ? window.pageYOffset
        : (
            document.documentElement ||
            document.body.parentNode ||
            document.body
          ).scrollTop;
    const { t } = this.props;
    return (
      <div ref={(ref) => (this["$ref1"] = ref)}>
        <div className={scrollTop > 0 ? "header" : "not-scrolled-header"}>
          <Navbar className="background-0" light expand="md">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Scrollspy
                items={[
                  "item-1",
                  "item-2",
                  "item-3",
                  "item-4",
                  "item-5",
                  "item-6",
                  "item-7",
                ]}
                className="nav-blue-tabs border-bottom-0 mb-1 nav-positioning"
                currentClassName="main-icon-color"
              >
                <NavItem>
                  <NavLink
                    onClick={() => {
                      this.scrollIntoView(1);
                      isMobile ? this.toggle() : this.scrollIntoView(1);
                    }}
                  >
                    <HomeImg className="nav-icons" />
                    {t("navbar.home")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => {
                      this.scrollIntoView(2);
                      isMobile ? this.toggle() : this.scrollIntoView(2);
                    }}
                  >
                    <AboutImg className="nav-icons" />
                    {t("navbar.about")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => {
                      this.scrollIntoView(3);
                      isMobile ? this.toggle() : this.scrollIntoView(3);
                    }}
                  >
                    <ServiceImg className="nav-icons" /> {t("navbar.projects")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    onClick={() => {
                      this.scrollIntoView(4);
                      isMobile ? this.toggle() : this.scrollIntoView(4);
                    }}
                  >
                    <FontAwesomeIcon
                      icon={faEnvelopeOpenText}
                      className="nav-icons"
                      style={{ fontSize: 20 }}
                    />{" "}
                    {t("navbar.contacts")}
                  </NavLink>
                </NavItem>
                <NavItem>
                  {this.store.theme === "dark" ? (
                    <NavLink
                      onClick={() => {
                        this.store.themeSelector("light");
                        isMobile
                          ? this.toggle()
                          : this.store.themeSelector("light");
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faMoon}
                        className="nav-icons mt-1"
                        style={{ fontSize: 20 }}
                      />{" "}
                      {t("navbar.light")}
                    </NavLink>
                  ) : (
                    <NavLink
                      onClick={() => {
                        this.store.themeSelector("dark");
                        isMobile
                          ? this.toggle()
                          : this.store.themeSelector("dark");
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faSun}
                        className="nav-icons mt-1"
                        style={{ fontSize: 20 }}
                      />{" "}
                      {t("navbar.dark")}
                    </NavLink>
                  )}
                </NavItem>
                <HeaderComponent toggle={this.toggle} />
              </Scrollspy>
            </Collapse>
          </Navbar>
        </div>

        <TabContent activeTab={this.store.activeTab}>
          <div className="text-center" id="item-1">
            <MainPage />
          </div>
          <div
            style={{ textAlign: "center", marginTop: 50, marginBottom: 90 }}
            ref={(ref) => (this["$ref2"] = ref)}
          >
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span className="blicking-light"></span>
          </div>
          <div className="text-center" id="item-2">
            <About />
          </div>
          <div
            style={{ textAlign: "center", marginTop: 50, marginBottom: 90 }}
            ref={(ref) => (this["$ref3"] = ref)}
          >
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
          </div>
          <div className="text-center" id="item-3">
            <Projects />
          </div>
          <div
            style={{ textAlign: "center", marginTop: 50, marginBottom: 90 }}
            ref={(ref) => (this["$ref4"] = ref)}
          >
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
            <span role="img" aria-label="electricity" className="bolt-mini">
              ⚡
            </span>
            <span className="dot"></span>
          </div>
          <div className="text-center" id="item-4">
            <Contacts />
          </div>
        </TabContent>
      </div>
    );
  }
}

export default withTranslation("common")(inject("store")(observer(Navbaru)));
