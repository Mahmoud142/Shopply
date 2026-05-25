import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/actions/authAction";
import { useNavigate } from "react-router-dom";
import notify from "../useNotifaction";

const ResetPasswordHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setComfirmPassword] = useState("");
  const [loading, setLoading] = useState(true);

  const OnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const OnChangeConfirmPassword = (e) => {
    setComfirmPassword(e.target.value);
  };
  const onSubmit = async () => {
    if (password === "") {
      notify("Please enter the password", "error");
      return;
    }
    if (password !== confirmPassword) {
      notify("Passwords do not match", "error");
      return;
    }

    setLoading(true);
    await dispatch(
      resetPassword({
        email: localStorage.getItem("user-email"),
        newPassword: password,
        resetToken: localStorage.getItem("resetToken"),
      }),
    );
    setLoading(false);
  };

  const res = useSelector((state) => state.authReducer.resetPassword);

  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
        if (res.data.status === "success") {
          notify("Password changed successfully", "success");
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
        if (res.data.status === "fail") {
          notify("Please request a new code", "error");
        }
      }
    }
  }, [loading, res, navigate]);

  return [
    password,
    confirmPassword,
    OnChangePassword,
    OnChangeConfirmPassword,
    onSubmit,
  ];
};

export default ResetPasswordHook;
