import {View, Text, StyleSheet} from 'react-native'

import Colors from '../constants/Colors'

function NumberContainter({children}){
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}

export default NumberContainter;

const styles = StyleSheet.create({
container:{
    borderWidth: 4,
    borderColor: Colors.secondary800,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
numberText:{
    color: Colors.secondary800,
    fontSize: 36,
    fontWeight: 'bold',
}
});