import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ImageBackground, Text, View,SafeAreaView } from 'react-native';
import { useState } from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/Colors.js'
import GameOverScreen from './screens/OverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState('');
  const [gameIsOver, setGameIsOver] = useState(true);
  const [restartGame, setRestartGame] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);


  function pickNumberHandler(pickNumber){
      setUserNumber(pickNumber);
      setGameIsOver(false);

  }
  function gameOverHandler(roundNumber){
    setGameIsOver(true);
    setGuessRounds(roundNumber);
  }

  function restartHandler(){
    setRestartGame(true);
    setUserNumber('');
  }


  let screen = <StartScreen onPickNumber={pickNumberHandler}/>;

  if(restartGame && gameIsOver){
     screen = <StartScreen onPickNumber={pickNumberHandler}/>;
  }
  
  if (userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }
  if (gameIsOver && userNumber){
    screen = <GameOverScreen onRestart={restartHandler} userNumber={userNumber} roundsNumber={guessRounds}/>
  }

  return (
    <LinearGradient colors={[Colors.primary200,Colors.primary100]} style={styles.container}>
      <ImageBackground source={require('./Images/background.png')} style={styles.container} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.container}>{screen}</SafeAreaView>
        
      </ImageBackground>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage:{
    opacity: 0.45,
  }
});


