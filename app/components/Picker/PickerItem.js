import { TouchableOpacity, StyleSheet } from 'react-native';

import AppText from '../AppText/AppText';


const PickerItem = ({ label, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <AppText style={styles.label}>{label}</AppText>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    label: {
        margin: 20,
    },
});

export default PickerItem;
