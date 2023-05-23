import { makeStyles } from '@mui/styles';
import { theme } from '../../themes/theme';
import { worldMapImage } from '../../assets';

export const useStyles = makeStyles(() => ({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: "100vh",
    backgroundColor: '#2C2C2C',
    backgroundImage: `url(${worldMapImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
    },
  },
  meuTimeHeader: {
    fontSize: theme.typography.h1.fontSize,
    fontWeight: theme.typography.h1.fontWeight,
    fontFamily: 'Rajdhani, sans-serif',
    color: '#FFFFFF',
    marginBottom: theme.spacing(5),
    marginTop: theme.spacing(0),
  },
  inputButtonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  loginInput: {
    width: '300px',
    height: '40px',
    borderRadius: '4px',
    border: 'none',
    padding: theme.spacing(0, 2),
    marginRight: theme.spacing(3),
    '&:focus': {
      outline: '2px solid #B0FC38',
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: theme.spacing(3),
    },
  },
  loginButton: {
    width: '120px',
    height: '40px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#B0FC38',
    color: '#2C2C2C',
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#A0EC28',
    },
    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },
  },
  helpButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: theme.spacing(5),
    right: theme.spacing(5),
    width: '220px',
    height: '50px',
    borderRadius: '25px',
    border: 'none',
    backgroundColor: '#B0FC38',
    color: '#2C2C2C',
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    cursor: 'pointer',
    '& > img' : {
      width: theme.spacing(5),
      height: theme.spacing(5),
      marginRight: theme.spacing(2),
    },
    '&:hover': {
      backgroundColor: '#A0EC28',
    },
    [theme.breakpoints.down('sm')]: {
      left: theme.spacing(3),
    },
  },
  modalContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    height: 'fit-content',
    background: '#CCCCCC',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    padding: '20px',
    zIndex: 9999,
    [theme.breakpoints.down('md')]: {
      width: '80%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '90%',
    },
  },
  modalTitle: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight,
    color: '#2C2C2C',
  },
  modalText: {
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.body1.fontWeight,
    color: '#2C2C2C',
    '& > a': {
      textDecoration: 'none',
      color: '#028a0f',
      '&:hover': {
        color: '#0a9e1a',
      },
      '&:active': {
        color: '#2C2C2C',
      },
    },
  },
  modalButton: {
    width: '100px',
    height: '40px',
    borderRadius: '20px',
    border: 'none',
    backgroundColor: '#B0FC38',
    color: '#2C2C2C',
    fontSize: theme.typography.button.fontSize,
    fontWeight: theme.typography.button.fontWeight,
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#A0EC28',
    },
  },
}));
