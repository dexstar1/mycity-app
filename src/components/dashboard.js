import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  NavItem,
  Button,
  ListGroup,
  ListGroupItem,
  Form,
  FormSelect,
} from "shards-react";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "../App.css";
import UserProfileLite from "../views/UserProfileLite";
import AddNewPost from "../views/AddNewPost";
import Errors from "../views/Errors";
import ComponentsOverview from "../views/ComponentsOverview";
import Tables from "../views/Tables";
import BlogPosts from "../views/BlogPosts";
import SignInUp from "../views/SignIn";
import MainNavbar from "./layout/MainNavbar/MainNavbar";

import Index from "../views/ManageUsers"
import BusinessCard from "../views/BusinessCard"
import Referral from "../views/Referral"
import ReverseTracking from "../views/ReverseTracking"

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Index />,
  },
  {
    path: "/AddCard",
    main: () => <BusinessCard />,
  },
  {
    path: "/Referral",
    main: () => <Referral />,
  },
  {
    path: "/Tracking",
    main: () => <ReverseTracking />,
  },
  {
    path: "/Introduction",
    main: () => <BlogPosts />,
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
    path: "/BlogPosts",
    main: () => <BlogPosts />,
  },
  {
    path: "/AddNewPost",
    main: () => <AddNewPost />,
  },
  {
    path: "/Wizard",
    main: () => <Wizard />,
  },
//   {
//     path: "/SignInUp",
//     main: () => <SignInUp />,
//   },
];

class Dashboard extends React.Component {
  render() {
    return (
        <Container fluid>
            <Row>
                <MainNavbar />
                <Router>
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
                                <i className="material-icons">note_add</i>
                                </div>
                                <span>Manage Members</span>
                            </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/AddCard" className="nav-link">
                                <div className="d-inliine-block item-icon-wrapper">
                                <i className="material-icons">edit</i>
                                </div>
                                <span>Add Business Card</span>
                            </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/Referral" className="nav-link">
                                <div className="d-inliine-block item-icon-wrapper">
                                <i className="material-icons">chat</i>
                                </div>
                                <span> Introduction/Referral</span>
                            </Link>
                            </NavItem>
                            <NavItem>
                            <Link to="/tracking" className="nav-link">
                                <div className="d-inliine-block item-icon-wrapper">
                                <i className="material-icons">settings</i>
                                </div>
                                <span>Reverse Tracking</span>
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
                            {/* <div className="inline-flex" /> */}
                            {/* <div className="main-switch"> */}
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
                            {/* </div> */}
                        </Container>
                    </Col>
                </Router>
            </Row>
        </Container>
    );
  }
}

export default Dashboard;


// function SignIn() {
//     return (
//         <div>
//           <Container fluid className="main-content-container px-4 pb-4">
//             <Col sm="12" md="6">
//               <strong className="text-muted d-block mb-2">Sign in</strong>
//               <Form>
//                 <InputGroup seamless className="mb-3">
//                   <InputGroupAddon type="prepend">
//                     <InputGroupText>
//                       <i className="material-icons">person</i>
//                     </InputGroupText>
//                   </InputGroupAddon>
  
//                   <FormInput value="design.revision" onChange={() => {}} />
//                 </InputGroup>
  
//                 <InputGroup seamless className="mb-3">
//                   <InputGroupAddon type="prepend">
//                     <InputGroupText>
//                       <i className="material-icons">lock</i>
//                     </InputGroupText>
//                   </InputGroupAddon>
//                   <FormInput
//                     type="password"
//                     value="mySuperSecretPassword"
//                     onChange={() => {}}
//                   />
//                 </InputGroup>
//                 <Link
//                   to="/Home"
//                   component={Home}
//                   className="btn btn-white mb-2 mr-1"
//                 >
//                   Sign In
//                 </Link>
//               </Form>
//             </Col>
//           </Container>
//         </div>
//       );
// }

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