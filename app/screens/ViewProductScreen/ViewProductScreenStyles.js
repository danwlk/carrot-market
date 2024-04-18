import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    image: {
        width: '100%',
        height: 300,
    },

    content: {
        padding: 20,
    },

    title: {
        fontSize: 25,
        marginBottom: 10,
    },

    price: {
        color: colors.secondary,
        fontSize: 20,
    },
});

export default styles;
