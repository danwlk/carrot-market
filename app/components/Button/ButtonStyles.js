import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        height: 50,
        width: '100%',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default styles;
