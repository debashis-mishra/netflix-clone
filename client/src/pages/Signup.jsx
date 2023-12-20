import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import BackgroundImage from "../components/BackgroundImage.jsx";
import Header from "../components/Header.jsx";
import { firebaseAuth } from "./../utils/firebase-config.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;

  .body {
    gap: 1rem;
    .text {
      gap: 1rem;
      text-align: center;
      font-size: 1.1rem;
      h1 {
        padding: 0 25rem;
      }
    }
  }
`;

const Form = styled.div`
  display: grid;
  grid-template-columns: ${({ showPassword }) =>
    showPassword ? "1fr 1fr" : "2fr 1fr"};
  width: 60%;
`;

const Input = styled.input`
  color: black;
  border: none;
  padding: 1rem 1rem;
  font-size: 1.2rem;
  border: 1px solid black;
  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  border-radius: 0.2rem;
  font-weight: bolder;
  font-size: 1.05rem;
`;

const ButtonGetStarted = styled.button`
  padding: 0.5rem 1rem;
  background-color: #e50914;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: bolder;
  font-size: 1.05rem;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;
`;

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate("/");
  });

  return (
    // <Container showPassword={showPassword}>
    <Container>
      <BackgroundImage />
      <Content className="content">
        <Header login />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel anytime.</h4>
            <h6>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h6>
          </div>

          <Form className="form">
            <Input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <Input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <ButtonGetStarted onClick={() => setShowPassword(true)}>
                Get Started
              </ButtonGetStarted>
            )}
          </Form>
          <Button onClick={handleSignIn}>Sign up</Button>
        </div>
      </Content>
    </Container>
  );
};

export default Signup;
