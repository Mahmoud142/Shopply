import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/actions/authAction";
import notify from "./../useNotifaction";

const LoginHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const lastProcessedRes = useRef(null);
  const hasSubmitted = useRef(false);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validationValues = () => {
    let isValid = true;
    let message = "";
    if (!validateEmail(email)) {
      isValid = false;
      message = "Email is invalid";
    } else if (password.length < 6) {
      isValid = false;
      message = "Password must be at least 5 characters";
    }

    return [isValid, message];
  };

  const res = useSelector((state) => state.authReducer.loginUser);

  const onSubmit = () => {
    const [isValid, message] = validationValues();
    if (!isValid) {
      notify(message, "error");
      return;
    }

    lastProcessedRes.current = res;
    hasSubmitted.current = true;
    setLoading(true);
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
    );
  };

  useEffect(() => {
    if (
      hasSubmitted.current &&
      loading &&
      res &&
      res !== lastProcessedRes.current
    ) {
      lastProcessedRes.current = res;
      hasSubmitted.current = false;
      setLoading(false);
      try {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem("user", JSON.stringify(res.data.data.user));
          notify("Logged in successfully", "success");
          navigate("/");
        } else if (res.data?.message) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          notify(res.data.message, "error");
        }
      } catch (err) {
            notify("An unexpected error occurred", "error");
      }
    }
  }, [loading, res, navigate]);

  return [email, password, loading, onChangeEmail, onChangePassword, onSubmit];
};
export default LoginHook;
