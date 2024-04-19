import { View, Image, StatusBar } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import AppText from '../../components/AppText/AppText';
import styles from './ViewProductScreenStyles';

const ViewProductScreen = ({ route }) => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="black" />
            <Image
                source={route.params.image}
                style={styles.image}
            />
            <View style={styles.content}>
                <AppText style={styles.title}>{route.params.title}</AppText>
                <AppText style={styles.price}>{route.params.subTitle}</AppText>
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
