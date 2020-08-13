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
                <h5 className="about">{t('general.mainText')} </h5>
                <BrowserView>
                    <Table className="mt-5 table-text">
                        <thead>
                            <tr>
                                <th className="border-top-0">Project Name</th>
                                <th className="border-top-0">First Project</th>
                                <th className="border-top-0">Second Project</th>
                                <th className="border-top-0">Third Project</th>
                                <th className="border-top-0">Fourth Project</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >Description</td>
                                <td>First descritption</td>
                                <td>Second descritption</td>
                                <td>Third descritption</td>
                                <td>Fourth descritption</td>
                            </tr>
                            <tr>
                                <td>Estimated job amount time</td>
                                <td>Approximately 1 year</td>
                                <td>Approximately 5 months</td>
                                <td>Approximately 10 months</td>
                                <td>Approximately 1 year and a half</td>
                            </tr>
                            <tr>
                                <td>People Worked on the project</td>
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
                                <th className="border-top-0">Project Name</th>
                                <th className="border-top-0">Description</th>
                                <th className="border-top-0">Estimated job amount time</th>
                                <th className="border-top-0">People Worked on the project</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td >FirstProject</td>
                                <td>First descritption</td>
                                <td>Approximately 1 year</td>
                                <td>6-8</td>
                                <td>Fourth descritption</td>
                            </tr>
                            <tr>
                                <td>second</td>
                                <td>Approximately 1 year</td>
                                <td>Approximately 5 months</td>
                                <td>Approximately 10 months</td>
                                <td>Approximately 1 year and a half</td>
                            </tr>
                            <tr>
                                <td>Third</td>
                                <td>6-8</td>
                                <td>3-6</td>
                                <td>6-10</td>
                                <td>2-5</td>
                            </tr>
                        </tbody>
                    </Table>
                </MobileView>
            </Container>
        )
    }
}

export default withTranslation("common")(About);