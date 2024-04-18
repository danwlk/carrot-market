import { StyleSheet, Platform } from 'react-native';

import colors from '../../config/colors';
import fonts from '../../config/fonts';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10,
    },

    textInput: {
        flex: 1,
        fontSize: 18,
        fontFamily: Platform.OS === 'ios' ? fonts.ios : fonts.android,
        color: colors.dark,
    },

    icon: {
        marginRight: 10,
    },
});

export default styles;
