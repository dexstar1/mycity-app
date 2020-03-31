import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem } from "shards-react";
import CompleteFormExample from "../components/components-overview/CompleteFormExample";
import { Link } from "react-router-dom";


const Home = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}

<h5 className="breadcrumbb">
    Home
</h5>
    
  <div className="inline-flex">
    <Container>
      <Row>
        <Nav>
            <NavItem><Link to="/" className="btn btn-white">Add/Update Memeber</Link></NavItem>
            <NavItem><Link to="/tables" className="btn btn-white">View Top Rated Know</Link></NavItem>
            <NavItem><Link to="/" className="btn btn-white">Introduction/Referral</Link></NavItem>
            <NavItem><Link to="/" className="btn btn-white">Referral Wizard </Link></NavItem>
        </Nav>
      </Row>
    </Container>
  </div>


    <Row>
        <Col>
            <Card small>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Search Users</h6>
                </CardHeader>
                <CompleteFormExample />
            </Card>
        </Col>
    </Row>

    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">Active Users</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    First Name
                  </th>
                  <th scope="col" className="border-0">
                    Last Name
                  </th>
                  <th scope="col" className="border-0">
                    Country
                  </th>
                  <th scope="col" className="border-0">
                    City
                  </th>
                  <th scope="col" className="border-0">
                    Phone
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Ali</td>
                  <td>Kerry</td>
                  <td>Russian Federation</td>
                  <td>Gdańsk</td>
                  <td>107-0339</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Clark</td>
                  <td>Angela</td>
                  <td>Estonia</td>
                  <td>Borghetto di Vara</td>
                  <td>1-660-850-1647</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Jerry</td>
                  <td>Nathan</td>
                  <td>Cyprus</td>
                  <td>Braunau am Inn</td>
                  <td>214-4225</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colt</td>
                  <td>Angela</td>
                  <td>Liberia</td>
                  <td>Bad Hersfeld</td>
                  <td>1-848-473-7416</td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
   </Container>
);

export default Home;
