import createDataContext from './createDataContext';
import AsyncStorage from '@react-native-community/async-storage';

import tracker from '../APIs/tracker';
import {navigate} from '../navigationRef';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return {...state, errorMessage: action.payload};
    case 'signin':
      return {errorMessage: '', token: action.payload};
    default:
      return state;
  }
};
const signup = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await tracker.post('/signup', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'something went wrong'});
    }
  };
};

const signin = dispatch => {
  return async ({email, password}) => {
    try {
      const response = await tracker.post('/signin', {email, password});
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({type: 'signin', payload: response.data.token});
      navigate('TrackList');
    } catch (err) {
      dispatch({type: 'add_error', payload: 'something went wrong'});
    }
  };
};
const signout = dispatch => {
  return () => {};
};

export const {Provider, Context} = createDataContext(
  AuthReducer,
  {signin, signout, signup},
  {token: null, errorMessage: ''},
);
