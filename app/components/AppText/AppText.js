import { Text, StyleSheet, Platform } from 'react-native';
import fonts from '../../config/fonts';

const AppText = ({ children, style, numberOfLines }) => {
    return (
        <Text numberOfLines={numberOfLines} style={[styles.text, style]}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontFamily: Platform.OS === 'ios' ? fonts.ios : fonts.android,
    },
});

export default AppText;
