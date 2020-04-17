import React from "react";
import {
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Col,
  Form,
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem, Nav, NavItem, NavLink
} from "shards-react";
import ButtonGroups from "../components/components-overview/ButtonGroups";
import InputGroups from "../components/components-overview/InputGroups";
import SeamlessInputGroups from "../components/components-overview/SeamlessInputGroups";

import { Link } from "react-router-dom";
// import Home from "./Home";
// import BlogPosts from "./BlogPosts";
import "../App.css";

class SignIn extends React.Component {
  render() {
    return (
      <div>
          <Card>
        <Nav>
            <NavItem>
                <NavLink active href="#">
                Active
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="#">Another Link</NavLink>
            </NavItem>
            <NavItem>
                <NavLink disabled href="#">
                Disabled Link
                </NavLink>
            </NavItem>
        </Nav>
        </Card>
        <Container fluid className="main-content-container px-4 pb-8">
          <Col className="row justify-content-center">
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                <h6 className="m-0">Sign In</h6>
                </CardHeader>

                <ListGroup flush>
                <ListGroupItem className="px-3">
                    <Form>
                    <strong className="text-muted d-block mb-3">
                        Button Groups
                    </strong>
                    <ButtonGroups />

                    <strong className="text-muted d-block mb-2">
                        Input Groups
                    </strong>
                    <InputGroups />

                    <strong className="text-muted d-block mb-2">
                        Seamless Input Groups
                    </strong>
                    <SeamlessInputGroups />
                    </Form>
                </ListGroupItem>
                </ListGroup>
            </Card>
          </Col>
        </Container>
      </div>
    );
  }
}
export default SignIn;
