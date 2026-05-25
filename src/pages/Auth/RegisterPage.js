import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupHook from "./../../hook/auth/signup-hook";
import { ToastContainer } from "react-toastify";
const RegisterPage = () => {
  const [
    name,
    email,
    phone,
    password,
    confirmPassword,
    ,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    ,
    onSubmit,
  ] = SignupHook();
  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center hieght-search">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Register New Account</label>
          <input
            value ={name}
            onChange={onChangeName}
            placeholder="Username..."
            type="text"
            className="user-input mt-3 text-center mx-auto"
          />
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="Email..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={phone}
            onChange={onChangePhone}
            placeholder="No. Phone Number..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="Password..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder="Confirm Password..."
            type="password"
            className="user-input my-3 text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">Create Account</button>
          <label className="mx-auto my-4">
            Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
