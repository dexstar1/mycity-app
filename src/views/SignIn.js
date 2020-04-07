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

class SignIn extends React.Component {
  render() {
    return (
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
          </Form>
        </Col>
      </Container>
    );
  }
}
export default SignIn;
