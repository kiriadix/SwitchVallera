import React from 'react';
import { Button, Image, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components/index';
import { theme } from '../../constants';

const StartGame = ({ onStartGame }) => {
  const onHandlerDare = () => {
    onStartGame('dare');
  };

  const onHandlerTruth = () => {
    onStartGame('truth');
  };

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Start Game</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>Select an option</Text>
          <View style={styles.buttonContainer}>
            <View style={{ width: 100 }}>
              <Button title="TRUTH" onPress={onHandlerTruth} color={theme.colors.secondary} />
              <Image source={require('../../../assets/god.png')} style={styles.img} />
            </View>
            <View style={{ width: 100 }}>
              <Button title="DARE" onPress={onHandlerDare} color={theme.colors.primary} />
              <Image source={require('../../../assets/devil.png')} style={styles.img} />
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default StartGame;
