import React from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../Components/UI/Input";
/**
 * @author
 * @function SignUp
 **/

const SignUp = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="First Name"
                    placeholder="First Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last Name"
                    placeholder="Last Name"
                    type="text"
                    value=""
                    onChange={() => {}}
                  />
                </Col>
              </Row>
              <Input
                label="Email"
                placeholder="Last email"
                type="email"
                value=""
                onChange={() => {}}
              />

              <Input
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value=""
                  onChange={()=>{}}
                  />
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default SignUp;
