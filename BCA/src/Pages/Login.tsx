import { useState } from "react";
import PageHeader from "../components/PageHeader";

export default function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form>
      <PageHeader title="Login pages" subtitle="welcome to Business card app" />
      <p>
        <label htmlFor="userName">
          <h3>user Name</h3>
        </label>
        <input
          id="userName"
          type="text"
          value={username}
          placeholder="userName"
          onChange={(event) => setusername(event.target.value)}
        />
      </p>

      <p>
        <label htmlFor="password">
          <h3>password</h3>
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </p>
    </form>
  );
}
