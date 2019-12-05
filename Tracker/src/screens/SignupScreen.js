import React from 'react';
import {View, StyleSheet} from 'react-native';
import IconE from 'react-native-vector-icons/AntDesign';
import Iconp from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Text, Input} from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>TRACKER</Text>
      </Spacer>
      <Input
        placeholder="Enter you Emial"
        leftIcon={<IconE name="mail" size={24} color={'black'} />}
      />
      <Spacer />
      <Input
        placeholder="Enter you password"
        leftIcon={<Iconp name="onepassword" size={24} color={'black'} />}
      />
      <Spacer>
        <Button title="Sign Up" type="outline" />
      </Spacer>
      </View>
  );
};

SignupScreen.navigationOption = () => {
  return {header: null};
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    marginBottom:100
  }
});

export default SignupScreen;
