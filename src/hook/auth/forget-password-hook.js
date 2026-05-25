import  { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  // createNewUser,
  forgetPassword,
  // loginUser,
} from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";

const ForgetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(true);

  const OnChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmit = async () => {
    if (email === "") {
      notify("Please enter the email", "error");
      return;
    }

    localStorage.setItem("user-email", email);
    setLoading(true);
    await dispatch(
      forgetPassword({
        email,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.forgetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        
        if (res.data.status === "success") {
          notify("Code successfully sent to email", "success");
          setTimeout(() => {
            navigate("/user/verify-code");
          }, 1000);
        }
        else if (res.data.status === "fail") {
          notify("This account does not exist", "error");
        }
        else {
          notify(res.data.message, "error");
        }
      }
      // console.log("res inside use effect",res);
    }
  }, [loading, res, navigate]);

  return [OnChangeEmail, email, onSubmit];
};

export default ForgetPasswordHook;
