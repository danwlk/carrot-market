import { Platform, StyleSheet } from 'react-native';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },

    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
    },

    loginButton: {
        marginTop: 40,
    },
    registerButton: {
        marginTop: 20,
    },

    errorMessage: {
        color: colors.danger,
    },
});

export default styles;
