import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const {state, signin} = useContext(Context);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        buttonText="Sign In"
        onSumbit={signin}
      />
      <NavLink text="Don't have an account? Sign Up" routName="Signup" />
    </View>
  );
};

SigninScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 150,
  },
});

export default SigninScreen;
