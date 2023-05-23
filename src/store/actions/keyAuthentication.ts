import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store';
import { loginSuccess, loginFailure } from '../reducers/keyAuthentication';
import { validateApiKey } from '../../api/footballAPI';

export const login = (
  apiKey: string
): ThunkAction<void, RootState, null, any> => async (dispatch) => {
  dispatch({ type: 'LOGIN_REQUEST' });

  try {
    const isValid = await validateApiKey(apiKey);

    if (isValid) {
      dispatch(loginSuccess(apiKey));
      return;
    }

    dispatch(loginFailure('Invalid API key'));
    
  } catch (error) {
    if (error instanceof Error) {
      dispatch(loginFailure(error.message));
    } else {
      dispatch(loginFailure('An unknown error occurred.'));
    }
  }
};
