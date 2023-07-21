
import { View, StyleSheet, Text, Pressable } from 'react-native';
import Colors from '../constants/Colors';




function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonContainter} >
            <Pressable
                style={({ pressed }) =>
                    pressed ? [styles.buttonInnerContainer, styles.pressed]
                        : styles.buttonInnerContainer}
                android_ripple={{ color: '#640233' }}
                onPress={onPress}>
                <View>
                    <Text style={styles.buttonText}>{children}</Text>
                </View>
            </Pressable>
        </View>
    );

}

export default PrimaryButton

const styles = StyleSheet.create({
    buttonContainter: {
        margin: 4,
        borderRadius: 28,
        overflow: 'hidden',
        backgroundColor: Colors.primary200,
    },
    buttonInnerContainer: {
        backgroundColor: Colors.secondary100,
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    pressed: {
        opacity: 0.75
    }

});