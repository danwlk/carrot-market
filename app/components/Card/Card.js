import { View, Image } from 'react-native';

import AppText from '../AppText/AppText'
import styles from './CardStyles';

const Card = ({ title, subTitle, image }) => {
    return (
        <View style={styles.container}>
            <Image source={image} style={styles.image} />
            <View style={styles.textContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
};

export default Card;
