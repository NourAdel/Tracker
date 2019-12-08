import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SignupScreen = () => {
  const {state, signup} = useContext(Context);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSumbit={signup}
      />
      <NavLink text="Already have an account? Sign In" routName="Signin" />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    header: null,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
});

export default SignupScreen;
