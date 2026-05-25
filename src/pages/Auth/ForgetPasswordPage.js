import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ForgetPasswordHook from "../../hook/auth/forget-password-hook";

const ForgetPasswordPage = () => {
  const [OnChangeEmail, email, onSubmit] = ForgetPasswordHook();
  return (
    <Container style={{ minHeight: "690px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" md="5" lg="4" className="d-flex flex-column">

          <div className="text-center mb-5 mt-4">
            <h1 className="font-sans text-3xl font-extrabold text-primaryText tracking-tight m-0">
              Forgot Password?
            </h1>
            <p className="text-secondaryText text-sm font-medium mt-2 m-0">
              Enter your email and we'll send a verification code
            </p>
          </div>

          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Email Address</label>
              <input
                value={email}
                onChange={OnChangeEmail}
                placeholder="you@example.com"
                type="email"
                className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
              />
            </div>
            <button
              onClick={onSubmit}
              className="w-full h-12 mt-2 bg-primaryText hover:bg-primaryAccent text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-none cursor-pointer"
            >
              Send Verification Code
            </button>
            
            <div className="text-center mt-2">
              <a href="/login" className="text-xs font-bold text-secondaryText hover:text-primaryText transition-colors no-underline flex items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5"></path>
                </svg>
                Back to Sign In
              </a>
            </div>
          </div>

        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default ForgetPasswordPage;
