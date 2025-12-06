function LoginCard({ loggedIn, setLoggedIn }) {
  return (
    <div>
      {loggedIn ? (
        <div>
          <h1>Welcome back!</h1>
          <button onClick={() => setLoggedIn(false)}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Login</h1>
          <button onClick={() => setLoggedIn(true)}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginCard;
