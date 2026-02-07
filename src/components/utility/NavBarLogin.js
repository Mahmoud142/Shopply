
import {
  Navbar,
  Container,
  FormControl,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import NavbarSearchHook from "../../hook/search/navbar-search-hook";
const NavBarLogin = () => {
  const [onChangeSearchWord, searchWord] = NavbarSearchHook();
  let word = "";
  if (localStorage.getItem("searchWord") != null) {
    word = localStorage.getItem("searchWord");
  }

  const getStoredUser = () => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : "";
  };

  const [user, setUser] = useState("");

  useEffect(() => {
    const syncUser = () => setUser(getStoredUser());

    syncUser();

    const handleStorage = (e) => {
      if (!e || e.key === "user" || e.key === "token") syncUser();
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", syncUser);

    const intervalId = setInterval(syncUser, 1000);

    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", syncUser);
      clearInterval(intervalId);
    };
  }, []);

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser("");
  };

  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} className="logo" />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            value={word}
            onChange={onChangeSearchWord}
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            {user != "" ? (
              <NavDropdown title={user.name} id="basic-nav-dropdown">
                {user.role === "admin" ? (
                  <NavDropdown.Item href="/admin/allproducts">
                    لوحة التحكم
                  </NavDropdown.Item>
                ) : (
                  <NavDropdown.Item href="/user/profile">
                    الصفحه الشخصية
                  </NavDropdown.Item>
                )}
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={logOut} href="/">
                  تسجيل خروج
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link
                href="/login"
                className="nav-text d-flex mt-3 justify-content-center"
              >
                <img src={login} className="login-img" alt="sfvs" />
                <p style={{ color: "white" }}>دخول</p>
              </Nav.Link>
            )}

            <Nav.Link
              href="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarLogin;
