import React from "react";
import {
    // Container,
    Row,
    Col,
    Card,
    CardHeader,
    CardBody,
    // Nav,
    // NavItem,
    // Button,
    // ListGroup,
    // ListGroupItem,
    // Form,
    // FormInput,
    // FormGroup,
    // FormSelect,
    // FormRadio,
  } from "shards-react";

// import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

const TopRated = () => (
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Top Rated Know</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    Name
                  </th>
                  <th scope="col" className="border-0">
                    Business
                  </th>
                  <th scope="col" className="border-0">
                    Vocation
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                  <th scope="col" className="border-0">
                    Email
                  </th>
                  <th scope="col" className="border-0">
                    Location
                  </th>
                  <th scope="col" className="border-0">
                    Website
                  </th>
                  <th scope="col" className="border-0">
                    Notes
                  </th>
                  <th scope="col" className="border-0">
                    Reminders
                  </th>
                  <th scope="col" className="border-0">
                    Tags
                  </th>
                  <th scope="col" className="border-0">
                    Ratings
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
);

export default TopRated;
