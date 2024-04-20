import { FlatList, View } from 'react-native';

import Card from '../../components/Card/Card';
import Screen from '../../components/Screen/Screen';

import styles from './MainScreenStyles';
import routes from '../../Nav/routes';

const listings = [
    {
        id: 1,
        title: 'Red Jacket for Sale',
        price: 100,
        image: require('../../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in Great Condition',
        price: 1000,
        image: require('../../assets/couch.jpg'),
    },
];

const MainScreen = ({ navigation }) => {
    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Card
                            title={item.title}
                            subTitle={'$' + item.price}
                            image={item.image}
                            onPress={() =>
                                navigation.navigate(routes.VIEW_PRODUCT_SCREEN, item)
                            }
                        />
                    );
                }}
                ItemSeparatorComponent={<View style={styles.cardSeparator} />}
            />
        </Screen>
    );
};

export default MainScreen;
