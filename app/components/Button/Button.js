import { TouchableOpacity, Text } from 'react-native';

import styles from './ButtonStyles';

const Button = ({ title, color, textColor, style, onPress }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, { backgroundColor: color }, style]}
            onPress={onPress}
        >
            <Text style={[styles.text, {color: textColor}]}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
