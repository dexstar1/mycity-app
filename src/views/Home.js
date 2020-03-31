import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody, Nav, NavItem, Button } from "shards-react";
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
        <CardBody>

<Button theme="primary" className="mb-2 mr-1">
  Add User
</Button>

<Button theme="info" className="mb-2 mr-1">
  Automate
</Button>

<Button theme="success" className="mb-2 mr-1">
  Reminders
</Button>
            <Card>
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
        </Card>
      </CardBody>
    </Row>
   </Container>
);

export default Home;
