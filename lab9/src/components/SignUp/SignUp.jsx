import "./SignUp.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";
import { createUser } from "../../firebase/auth";

export default function SignUp() {
  const { userLoggedIn } = useAuth();
  const [form, setForm] = useState({
    email: "",
    password: "",
    'confirm-password': ''
  });
  const [registering, setRegistering] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    setForm({})
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!registering) {
      setRegistering(true);
      try {
        if (form.password !== form["confirm-password"]) {
          throw Error("Passwords doesn't match, please try again.")
        }
        await createUser(form.email, form.password);
      } catch (e) {
        setErrorMessage(e.message);
      } finally {
        setRegistering(false);
      }
    }
  };

  if (userLoggedIn) {
    return <Navigate to="/profile" replace={true} />;
  }

  return (
    <div className="form-container">
      <h2 className="title">Sign up</h2>
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
        <input className="form-input"
          type="password"
          name="confirm-password"
          value={form["confirm-password"]}
          onChange={handleChange}
          required
        />
        <button className="form-btn"disabled={registering}>Sign up</button>
        {errorMessage && <p className="form-error-message">{errorMessage}</p>}
        <Link className="login-link" to="/login">Login page</Link>
      </form>
    </div>
  );
}
