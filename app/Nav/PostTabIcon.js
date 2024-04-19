import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import colors from '../config/colors';

const PostTabIcon = () => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={() => navigation.jumpTo('PostItemScreen')}
        >
            <View style={styles.colorCircle}>
                <View style={styles.innerCircle}>
                    <MaterialCommunityIcons
                        name="plus-thick"
                        size={20}
                        color={colors.primary}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderColor: colors.light,
        borderRadius: 100,
        borderWidth: 1,
        height: 60,
        justifyContent: 'center',
        marginTop: -15,
        width: 60,
    },

    colorCircle: {
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
        width: 50,
    },

    innerCircle: {
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 100,
        height: 30,
        justifyContent: 'center',
        width: 30,
    },
});

export default PostTabIcon;
