import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../constants/Colors';
import InstructionText from '../components/InstructionText';
import Title from '../components/Title';


function GameOverScreen({ onRestart,roundsNumber,userNumber }) {

    function gameOverHandler() {
        onRestart();
    }

    return (
        <View style={styles.ButtonView}>
            <Title>Game Over!</Title>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../Images/success.png')}
                    style={styles.image}
                >
                </Image>
            </View>

            <Text style={styles.summaryText}>
                Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text>{' '}
                rounds to guess the number{' '}
                <Text style={styles.highlight}>{userNumber}</Text>.
            </Text>
            <PrimaryButton onPress={gameOverHandler}  >Restart</PrimaryButton>
        </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    ButtonView: {
        flex: 1,
        alignItems: 'center',
        width: 200,
        margin: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.secondary800,
        overflow: 'hidden',
        margin: 36,
    },
    summaryText: {
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
      },
      highlight: {
        fontWeight:'bold',
        color: Colors.primary500,
      },

});