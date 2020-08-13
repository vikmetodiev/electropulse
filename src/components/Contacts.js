import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { Container } from "reactstrap";
import { withTranslation } from 'react-i18next';
class Contacts extends React.Component {
    render() {
        const {t} = this.props;
        return (
            <Container >
                <h1 className="neon-text">{t('titles.contacts')} </h1>
                <hr className="separator"/>
                <ul style={{ listStyle: "none",textAlign:"justify" }} className="mt-3">
                    <li className="mb-2"><FontAwesomeIcon icon={faFacebookSquare} className="nav-icons mb-0" style={{width:15}}/>{t('labels.facebook')} : <strong>Electropulse.Company@facebook.com</strong></li>
                    <li className="mb-2"><FontAwesomeIcon icon={faEnvelope} className="nav-icons mb-0" />{t('labels.email')}: <strong>melectropulse@gmail.com</strong></li>
                    <li className="mb-2"><FontAwesomeIcon icon={faPhone} className="nav-icons mb-0" />{t('labels.phone')}: <strong>0896759390, 0877642589</strong></li>
        <li className="mb-2"><FontAwesomeIcon icon={faMapMarkedAlt} className="nav-icons mb-0" />{t('labels.address')}: <strong>{t('general.address')}</strong></li>
                </ul>
                <img src="./Images/bolt.jpg" className="w-25" alt="bolt"/>
            </Container>
        )
    }
}

export default withTranslation("common")(Contacts)