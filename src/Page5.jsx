import { useNavigate } from "react-router-dom";

function LoginCard() {
  const navigate = useNavigate();

  function handleLogin() {
    localStorage.setItem("loggedIn", "true");
    navigate("/dashboard");
  }

  return (
    <div>
      <h1>Please Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginCard;
