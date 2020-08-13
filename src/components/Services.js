import React, { useState } from "react"
import {
    Card, Button, CardHeader, CardFooter, CardBody,
    Col, Collapse

} from 'reactstrap';



function Services(props) {

    const [collapse, setCollapse] = useState(false);

    const toggle = () => setCollapse(!collapse);
    return (
            <Col xs="12" md="4">
                <Card className="m-3 card-projects" >
                    <CardHeader>{props.item.title}</CardHeader>
                    <CardBody className="text-center card-body-projects" >
                        <img style={{width:"100%",height:200, padding:15}} className="imgData" src={props.item.url} alt="error 3000"/>
                        <Button color="primary" onClick={toggle} className="mb-1 project-buttons">Information</Button>
                        <Collapse isOpen={collapse}>
                            <Card>
                                <CardBody className="text-center card-body-projects-collapse">
                                    {props.item.description}
                                </CardBody>
                            </Card>
                        </Collapse>
                    </CardBody>
                    <CardFooter></CardFooter>
                </Card>
            </Col>
       )

}
export default Services