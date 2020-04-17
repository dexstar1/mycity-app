import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    Button,
    Modal, ModalBody, ModalHeader
  } from "shards-react";
  
import PageTitle from "../components/common/PageTitle";

// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const toggle = () => {
    //
}

const Referral = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
            <Col sm="10">
                <PageTitle title="Introduction/Referral" subtitle="ljnl" md="12" className="ml-sm-auto mr-sm-auto" />
            </Col>
            <Col sm="2">
                <Button theme="accent">Referral Wizard</Button>
            </Col>
        </Row>
        <Row>
            <Col>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Suggested Connections</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                        <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">
                                Connect to Suggest
                                </th>
                                <th scope="col" className="border-0">
                                Partner info
                                </th>
                                <th scope="col" className="border-0">
                                Introduced to
                                </th>
                                <th scope="col" className="border-0">
                                Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        
                        </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Modal open={false} toggle={toggle}>
          <ModalHeader>Header</ModalHeader>
          <ModalBody><span role="img" aria-label="true">👋</span> Hello there!</ModalBody>
        </Modal>
    </Container>

);

export default Referral;
