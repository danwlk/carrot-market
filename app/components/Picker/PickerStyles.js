import { StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },

    modal: {
        flex: 1,
        paddingHorizontal: 20,
    },

    icon: {
        marginRight: 10,
    },

    text: {
        flex: 1,
        fontSize: 18,
        color: colors.dark,
    },
});

export default styles;
