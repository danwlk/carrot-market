import { Platform, StyleSheet } from 'react-native';

const WelcomeScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 10,
    },

    logoContainer: {
        position: 'absolute',
        top: Platform.OS == 'android' ? '0%' : '5%',
        alignItems: 'center',
        marginTop: 30,
    },

    logoImg: {
        width: 150,
        height: 150,
    },

    text: {
        marginTop: 20,
        fontWeight: '600',
        fontSize: 20,
        textAlign: 'center',
    },

    button: {
        marginBottom: 20,
        width: '90%',
    },
});

export default WelcomeScreenStyles;
