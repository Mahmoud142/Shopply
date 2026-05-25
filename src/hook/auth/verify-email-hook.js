import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyEmail } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";

const VerifyEmailHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(true);

  const onChangeCode = (e) => {
    setCode(e.target.value);
  };

  const onSubmit = async () => {
    if (code === "") {
      notify("Please enter the verification code", "error");
      return;
    }
    const email = localStorage.getItem("userEmail");
    if (!email) {
      notify("Email not found. Please register again.", "error");
      setTimeout(() => {
        navigate("/register");
      }, 2000);
      return;
    }
    
    setLoading(true);
    await dispatch(
      verifyEmail({
        email: email,
        verificationCode: code,
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.verifyEmail);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        if (res.status === 200 || (res.data && res.data.token)) {
          localStorage.removeItem("userEmail");
          notify("Email verified successfully! Please log in.", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        } else if (res.data && res.data.message) {
          notify(res.data.message, "error");
        } else {
          notify("The code is incorrect or expired", "error");
        }
      }
    }
  }, [loading, res, navigate]);

  return [code, onChangeCode, onSubmit];
};

export default VerifyEmailHook;
