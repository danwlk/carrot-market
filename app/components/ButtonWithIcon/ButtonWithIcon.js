import { TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AppText from '../AppText/AppText';

import styles from './ButtonWithIconStyles';
import colors from '../../config/colors';

const ButtonWithIcon = ({
    iconName,
    iconBackground,
    iconSize = 20,
    iconColor = colors.black,
    text = 'default',
    textColor,
    textStyle,
    style,
    onPress,
}) => {
    return (
        <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
            {iconName && (
                <View
                    style={[
                        styles.icon,
                        {
                            backgroundColor: iconBackground,
                            width: iconSize + 20,
                            height: iconSize + 20,
                            borderRadius: (iconSize + 20) / 2,
                        },
                    ]}
                >
                    <MaterialCommunityIcons
                        name={iconName}
                        size={iconSize}
                        color={iconColor}
                    />
                </View>
            )}
            <AppText style={textStyle}>{text}</AppText>
            <MaterialCommunityIcons
                name="chevron-right"
                size={iconSize}
                color={textColor}
                style={styles.arrowIcon}
            />
        </TouchableOpacity>
    );
};

export default ButtonWithIcon;
