import { View, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './AppTextInputStyles';
import colors from '../../config/colors';

const AppTextInput = ({
    icon,
    placeholder = 'Placeholder',
    width = '100%',
    ...otherProps
}) => {
    return (
        <View style={[styles.container, { width: width }]}>
            {icon && (
                <MaterialCommunityIcons
                    name={icon}
                    size={20}
                    color={colors.medium}
                    style={styles.icon}
                />
            )}
            <TextInput
                style={styles.textInput}
                placeholder={placeholder}
                placeholderTextColor={colors.medium}
                {...otherProps}
            />
        </View>
    );
};

export default AppTextInput;
