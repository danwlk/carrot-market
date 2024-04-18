import { Platform, StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        width: '100%',
        borderRadius: 15,
        overflow: 'hidden',
    },

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'cover',
    },

    textContainer: {
        padding: 20,
    },

    title: {
        fontSize: 20,
        marginBottom: 10,
    },

    subTitle: {
        color: colors.secondary,
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default styles;
