import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SignupHook from "./../../hook/auth/signup-hook";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  const [
    name, email, phone, password, confirmPassword, ,
    onChangeName, onChangeEmail, onChangePhone,
    onChangePassword, onChangeConfirmPassword, , onSubmit,
  ] = SignupHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" md="5" lg="4" className="d-flex flex-column">

          {/* Header */}
          <div className="text-center mb-5 mt-4">
            <h1 className="font-sans text-3xl font-extrabold text-primaryText tracking-tight m-0">
              Create Account
            </h1>
            <p className="text-secondaryText text-sm font-medium mt-2 m-0">
              Join SHOPPLY and start shopping premium
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 md:p-8 flex flex-col gap-4">
            {[
              { label: "Full Name", value: name, onChange: onChangeName, placeholder: "John Doe", type: "text" },
              { label: "Email", value: email, onChange: onChangeEmail, placeholder: "you@example.com", type: "email" },
              { label: "Phone", value: phone, onChange: onChangePhone, placeholder: "+20 1XX XXX XXXX", type: "tel" },
              { label: "Password", value: password, onChange: onChangePassword, placeholder: "Create a password", type: "password" },
              { label: "Confirm Password", value: confirmPassword, onChange: onChangeConfirmPassword, placeholder: "Repeat password", type: "password" },
            ].map((field, i) => (
              <div key={i} className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">{field.label}</label>
                <input
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={field.placeholder}
                  type={field.type}
                  className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
                />
              </div>
            ))}
            <button
              onClick={onSubmit}
              className="w-full h-12 mt-2 bg-primaryText hover:bg-primaryAccent text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-none cursor-pointer"
            >
              Create Account
            </button>
          </div>

          {/* Link */}
          <p className="text-sm text-secondaryText text-center mt-6 m-0">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-primaryAccent hover:text-accentHover no-underline transition-colors">
              Sign In
            </Link>
          </p>

        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default RegisterPage;
