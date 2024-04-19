import React from "react";
import Layout from "../../Components/Layout";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import Input from "../../Components/UI/Input";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
/**
 * @author
 * @function SignIn
 **/

const SignIn = (props) => {
  return (
    <Layout>
      <Container>
        <Row style={{margin:'50px'}}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
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

export default SignIn;
