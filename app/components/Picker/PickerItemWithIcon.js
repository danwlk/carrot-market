import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText/AppText';

import colors from '../../config/colors';

const PickerItemWithIcon = ({ label, icon, color, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <View style={[styles.icon, { backgroundColor: color }]}>
                <MaterialCommunityIcons
                    name={icon}
                    color={colors.white}
                    size={40}
                />
            </View>
            <AppText style={styles.label}>{label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 15,
        alignItems: 'center',
        width: '33%',
    },

    label: {
        marginTop: 10,
        textAlign: 'center',
    },

    icon: {
        width: 80,
        height: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default PickerItemWithIcon;
