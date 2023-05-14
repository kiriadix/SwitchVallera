import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';

const Header = ({ title }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../../../assets/icon-game.png')} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;
