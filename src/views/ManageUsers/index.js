import React from "react";
import { Row, Col, Nav, NavItem} from "shards-react";

import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import PageTitle from "../../components/common/PageTitle";

import SearchUser from "./SearchUser"
import AddUser from "./AddUser"
import TopRated from "./TopRated"

const routes = [
    {
      path: "/",
      exact: true,
      main: () => <SearchUser />,
    },
    {
      path: "/AddUpdate",
      main: () => <AddUser />,
    },
    {
      path: "/TopRated",
      main: () => <TopRated />,
    },
];
  
  
const Index = () => (
    <Router>
        <div className="inline-flex">
            <Row noGutters className="page-header py-4">
                <Col sm="8">
                    <PageTitle title="Manage Members" subtitle="" md="12" className="ml-sm-auto mr-sm-auto" />
                </Col>
                <Col>
                    <Nav>
                    <NavItem>
                        <Link to="/" className="btn btn-white">
                        Members
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/AddUpdate" className="btn btn-white">
                        Add Member
                        </Link>
                    </NavItem>
                    <NavItem>
                        <Link to="/TopRated" className="btn btn-white">
                        View Top Rated Know
                        </Link>
                    </NavItem>
                    </Nav>
                </Col>
            </Row>
        </div>
        <div className="main-switch">
            <Switch>
                {routes.map((route, index) => (
                    <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    children={<route.main />}
                    />
                ))}
            </Switch>
        </div>
    </Router>
);

export default Index;
