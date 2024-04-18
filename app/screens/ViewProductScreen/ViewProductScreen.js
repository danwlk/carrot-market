import { View, Image, StatusBar, Text } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import AppText from '../../components/AppText/AppText';
import styles from './ViewProductScreenStyles';

const ViewProductScreen = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="black" />
            <Image
                source={require('../../assets/jacket.jpg')}
                style={styles.image}
            />
            <View style={styles.content}>
                <AppText style={styles.title}>Red jacket for sale</AppText>
                <AppText style={styles.price}>$100</AppText>
            </View>

            <ListItem
                image={require('../../assets/mosh.jpg')}
                title="Mosh Hamedani"
                subTitle="5 Listings"
            />
        </View>
    );
};

export default ViewProductScreen;
