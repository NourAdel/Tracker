import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, Input} from 'react-native-elements';
import IconE from 'react-native-vector-icons/AntDesign';
import Iconp from 'react-native-vector-icons/MaterialCommunityIcons';

import Spacer from './Spacer';

const AuthForm = ({errorMessage, onSumbit, buttonText}) => {
  const [email, setEmail] = useState('');
  const [password, setPasword] = useState('');
  return (
    <>
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
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Button
          title={buttonText}
          type="outline"
          onPress={() => onSumbit({email, password})}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 15,
    marginBottom:10
  },
});

export default AuthForm;
