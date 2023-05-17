import { useState } from "react";

const Login = () => {
  const [apiKey, setApiKey] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleLogin = () => {
    if (apiKey.trim() === '') {
      alert('Please enter your API key');
      return;
    }
    console.log(apiKey);
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="text" value={apiKey} onChange={handleInput} placeholder="Enter your API key" />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
};

export default Login;
