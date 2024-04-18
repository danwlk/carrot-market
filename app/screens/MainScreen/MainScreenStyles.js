import { Platform, StyleSheet } from 'react-native';

import colors from '../../config/colors';

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: colors.light,
        paddingHorizontal: Platform.OS === 'ios' ? '5%' : '2.5%',
        paddingTop: 10,
    },

    cardSeparator: {
        marginBottom: 20,
    },
});

export default styles;
