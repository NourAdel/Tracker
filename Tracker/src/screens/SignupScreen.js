import React from 'react';
import {Button, View, Text, StyleSheet} from 'react-native';

const SignupScreen = ({navigation}) => {
  return (
    <>
      <Text style={{fontSize: 48}}>SignupScreen</Text>
      <Button
        title="Sign In"
        onPress={() => navigation.navigate('Signin')}></Button>
        <Button
        title="main flow"
        onPress={() => navigation.navigate('mainFlow')}></Button>
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
