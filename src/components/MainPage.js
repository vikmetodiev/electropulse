import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faLightbulb } from "@fortawesome/free-solid-svg-icons"
import { inject, observer } from "mobx-react";
import { Container, Row, Col } from "reactstrap";
import { withTranslation } from 'react-i18next';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
        this.state = {
            pushesCount: 0,
            absCount: 0
        }
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
        const { t } = this.props;
        return (
            <Container>
                <div className="div-animation mb-4"><h1 className="main-title" >Electro</h1>
                    <h2 className="second-main-title">
                        <FontAwesomeIcon icon={faBolt} className="nav-icons mb-0 main-icon-color" />Pulse</h2>
                </div>
                <Row style={{ textAlign: "justify" }}>
                    <Col className="main-page-border text-center">
                        <h3 >{t('mainPage.firstText')} {t('mainPage.secondText')}</h3>
                        <FontAwesomeIcon icon={faLightbulb} className="shadows" />
                    </Col>
                    <Col>
                        <h4 >{t('general.submainText')}</h4>
                        <hr className="hr-color" />
                        <h5 >{t('mainPage.fourthText')}</h5>
                    </Col>
                </Row>
                <h5 style={{width:"70%",margin:"auto",padding:25}}>Естеството на работа в бранша на ел. инсталациите крие свойте рискове затова ние се стремим да имаме висока степен на сигурност на работното място!</h5>
            </Container>
        )
    }
}
export default withTranslation("common")(inject('store')(observer(Home)));