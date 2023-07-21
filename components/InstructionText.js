import { View, StyleSheet, Text } from 'react-native';
import Colors from '../constants/Colors';

function InstructionText({ children, style }) {
    return(
    <Text style={[styles.instructionText, style]}>{children}</Text>
    );
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: 'white',
        fontSize: 20,
    },
});