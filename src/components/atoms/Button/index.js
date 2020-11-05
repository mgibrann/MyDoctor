import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Button = ({type, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container(type)} onPress={onPress}>
      <Text style={styles.text(type)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (type) => ({
    backgroundColor: type === 'secondary' ? 'white' : '#0BCAD4',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  }),
  text: (type) => ({
    color: type === 'secondary' ? '#112340' : 'white',
    fontSize: 18,
    textAlign: 'center',
  }),
});
