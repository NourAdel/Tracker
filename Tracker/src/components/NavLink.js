import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';

import Spacer from './Spacer';

const NavLink = ({navigation, text, routName}) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routName)}>
      <Spacer>
        <Text style={styles.link}>{text}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
