import { TextInput, View, StyleSheet, Text, Alert } from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton.js'
import GameScreen from './GameScreen.js';
import Colors from '../constants/Colors.js'
import Title from '../components/Title.js';
import Card from '../components/Card.js'
import InstructionText from '../components/InstructionText.js';

function StartScreen({onPickNumber}) {
    const [enteredNumber, setEnteredNumber] = useState('');

    function numberInputHandler(enteredText) {
        setEnteredNumber(enteredText);
    }

    function resetNumberHandler() {
        setEnteredNumber('');
    }

    function confirmHandler() {
        const chosenNumber = parseInt(enteredNumber);
        if (isNaN(chosenNumber) || chosenNumber <= 0 && chosenNumber > 99) {
            Alert.alert(
                'Invalid Number',
                'It should be a number between 1 to 99',
                [{ text: "OK", style: 'distructive', onPress: resetNumberHandler }]
            );
            return;
        }
        else{
            console.log("1");
            onPickNumber(chosenNumber);
            console.log("2");
        }
    }

    return (
        <View style={styles.rootContainer}>
            <Title>Guess My Numver</Title>
        <Card>
            <InstructionText>Enter Number:</InstructionText>
            <TextInput style={styles.numberInput}
                maxLength={2}
                keyboardType='number-pad'
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={numberInputHandler}
                value={enteredNumber}
            ></TextInput>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={resetNumberHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>

                </View>
                <PrimaryButton onPress={confirmHandler} >Confirm</PrimaryButton>
            </View>



        </Card>
        </View>
    );

}



export default StartScreen

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center',
        
      },


    numberInput: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        width: 50,
        fontSize: 32,
        borderBottomColor: Colors.accent100,
        borderBottomWidth: 2,
        marginVertical: 8,
        color: Colors.accent100,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    buttonsContainer: {
        width: 300,
        flexDirection: 'row'
    },
    buttonContainer: {
        flex: 1
    }
})