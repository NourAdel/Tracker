import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-elements';

import {Context} from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({navigation}) => {
  const {state, signup} = useContext(Context);

  return (
    <View style={styles.container}>
      <AuthForm
        errorMessage={state.errorMessage}
        buttonText="Sign Up"
        onSumbit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
        <Text style={styles.link}>Aleardy have an account? Sign In</Text>
      </TouchableOpacity>
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
  link: {
    color: 'blue',
    marginTop: 10,
    marginLeft:15
  },
});

export default SignupScreen;
