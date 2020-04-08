import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Nav,
  NavItem,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  FormRadio,
} from "shards-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "../App.css";

// import { Redirect } from "react-router-dom";

// Route Views
import UserProfileLite from "./UserProfileLite";
import AddNewPost from "./AddNewPost";
import Errors from "./Errors";
import ComponentsOverview from "./ComponentsOverview";
import Tables from "./Tables";
import BlogPosts from "./BlogPosts";
import SignIn from "./SignIn";

import MainNavbar from "../components/layout/MainNavbar/MainNavbar";
import MainSidebar from "../components/layout/MainSidebar/MainSidebar";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <SearchUsers />,
  },
  {
    path: "/SignIn",
    exact: true,
    main: () => <SignIn />,
  },
  {
    path: "/TopRated",
    main: () => <TopRated />,
  },
  {
    path: "/Introduction",
    main: () => <BlogPosts />,
  },
  {
    path: "/AddUpdate",
    main: () => <AddUpdate />,
  },
  {
    path: "/Errors",
    main: () => <Errors />,
  },
  {
    path: "/Tables",
    main: () => <Tables />,
  },
  {
    path: "/UserProfileLite",
    main: () => <UserProfileLite />,
  },
  {
    path: "/ComponentsOverview",
    main: () => <ComponentsOverview />,
  },
  {
    path: "/ComponentsOverview",
    main: () => <ComponentsOverview />,
  },
  {
    path: "/BlogPosts",
    main: () => <BlogPosts />,
  },
  {
    path: "/AddNewPost",
    main: () => <AddNewPost />,
  },
  {
    path: "/Referral",
    main: () => <Referral />,
  },
  {
    path: "/Wizard",
    main: () => <Wizard />,
  },
  {
    path: "/SearchUsers",
    main: () => <SearchUsers />,
  },
];

export default function DefaultLayout() {
  return (
    <Container fluid>
      <Row>
        <>
          <MainNavbar />
          <Homepage />
        </>
      </Row>
    </Container>
  );
}

function Homepage() {
  return (
    <>
      <aside className="main-sidebar px=0 col-12 open col-md-3 col-lg-2">
        <div className="main-navbar">
          <nav className="align-items-stretch bg-white flex-md-wrap border-bottom p-0 navbar navbar-light">
            <>
              <a
                href="#"
                className="w-100 mr-0 navbar-brand"
                style={{ lineHeight: "25px" }}
              >
                <div className="d-table m-auto">
                  <img
                    id="main-logo"
                    className="d-inline-block align-top mr-1"
                    src={require("../images/logo.png")}
                    alt="mycity"
                    style={{ maxWidth: "80px" }}
                  />
                </div>
              </a>
              <a className="toggle-sidebar d-sm-inline d-md-none d-lg-none">
                <i className="material-icons">arrow-left</i>
              </a>
            </>
          </nav>
        </div>
        <form
          className="main-sidebar__sidebar w-100 border-right d-sm-flex d-md-none d-lg-none"
          style={{ display: "flex", minHeight: "45px" }}
        >
          <div className="ml-3 input-group input-group-seamless">
            <div className="input-group-prepend">
              <span className="input-group-text">
                <i className="material-icons"></i>
              </span>
              <input
                placeholder="Search for something....."
                aria-label="Search"
                className="navbar-search form-control"
              />
            </div>
          </div>
        </form>
        <div className="nav-wrapper">
          <ul className="nav--no-borders flex-column nav">
            <NavItem>
              <Link to="/" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">note_add</i>
                </div>
                <span>Add/Update Member</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Errors" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">vertical_split</i>
                </div>
                <span>3Touch Program</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/Tables" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">edit</i>
                </div>
                <span>Articles</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/UserProfileLite" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">file_copy</i>
                </div>
                <span>Survey/Reviews</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/ComponentsOverview" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">chat</i>
                </div>
                <span>Marketing</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/BlogPosts" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">notifications_none</i>
                </div>
                <span>Reminders</span>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/AddNewPost" className="nav-link">
                <div className="d-inliine-block item-icon-wrapper">
                  <i class="material-icons">settings</i>
                </div>
                <span>Tools</span>
              </Link>
            </NavItem>
          </ul>
        </div>
      </aside>

      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        <Container fluid className="main-content-container px-4">
          <div className="inline-flex">
            <Container>
              <Row>
                <Nav>
                  <NavItem>
                    <Link to="/AddUpdate" className="btn btn-white">
                      Add/Update Member
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/TopRated" className="btn btn-white">
                      View Top Rated Know
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/Referral" className="btn btn-white">
                      Introduction/Referral
                    </Link>
                  </NavItem>
                  <NavItem>
                    <Link to="/Wizard" className="btn btn-white">
                      Referral Wizard{" "}
                    </Link>
                  </NavItem>
                </Nav>
              </Row>
            </Container>
          </div>
          <div className="main-switch">
            <Switch>
              {routes.map((route, index) => (
                // Render more <Route>s with the same paths as
                // above, but different components this time.
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </div>
        </Container>
      </Col>
    </>
  );
}

function SearchUsers() {
  return (
    <>
      <Row>
        <Col>
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Search your Existing Users</h6>
            </CardHeader>
            <ListGroup flush>
              <ListGroupItem className="p-3">
                <Row>
                  <Col>
                    <Form>
                      <Row>
                        <Col md="4">
                          <FormGroup>
                            <FormInput
                              id="addName"
                              type="text"
                              placeholder="SpecifyName"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <FormInput
                              id="addEntryDate"
                              type="number"
                              placeholder="Entry Date"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
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
                        <Col md="4">
                          <FormGroup>
                            <FormInput
                              id="addPhoneNumber"
                              type="text"
                              placeholder="Phone Number"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
                          <FormGroup>
                            <FormInput
                              id="addZip"
                              type="html"
                              placeholder="Specify Zip Code"
                            />
                          </FormGroup>
                        </Col>
                        <Col md="4">
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
                      <Row>
                        <Col md="4">
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
                        <Col md="4">
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

      <Row>
        <CardBody>
          <Link to="/AddUpdate" className="btn btn-white mb-2 mr-1">
            Add User
          </Link>

          <Link to="/SignIn" className="btn btn-white mb-2 mr-1">
            Automate
          </Link>

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
              <tbody></tbody>
            </table>
          </Card>
        </CardBody>
      </Row>
    </>
  );
}

function AddUpdate() {
  return (
    <Row>
      <Col>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Add New Know</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row>
                <Col>
                  <Form>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addName">Name</label>
                          <FormInput
                            id="addName"
                            type="text"
                            placeholder="Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addZip">Zip</label>
                          <FormInput
                            id="addZip"
                            type="number"
                            placeholder="Zip"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addPhone">Phone</label>
                          <FormInput
                            id="addPhone"
                            type="number"
                            placeholder="Phone"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addBusinessName">Business Name</label>
                          <FormInput
                            id="addBusinessName"
                            type="text"
                            placeholder="Business Name"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addWebsite">Website</label>
                          <FormInput
                            id="addWebsite"
                            type="html"
                            placeholder="Website"
                          />
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addVocation">Vocations</label>
                          <FormSelect id="addVocation">
                            <option>Choose Vocation...</option>
                            <option>...</option>
                          </FormSelect>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addLifestyle">lifestyle</label>
                          <FormSelect id="addLifestyle">
                            <option>Specify Lifestyle...</option>
                            <option>...</option>
                          </FormSelect>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addCity">City:</label>
                          <label htmlFor="addNotes">Note(s):</label>
                          <FormInput
                            id="addNotes"
                            type="text"
                            placeholder="Note(s)"
                          />
                          <span style={{ fontSize: "12px" }}>
                            ( In case your city is not listed, request to list
                            it here.)
                          </span>
                        </FormGroup>
                      </Col>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addToMeet">
                            Who do they want to meet by vocation
                          </label>
                          <FormSelect id="addToMeet">
                            <option>Choose Vocation...</option>
                            <option>...</option>
                          </FormSelect>
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="4">
                        <FormGroup>
                          <label htmlFor="addTags">Tags:</label>
                          <FormSelect id="addTags">
                            <option>Specify Tags...</option>
                            <option>...</option>
                          </FormSelect>
                        </FormGroup>
                      </Col>

                      <Col md="4">
                        <label htmlFor="addRating" className="add-rating">
                          Rating
                        </label>
                        <div className="radio-group">
                          <div className="add-radio">
                            <FormRadio>5</FormRadio>
                          </div>
                          <div className="add-radio">
                            <FormRadio>10</FormRadio>
                          </div>
                          <div className="add-radio">
                            <FormRadio>15</FormRadio>
                          </div>
                          <div className="add-radio">
                            <FormRadio>20</FormRadio>
                          </div>
                          <div className="add-radio">
                            <FormRadio>25</FormRadio>
                          </div>
                        </div>

                        <Card className="number-of-reviews">
                          <CardHeader className="border-bottom">
                            Number of Reviews
                          </CardHeader>
                          <CardBody>
                            <li>
                              <div>5 (Very Low)</div>
                              <div style={{ textAlign: "center" }}>-</div>
                              <div>Non Rated</div>
                            </li>
                            <li>
                              <div>10 (Low)</div>
                              <div style={{ textAlign: "center" }}>-</div>
                              <div>6-15</div>
                            </li>
                            <li>
                              <div>15 (Mid)</div>
                              <div style={{ textAlign: "center" }}>-</div>
                              <div>16-25</div>
                            </li>
                            <li>
                              <div>20 (High)</div>
                              <div style={{ textAlign: "center" }}>-</div>
                              <div>25-50</div>
                            </li>
                            <li>
                              <div>25 (Top)</div>
                              <div style={{ textAlign: "center" }}>-</div>
                              <div>51 +</div>
                            </li>
                          </CardBody>
                        </Card>
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
  );
}

function TopRated() {
  return (
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
            <tbody></tbody>
          </table>
        </Card>
      </CardBody>
    </Row>
  );
}

function Referral() {
  return (
    <Row>
      <CardBody>
        <Card>
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
            <tbody></tbody>
          </table>
        </Card>
      </CardBody>
    </Row>
  );
}

function Wizard() {
  return (
    <Row>
      <Col>
        <Card small>
          <CardHeader className="border-bottom">
            <h6 className="m-0">Referral Suggestion Wizard</h6>
          </CardHeader>
          <ListGroup flush>
            <ListGroupItem className="p-3">
              <Row
                style={{
                  padding: "40px 0px",
                }}
              >
                <Col>
                  <Form>
                    <Row>
                      <Col md="4">
                        <label htmlFor="Vocation">
                          Search member by vocations
                        </label>
                        <FormSelect id="Vocation">
                          <option>Choose...</option>
                          <option>...</option>
                        </FormSelect>
                      </Col>
                      <Col md="4">
                        <label htmlFor="Person">
                          Select person to introduce
                        </label>
                        <FormSelect id="Person">
                          <option>Choose...</option>
                          <option>...</option>
                        </FormSelect>
                      </Col>
                      <Col md="4">
                        <label htmlFor="Recipient">
                          Select member who will receive introduction
                        </label>
                        <FormSelect id="Recipient">
                          <option>Choose...</option>
                          <option>...</option>
                        </FormSelect>
                      </Col>
                    </Row>

                    <div
                      style={{
                        textAlign: "right",
                        margin: "20px 0px",
                      }}
                    >
                      <Button type="submit">Show Referral Summary</Button>
                    </div>
                  </Form>
                </Col>
              </Row>
              <div
                style={{
                  textAlign: "center",
                  margin: "20px 0px",
                }}
              >
                <Button
                  className="bg-info text-white text-center rounded p-3"
                  style={{
                    boxShadow: "inset 0 0 5px rgba(0,0,0,.2)",
                  }}
                  type="submit"
                >
                  If you know the person to introduce, switch to direct to
                  direct referral wizard
                </Button>
              </div>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
}
