import { View, Image, StatusBar } from 'react-native';

import ListItem from '../../components/ListItem/ListItem';
import AppText from '../../components/AppText/AppText';
import styles from './ViewProductScreenStyles';

const ViewProductScreen = ({ route }) => {
    const listing = route.params;

    return (
        <View style={styles.container}>
            <StatusBar barStyle="black" />
            <Image source={listing.image} style={styles.image} />
            <View style={styles.content}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText style={styles.price}>${listing.price}</AppText>
            </View>

            <ListItem
                image={require('../../assets/mosh.jpg')}
                title="Mosh Hamedani"
                subTitle="5 Listings"
                showChevron
            />
        </View>
    );
};

export default ViewProductScreen;
