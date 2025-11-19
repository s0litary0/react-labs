import "./Login.css";
import { login } from "../../firebase/auth";
import { useAuth } from "../../contexts/authContext";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

export default function Login() {
  const { userLoggedIn } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [signingIn, setSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!signingIn) {
      setSigningIn(true);
      try {
        await login(form.email, form.password);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setSigningIn(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <div className="form-container">
      <h2 className="title">Sign in</h2>
      <form className="form-container__form" onSubmit={handleSubmit}>
        <input className="form-input"
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input className="form-input"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button className="form-btn" disabled={signingIn}>Sign in</button>
        <Link className="sign-up-link" to="/sign-up">Sign up page</Link>
      </form>
      {errorMessage && <p className="form-error-message">{errorMessage}</p>}
    </div>
  );
}
