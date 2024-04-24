import { View, Image, TouchableOpacity } from 'react-native';

import AppText from '../AppText/AppText';
import styles from './CardStyles';

const Card = ({ title, subTitle, imageUri, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Image source={{ uri: imageUri }} style={styles.image} />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </TouchableOpacity>
    );
};

export default Card;
