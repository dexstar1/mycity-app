import React from "react";
import {
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput,
  Col,
  Form,
} from "shards-react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
// import BlogPosts from "./BlogPosts";
import "../App.css";

const routes = [
  {
    path: "/mycity-app",
    main: () => <SignIn />,
  },
  {
    path: "/Home",
    exact: true,
    main: () => <Home />,
  },
];

class SignIn extends React.Component {
  render() {
    return (
      <div>
        <Container fluid className="main-content-container px-4 pb-4">
          <Col sm="12" md="6">
            <strong className="text-muted d-block mb-2">Sign in</strong>
            <Form>
              <InputGroup seamless className="mb-3">
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <i className="material-icons">person</i>
                  </InputGroupText>
                </InputGroupAddon>

                <FormInput value="design.revision" onChange={() => {}} />
              </InputGroup>

              <InputGroup seamless className="mb-3">
                <InputGroupAddon type="prepend">
                  <InputGroupText>
                    <i className="material-icons">lock</i>
                  </InputGroupText>
                </InputGroupAddon>
                <FormInput
                  type="password"
                  value="mySuperSecretPassword"
                  onChange={() => {}}
                />
              </InputGroup>
              <Link
                exact
                to="/Home"
                component={Home}
                theme="primary"
                className="btn btn-white mb-2 mr-1"
              >
                Sign In
              </Link>
            </Form>
          </Col>
        </Container>
      </div>
    );
  }
}
export default SignIn;
