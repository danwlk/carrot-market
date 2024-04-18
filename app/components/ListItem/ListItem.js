import { Image, TouchableHighlight, View, StyleSheet } from 'react-native';
import {
    GestureHandlerRootView,
    Swipeable,
} from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText/AppText';
import colors from '../../config/colors';

const ListItem = ({
    image,
    numberOfLines,
    onPress,
    renderRightActions,
    showChevron,
    style,
    subTitle,
    title,
}) => {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight
                    onPress={onPress}
                    underlayColor={colors.light}
                >
                    <View style={[styles.container, style]}>
                        <Image source={image} style={styles.pfp} />
                        <View style={styles.title}>
                            <AppText numberOfLines={numberOfLines}>{title}</AppText>
                            <AppText numberOfLines={numberOfLines} style={styles.subTitle}>
                                {subTitle}
                            </AppText>
                        </View>
                        {showChevron && (
                            <MaterialCommunityIcons
                                name="chevron-right"
                                size={20}
                            />
                        )}
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
    },

    pfp: {
        width: 70,
        height: 70,
        borderRadius: 100,
    },

    title: {
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1,
    },

    subTitle: {
        fontSize: 14,
        color: colors.medium,
    },
});

export default ListItem;
