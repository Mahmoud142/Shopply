import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createNewUser } from "../../redux/actions/authAction";
import notify from "./../useNotifaction";

const SignupHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const lastProcessedRes = useRef(null);
  const hasSubmitted = useRef(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePhone = (e) => {
    setPhone(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
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
    if (name === "") {
      isValid = false;
      message = "Please enter your username";
    } else if (!validateEmail(email)) {
      isValid = false;
      message = "Email is invalid";
    } else if (phone.length < 10 || phone.length > 11) {
      isValid = false;
      message = "Invalid phone number";
    } else if (password.length < 8) {
      isValid = false;
      message = "Password must be at least 8 characters";
    } else if (password !== confirmPassword) {
      isValid = false;
      message = "Passwords do not match";
    }
    return [isValid, message];
  };

  const res = useSelector((state) => state.authReducer.createUser);

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
      createNewUser({
        name: name,
        email: email,
        phone: phone,
        password: password,
        confirmPassword: confirmPassword,
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
      console.log("Response received:", res);

      if (res.data) {
        if (res.status === 201 || res.data.status === "success") {
          notify("Account created successfully. Please check your email", "success");
          localStorage.setItem("userEmail", email);
          setName("");
          setEmail("");
          setPhone("");
          setPassword("");
          setConfirmPassword("");
          setTimeout(() => {
            navigate("/user/verify-email");
          }, 2000);
        } else if (res.data.errors && res.data.errors.length > 0) {
          notify(res.data.errors[0].msg, "error");
        } else if (res.data.message) {
          notify(res.data.message, "error");
        }
      } else {
        console.log("Unexpected response format:", res);
        notify("An unexpected error occurred", "error");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, res, navigate]);

  return [
    name,
    email,
    phone,
    password,
    confirmPassword,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangeConfirmPassword,
    setLoading,
    onSubmit,
  ];
};
export default SignupHook;
