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

function SignUp() {
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
        <Page title="Sign Up">
          <Card sectioned>
            <Heading>Create an Account</Heading>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  label="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
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
                <TextField
                  label="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
                <Stack>
                  <Button submit>Create Account</Button>
                  <TextStyle variation="subdued">
                    Already have an account?{" "}
                    <a href="#" onClick={() => navigate("/signin")}>
                      Sign In
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

export default SignUp;
