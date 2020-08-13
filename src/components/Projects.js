import React from "react"
import { Row } from "reactstrap"
import Services from "./Services.js"
import { Container } from "reactstrap";
import Data from "./Data"
import { withTranslation } from 'react-i18next';
class Projects extends React.Component {
    constructor() {
        super()
        this.state = {
            data: Data,
            allItems: Data
        }
    }

    render() {
        const {t} = this.props
        const Projects = this.state.data.map(item => <Services key={item.id} item={item} />)
        return (
            <Container>

                <h1 className="neon-text">{t("titles.projects")}</h1>
                <hr className="separator"/>
                <Row>
                    {Projects}
                </Row>

            </Container>
        )
    }
}

export default withTranslation("common")(Projects)