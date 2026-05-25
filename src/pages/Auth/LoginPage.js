import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginHook from "../../hook/auth/login-hook";
import { Spinner } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  const [email, password, loading, onChangeEmail, onChangePassword, onSubmit] =
    LoginHook();

  return (
    <Container style={{ minHeight: "680px" }}>
      <Row className="py-5 d-flex justify-content-center">
        <Col sm="12" md="5" lg="4" className="d-flex flex-column">

          {/* Header */}
          <div className="text-center mb-5 mt-4">
            <h1 className="font-sans text-3xl font-extrabold text-primaryText tracking-tight m-0">
              Welcome back
            </h1>
            <p className="text-secondaryText text-sm font-medium mt-2 m-0">
              Sign in to your SHOPPLY account
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-premium border border-borderColor/60 shadow-premium p-6 md:p-8 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Email</label>
              <input
                value={email}
                onChange={onChangeEmail}
                placeholder="you@example.com"
                type="email"
                className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-secondaryText uppercase tracking-wider">Password</label>
              <input
                value={password}
                onChange={onChangePassword}
                placeholder="Enter your password"
                type="password"
                className="w-full h-12 px-4 bg-brandBg border border-borderColor rounded-xl text-sm font-medium text-primaryText placeholder-secondaryText/50 outline-none focus:border-primaryAccent focus:ring-4 focus:ring-primaryAccent/10 transition-all"
              />
            </div>
            <button
              onClick={onSubmit}
              className="w-full h-12 mt-2 bg-primaryText hover:bg-primaryAccent text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-sm hover:shadow-md border-none cursor-pointer"
            >
              {loading ? (
                <Spinner animation="border" size="sm" role="status">
                  <span className="visually-hidden">Loading...</span>
                </Spinner>
              ) : (
                "Sign In"
              )}
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 mt-6">
            <Link to="/user/forget-password" className="text-sm font-semibold text-primaryAccent hover:text-accentHover no-underline transition-colors">
              Forgot your password?
            </Link>
            <p className="text-sm text-secondaryText m-0">
              Don't have an account?{" "}
              <Link to="/register" className="font-semibold text-primaryAccent hover:text-accentHover no-underline transition-colors">
                Create one
              </Link>
            </p>
          </div>

        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
