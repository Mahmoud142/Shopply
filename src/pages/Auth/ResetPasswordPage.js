import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import ResetPasswordHook from "../../hook/auth/reset-password-hook";

const RsetPasswordPage = () => {
  const [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ] = ResetPasswordHook();

  return (
    <Container style={{ minHeight: "690px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" md="5" lg="4" className="d-flex flex-column">

          <div className="text-center mb-5 mt-4">
            <h1 className="font-sans text-3xl font-extrabold text-primaryText tracking-tight m-0">
              Reset Password
            </h1>
            <p className="text-secondaryText text-sm font-medium mt-2 m-0">
              Choose a strong new password for your account
            </p>
          </div>

          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">New Password</label>
              <input
                value={password}
                onChange={OnChangePassword}
                placeholder="••••••••"
                type="password"
                className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
              />
            </div>
            
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Confirm Password</label>
              <input
                value={confirmPassword}
                onChange={OnChangeConfirmPassword}
                placeholder="••••••••"
                type="password"
                className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
              />
            </div>

            <button
              onClick={onSubmit}
              className="w-full h-12 mt-2 bg-primaryText hover:bg-primaryAccent text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-none cursor-pointer"
            >
              Save New Password
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

export default RsetPasswordPage;
