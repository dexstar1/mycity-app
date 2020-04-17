import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    Button,
    ListGroup,
    ListGroupItem,
  } from "shards-react";

import PageTitle from "../components/common/PageTitle";
// import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const BusinessCard = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Business Card" subtitle="Generate New" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <Card small className="mb-4 pt-3">
            <CardHeader className="border-bottom text-center">
                <div className="mb-3 mx-auto" style={{borderWidth: 1, borderStyle: "dashed", height: 300, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span>Drop Excel file</span>
                </div>
            </CardHeader>
            <ListGroup flush>
                <ListGroupItem className="px-4" />
                <ListGroupItem className="p-4">
                    <Button theme="accent">Generate Card</Button>
                </ListGroupItem>
            </ListGroup>
        </Card>
      </Col>
      <Col lg="8">
      <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Preview</h6>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <div className="mb-3 mx-auto" style={{height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center'}}></div>
      </ListGroupItem>
    </ListGroup>
  </Card>
      </Col>
    </Row>
  </Container>
);

export default BusinessCard;
