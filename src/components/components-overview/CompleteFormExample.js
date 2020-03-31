import React from "react";
import {
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
  FormInput,
  FormGroup,
  FormSelect,
  Button
} from "shards-react";

const CompleteFormExample = () => (
  <ListGroup flush>
    <ListGroupItem className="p-3">
      <Row>
        <Col>
          <Form>
            <Row>
              <Col md="4">
                <label htmlFor="feEmailAddress">Name</label>
                <FormInput
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                />
              </Col>
              <Col md="4">
                <label htmlFor="fePassword">Phone</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
              <Col md="4">
                <label htmlFor="fePassword">Phone</label>
                <FormInput
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
            </Row>
            <br />

            <Row>
              <Col md="4">
              <FormGroup>
                <label htmlFor="feInputAddress">Business Name</label>
                <FormInput id="feInputAddress" placeholder="1234 Main St" />
              </FormGroup>
              </Col>

              <Col md="4">
                <FormGroup>
                  <label htmlFor="feInputAddress2">Lifestyle</label>
                  <FormInput
                    id="feInputAddress2"
                    placeholder="Apartment, Studio or Floor"
                  />
                </FormGroup>
              </Col>
              <Col md="4">
                <label htmlFor="feInputCity">Zip</label>
                <FormInput id="feInputCity" />
              </Col>
            </Row>
            <br />

            <Row>
              <Col md="4">
                <label htmlFor="feInputState">Note(s)</label>
                <FormSelect id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </FormSelect>
              </Col>
              <Col md="4">
                <label htmlFor="feInputZip">Groups</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="4">
                <label htmlFor="feInputZip">Vocations</label>
                <FormInput id="feInputZip" />
              </Col>
            </Row>
            <br />

            <Row>
              <Col md="4">
                <label htmlFor="feInputZip">Email</label>
                <FormInput id="feInputZip" />
              </Col>

              <Col md="4">
                <label htmlFor="feInputZip">Website</label>
                <FormInput id="feInputZip" />
              </Col>
              
              <Col md="4">
                <label htmlFor="feInputZip">Rating</label>
                <FormInput id="feInputZip" />
              </Col>
            </Row>
            <br />
            <Button type="submit">Search</Button>
          </Form>
        </Col>
      </Row>
    </ListGroupItem>
  </ListGroup>
);

export default CompleteFormExample;
