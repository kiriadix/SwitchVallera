import { Button, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { Card } from '../../components';
import { data, theme } from '../../constants';

const Game = ({ gameMode, onGameOver }) => {
  const randomNumber = Math.floor(Math.random() * data[gameMode].length);

  const actividad = data[gameMode][randomNumber];

  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      <View style={styles.container}>
        <Text style={styles.title}>{actividad}</Text>
        <Card style={styles.inputContainer}>
          <Text style={styles.label}>The player is a:</Text>
          <View style={styles.buttonContainer}>
            <View style={{ width: 100 }}>
              <Button title="LOSER" onPress={() => onGameOver('l')} color={theme.colors.primary} />
            </View>
            <View style={{ width: 100 }}>
              <Button
                title="WINER"
                onPress={() => onGameOver('w')}
                color={theme.colors.secondary}
              />
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>
  );
};

export default Game;
