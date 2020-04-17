import React from "react";
import {
    Container,
    Row,
    Col,
    Card,
    CardHeader,
    // CardBody,
    // Nav,
    // NavItem,
    Button,
    ListGroup,
    ListGroupItem,
    Form,
    FormInput,
    FormGroup,
    FormSelect,
    // FormRadio,
  } from "shards-react";

import PageTitle from "../components/common/PageTitle";


const ReverseTracking = () => (
    <Container fluid className="main-content-container px-4">
        <Row noGutters className="page-header py-4">
        <PageTitle title="Reverse Tracking" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
        </Row>
        <Row>
              <Col>
                <Card small>
                  <CardHeader className="border-bottom">
                    <h6 className="m-0">Track Partners</h6>
                  </CardHeader>
                  <ListGroup flush>
                    <ListGroupItem className="p-3">
                      <Row>
                        <Col>
                          <Form>
                            <Row>
                              <Col>
                                <FormGroup>
                                  <FormInput
                                    id="addName"
                                    type="text"
                                    placeholder="Phone number or Contact name"
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <FormInput
                                    id="addEmail"
                                    type="number"
                                    placeholder="Email"
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <FormGroup>
                                        <FormSelect id="location">
                                            <option>Select location...</option>
                                            <option>...</option>
                                        </FormSelect>
                                    </FormGroup>
                                </Col>
                                <Col>
                                    <FormGroup>
                                    <FormInput
                                        id="addZip"
                                        type="html"
                                        placeholder="Specify Zip Code"
                                    />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                              <Col>
                                <FormGroup>
                                  <FormSelect id="addLifestyle">
                                    <option>Specify Lifestyle...</option>
                                    <option>...</option>
                                  </FormSelect>
                                  <span style={{ fontSize: "12px" }}>
                                    (Multiple lifestyle can be selected)
                                  </span>
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <FormSelect id="addVocations">
                                    <option>Specify Vocations...</option>
                                    <option>...</option>
                                  </FormSelect>
                                  <span style={{ fontSize: "12px" }}>
                                    (Multiple vocations can be selected)
                                  </span>
                                </FormGroup>
                              </Col>
                            </Row>
                            <Row>
                                <Col md="6">
                                    <FormGroup>
                                      <FormSelect id="addTags">
                                          <option>Select Tags...</option>
                                          <option>...</option>
                                      </FormSelect>
                                      <span style={{ fontSize: "12px" }}>
                                          (Multiple tags can be selected)
                                      </span>
                                      </FormGroup>
                                  </Col>
                            </Row>
                            
      
                            <Button
                              className="bg-primary text-white text-center rounded p-3 "
                              type="submit"
                            >
                              Submit
                            </Button>
                          </Form>
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </Card>
              </Col>
            </Row>      
    </Container>
);

export default ReverseTracking;
