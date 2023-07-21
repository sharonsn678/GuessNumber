import { View, StyleSheet, Text, Alert, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import Title from '../components/Title.js'
import NumberContainter from '../components/NumberContainer.js';
import PrimaryButton from '../components/PrimaryButton.js';
import InstructionText from '../components/InstructionText.js';
import GuessLogItem from '../components/GuessLogItem.js';

let minBoundary = 1;
let maxBoundary = 100;

function generateRandom(min, max, exclude) {
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    return rndNum;
}

function GameScreen({ userNumber, onGameOver }) {

    const initialGuess = generateRandom(1, 100, userNumber)
    const [guessNumber, setGuessNumber] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);

    function nextGuessHandler(direction) {

        console.log(direction, guessNumber, userNumber);
        if ((direction === 'lower' && guessNumber < userNumber) ||
            (direction === 'higher' && guessNumber > userNumber)) {
            Alert.alert(
                "Oho!",
                'You know that it is wrong...',
                [{ test: 'Sorry', style: 'cancel' }]
            )
        }

        else {


            if (direction === 'lower') {
                maxBoundary = guessNumber;
            } else {
                minBoundary = guessNumber;
            }


            const newNumber = generateRandom(minBoundary, maxBoundary, userNumber);
            console.log(newNumber, minBoundary, maxBoundary);
            setGuessNumber(newNumber);
            setGuessRounds((previousRounds) => [newNumber, ...previousRounds]);

        }
    };

    useEffect(() => {
        if (guessNumber === userNumber) {
            onGameOver(guessRounds.length);
        }
    }, [guessNumber, userNumber, onGameOver]);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainter>{guessNumber}</NumberContainter>
            <View style={styles.screen}>
                <InstructionText style={styles.InstructionText}>Higher or lower?</InstructionText>
                <View style={styles.ButtonsContainer}>
                    <View style={styles.ButtonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>
                            +
                        </PrimaryButton>

                    </View>
                    <View style={styles.ButtonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    </View>
                </View>
                <View style={styles.listContainer}>
                    <FlatList
                        data={guessRounds}
                        renderItem={(itemdata) => (
                            <GuessLogItem
                            roundNumber={guessRounds.length - itemdata.index}
                            guess={itemdata.item}
                            />
                        )}
                        keyExtractor={(item) => item}
                    />
                </View>
            </View>
        </View>

    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 12,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white'
    },
    InstructionText: {
        marginBottom: 20,
    },
    ButtonsContainer: {
        flexDirection: 'row',
    },
    ButtonContainer: {
        flex: 1,
    },
    listContainer:{
        flex: 1,
        padding: 16,
    }

});