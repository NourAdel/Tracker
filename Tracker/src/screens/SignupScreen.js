import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import IconE from 'react-native-vector-icons/AntDesign';
import Iconp from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button, Text, Input} from 'react-native-elements';

import Spacer from '../components/Spacer';

const SignupScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>TRACKER</Text>
      </Spacer>
      <Input
        placeholder="Enter you Emial"
        value={email}
        onChangeText={text => setEmail(text)}
        leftIcon={<IconE name="mail" size={24} color={'black'} />}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        placeholder="Enter you password"
        value={password}
        onChangeText={text => setPasword(text)}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry
        leftIcon={<Iconp name="onepassword" size={24} color={'black'} />}
      />
      <Spacer>
        <Button title="Sign Up" type="outline" />
      </Spacer>
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
