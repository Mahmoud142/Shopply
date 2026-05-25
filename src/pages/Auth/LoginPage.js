
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
      <Row className="py-5 d-flex justify-content-center ">
        <Col sm="12" className="d-flex flex-column ">
          <label className="mx-auto title-login">Login</label>
          <input
            value={email}
            onChange={onChangeEmail}
            placeholder="Email..."
            type="text"
            className="user-input my-3 text-center mx-auto"
          />
          <input
            value={password}
            onChange={onChangePassword}
            placeholder="Password..."
            type="password"
            className="user-input text-center mx-auto"
          />
          <button onClick={onSubmit} className="btn-login mx-auto mt-4">
            Login
          </button>
          <label className="mx-auto my-4">
            Don't have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer" }} className="text-danger">
                Click here
              </span>
            </Link>
          </label>

          <label className="mx-auto my-4">
            <Link
              to="/user/forget-password"
              style={{ textDecoration: "none", color: "red" }}
            >
              Forgot your password?
            </Link>
          </label>

          {loading ? (
            loading === true ? (
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            ) : null
          ) : null}
        </Col>
      </Row>
      <ToastContainer />
    </Container>
  );
};

export default LoginPage;
