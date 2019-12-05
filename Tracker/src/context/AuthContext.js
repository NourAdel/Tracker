import createDataContext from './createDataContext';

const AuthReducer = (state, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export const {Provider, Context} = createDataContext(
  AuthReducer,
  {},
  {isSignedIn: false},
);
