import React from "react"
import {
    Table

} from 'reactstrap';
import { Container } from "reactstrap";
import { withTranslation } from 'react-i18next';
import {
    BrowserView,
    MobileView
} from "react-device-detect";
class About extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <Container>
                <h1 className="neon-text">{t('titles.about')}</h1>
                <hr className="separator" />
                <h3 className="about">{t('general.mainText')} </h3>
                <BrowserView>
                    <Table className="mt-5 table-text">
                        <thead>
                            <tr>
                                <th className="border-top-0">{t("project.projectTitleName")}</th>
                                <th className="border-top-0">{t("project.firstProjectName")}</th>
                                <th className="border-top-0">{t("project.secondProjectName")}</th>
                                <th className="border-top-0">{t("project.thirdProjectName")}</th>
                                <th className="border-top-0">{t("project.fourthProjectName")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{t("project.projectTitleDesc")}</td>
                                <td>{t("project.firstProjectDesc")}</td>
                                <td>{t("project.secondProjectDesc")}</td>
                                <td>{t("project.thirdProjectDesc")}</td>
                                <td>{t("project.fourthProjectDesc")}</td>
                            </tr>
                            <tr>
                                <td>{t("project.projectTitleTime")}</td>
                                <td>{t("project.firstProjectTime")}</td>
                                <td>{t("project.secondProjectTime")}</td>
                                <td>{t("project.thirdProjectTime")}</td>
                                <td>{t("project.fourthProjectTime")}</td>
                            </tr>
                            <tr>
                                <td>{t("project.projectTitlePeople")}</td>
                                <td>6-8</td>
                                <td>3-6</td>
                                <td>6-10</td>
                                <td>2-5</td>
                            </tr>
                        </tbody>
                    </Table>
                </BrowserView>
                <MobileView>
                    <Table className="mt-5 table-text">
                        <thead>
                            <tr>
                                <th className="border-top-0">{t("project.projectTitleName")}</th>
                                <th className="border-top-0">{t("project.projectTitleDesc")}</th>
                                <th className="border-top-0">{t("project.projectTitleTime")}</th>
                                <th className="border-top-0">{t("project.projectTitlePeople")}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >{t("project.firstProjectName")}</td>
                                <td>{t("project.firstProjectDesc")}</td>
                                <td>{t("project.firstProjectTime")}</td>
                                <td>6-8</td>
                            </tr>
                            <tr>
                                <td>{t("project.secondProjectName")}</td>
                                <td>{t("project.secondProjectDesc")}</td>
                                <td>{t("project.secondProjectTime")}</td>
                                <td>3-6</td>
                            </tr>
                            <tr>
                                <td>{t("project.thirdProjectName")}</td>
                                <td>{t("project.thirdProjectDesc")}</td>
                                <td>{t("project.thirdProjectTime")}</td>
                                <td>6-10</td>
                            </tr>
                        </tbody>
                    </Table>
                </MobileView>
            </Container>
        )
    }
}

export default withTranslation("common")(About);