import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../../store/store';
import { login } from '../../store/actions/keyAuthentication';
import { useStyles } from './style';
import { questionMarkIcon } from '../../assets/index';

const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch<ThunkDispatch<RootState, null, AnyAction>>();
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(e.target.value);
  };

  const handleLogin = async () => {
    setIsLoading(true);
    await dispatch(login(apiKey));
    setIsLoading(false);
  };

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div className={classes.loginContainer}>
      <h1 className={classes.meuTimeHeader}>MeuTime</h1>
      <div className={classes.inputButtonWrapper}>
        <input
          type="text"
          value={apiKey}
          onChange={handleInput}
          placeholder="Coloque sua API Key aqui"
          className={classes.loginInput}
        />
        <button
          onClick={handleLogin}
          className={classes.loginButton}
          disabled={isLoading}
        >{isLoading ? 'Loading...' : 'Login'}</button>
      </div>
      <button
        className={classes.helpButton}
        onClick={handleModal}
      >
        <img
          src={questionMarkIcon}
          alt='Question mark icon'
        />
        O que é API Key?
      </button>
      {openModal && (
        <div className={classes.modalContainer}>
          <h2 className={classes.modalTitle}>How to get your API Key</h2>
          <p className={classes.modalText}>
            1. Vá no site de <a href="https://dashboard.api-football.com/register" target='_blank' rel="noreferrer">registro</a> da API-Football;
          </p>
          <p className={classes.modalText}>
            2. Preencha os dados e clique em "Sign Up";
          </p>
          <p className={classes.modalText}>
            3. Vá no seu email e confirme o cadastro;
          </p>
          <p className={classes.modalText}>
            4. No <a href='https://dashboard.api-football.com/' target='_blank' rel="noreferrer">dashboard</a>, acesse a aba 'Account' e o item 'My Access';
          </p>
          <p className={classes.modalText}>
            5. Passe o mouse sobre a API Key para revelá-la;
          </p>
          <p className={classes.modalText}>
            6. Copie e cole a API Key no campo de login;
          </p>
          <button onClick={handleModal} className={classes.modalButton}>Close</button>
        </div>
      )}
    </div>
  );
};

export default Login;
