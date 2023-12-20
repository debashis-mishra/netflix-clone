import React, { useState } from "react";
import styled from "styled-components";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import BackgroundImage from "../components/BackgroundImage.jsx";
import Header from "../components/Header.jsx";
import { firebaseAuth } from "./../utils/firebase-config.js";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;

  .body {
    gap: 2rem;
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

const Input = styled.input`
  color: black;
  border: none;
  font-size: 1.2rem;
  border: 1px solid black;
  padding: 0.5rem 1rem;
  width: 15rem;
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

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15vh 85vh;

  .form-container {
    gap: 2rem;
    height: 85vh;
    .form {
      padding: 2rem;
      background-color: #000000b0;
      width: 25vw;
      gap: 2rem;
      color: white;
    }
  }
`;

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.error(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (user) => {
    if (user) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <Content>
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Sign In</h3>
            </div>

            <Container>
              <div className="flex column">
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
                <Input className="input"
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
                <Button onClick={handleLogIn}>
                  Sign In
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </Content>
    </Container>
  );
};

export default Login;
