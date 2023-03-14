import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AppProvider,
  Page,
  Card,
  TextField,
  Button,
  Form,
  FormLayout,
  Stack,
  TextStyle,
  Heading,
} from "@shopify/polaris";
import "./index.css";

function SignIn() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/register", {
        name,
        email,
        password,
        phone,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="page">
      <AppProvider>
        <Page title="Sign In">
          <Card sectioned>
            <Heading>Sign In</Heading>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Button submit>Sign In</Button>
                <Stack>
                  <TextStyle variation="subdued">
                    Not a member?{" "}
                    <a href="#" onClick={() => navigate("/signup")}>
                      Sign Up
                    </a>
                  </TextStyle>
                </Stack>
              </FormLayout>
            </Form>
          </Card>
        </Page>
      </AppProvider>
    </div>
  );
}

export default SignIn;
