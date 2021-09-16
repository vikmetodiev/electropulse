import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { inject, observer } from "mobx-react";
import { Container, Row, Col } from "reactstrap";
import { withTranslation } from 'react-i18next';
import { TimelineMax, Back } from "gsap/all"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            pushesCount: 0,
            absCount: 0,
            changePosition: false
        }
    }

    componentDidMount(){
        const divEl = document.querySelector(".bolt div")
        const bolt = document.querySelector(".bolt")
        const elements = document.querySelectorAll(".bolt svg")
        elements.forEach((el) => {
            bolt.className = "bolt animate";
        
            var tween = new TimelineMax({
                onComplete() {
                    bolt.className = "bolt";
                    repeat();
                }
            })
                .set(divEl, {
                    rotation: 360
                })
                .to(divEl, 0.9, {
                    y: 80,
                    rotation: 370
                })
                .to(divEl, 0.8, {
                    y: -140,
                    rotation: 20
                })
                .to(divEl, 0.3, {
                    rotation: -24,
                    y: 80
                })
                .to(divEl, 1.0, {
                    ease: Back.easeOut.config(1.8),
                    rotation: 0,
                    y: 0
                });
        
            function repeat() {
                setTimeout(() => {
                    bolt.className = "bolt animate";
                    tween.restart();
                }, 400);
            }
        });

        setInterval(() => this.setState({changePosition: !this.state.changePosition}), 3000);
    }



    pushUps = () => {
        this.setState({
            pushesCount: this.state.pushesCount + 1
        })
    }

    Abs = () => {
        this.setState({
            absCount: this.state.absCount + 1
        })
    }

    render() {
        console.log(this.state.changePosition);
        const { t } = this.props;
        return (
            <Container>
                <div className="div-animation mb-4"><h1 className="neon-text" style={{ fontSize: 55 }} >Electro</h1>
                    <h2 className="neon-text" style={{ fontSize: 35 }}>
                        <FontAwesomeIcon icon={faBolt} className="shadows" style={{ fontSize: 30 }} />Pulse</h2>
                </div>
                <Row style={{ textAlign: "justify" }}>
                    <Col className="main-page-border text-center">
                        <h3 >{t('mainPage.firstText')} {t('mainPage.secondText')}</h3>
                        <FontAwesomeIcon icon={faLightbulb} className="shadows blicking-light" />
                    </Col>
                    <Col>
                        <h3 >{t('general.submainText')}</h3>
                        <hr className="hr-color" />
                        <h3 >{t('mainPage.fourthText')}</h3>
                    </Col>
                </Row>
                <h3 style={{ width: "70%", margin: "auto", padding: 25 }}>{t("mainPage.fifthText")}</h3>
                <div className="bolt" style={this.state.changePosition? {} : {right:150}}>
                    <svg viewBox="0 0 170 57" className="white left">
                        <path d="M36.2701759,17.9733192 C-0.981139498,45.4810755 -7.86361824,57.6618438 15.6227397,54.5156241 C50.8522766,49.7962945 201.109341,31.1461782 161.361488,2"></path>
                    </svg>
                    <svg viewBox="0 0 170 57" className="white right">
                        <path d="M36.2701759,17.9733192 C-0.981139498,45.4810755 -7.86361824,57.6618438 15.6227397,54.5156241 C50.8522766,49.7962945 201.109341,31.1461782 161.361488,2"></path>
                    </svg>
                    <div>
                        <span></span>
                    </div>
                    <svg viewBox="0 0 112 44" className="circle">
                        <path d="M96.9355003,2 C109.46067,13.4022454 131.614152,42 56.9906735,42 C-17.6328048,42 1.51790702,13.5493875 13.0513641,2"></path>
                    </svg>
                    <svg viewBox="0 0 70 3" className="line left">
                        <path transform="translate(-2.000000, 0.000000)" d="M2,1.5 L70,1.5"></path>
                    </svg>
                    <svg viewBox="0 0 70 3" className="line right">
                        <path transform="translate(-2.000000, 0.000000)" d="M2,1.5 L70,1.5"></path>
                    </svg>
                </div>
            </Container>
        )
    }
}
export default withTranslation("common")(inject('store')(observer(Home)));