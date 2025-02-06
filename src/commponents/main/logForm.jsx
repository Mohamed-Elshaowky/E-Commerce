import { Box, Button, Input, Typography } from "@mui/material";
import { useState } from "react";
import PropTypes from "prop-types"; // استيراد PropTypes

function LoginForm({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [Uemail, setUemail] = useState("");
  const [Upassword, setUpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userName && Uemail && Upassword) {
      onLogin(userName);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Input
        type="text"
        required
        placeholder="Your Name"
        onChange={(e) => setUserName(e.target.value)}
      ></Input>
      <Input
        type="email"
        sx={{ my: "2rem" }}
        required
        placeholder="your email"
        onChange={(e) => setUemail(e.target.value)}
      ></Input>
      <Input
        type="password"
        required
        placeholder="password"
        onChange={(e) => setUpassword(e.target.value)}
      ></Input>
      <Button sx={{ mt: "2rem" }} type="submit" variant="contained">
        Login
      </Button>
    </form>
  );
}
LoginForm.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
function Dashboard({ user, onLogout }) {
  return (
    <Box>
      <Typography variant="h4">Welcome {user}</Typography>
      <Button sx={{ mt: "2rem" }} variant="contained" onClick={onLogout}>
        Logout
      </Button>
    </Box>
  );
}
const LogForm = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userName) => {
    setUser(userName);
  };
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        flexDirection: "column",
        mt: "10%",
      }}
    >
      {user ? (
        <Dashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </Box>
  );
};
Dashboard.propTypes = {
  user: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
export default LogForm;
