import { useState } from "react";
import { useDispatch } from "react-redux";
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from "../../store/store";
import { login } from "../../store/actions/keyAuthentication";

const Login = () => {
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();
  const [apiKey, setApiKey] = useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleLogin = () => {
    return dispatch(login(apiKey));
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
