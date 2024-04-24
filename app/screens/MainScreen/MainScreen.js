import { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';

import Card from '../../components/Card/Card';
import Screen from '../../components/Screen/Screen';
import AppText from '../../components/AppText/AppText';
import Button from '../../components/Button/Button';

import styles from './MainScreenStyles';
import colors from '../../config/colors';
import routes from '../../Nav/routes';
import listingsApi from '../../api/listings';

const MainScreen = ({ navigation }) => {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);

    const loadListings = async () => {
        const response = await listingsApi.getListings();
        if (!response.ok) return setError(true);

        setError(false);
        setListings(response.data);
    };

    useEffect(() => {
        loadListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText>Couldn't retrieve listings!{"\n"}</AppText>
                    <Button title="retry" onPress={loadListings} color={colors.primary} textColor={colors.white} />
                </>
            )}
            <FlatList
                data={listings}
                keyExtractor={(listing) => listing.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <Card
                            title={item.title}
                            subTitle={'$' + item.price}
                            imageUri={item.images[0].url}
                            onPress={() =>
                                navigation.navigate(
                                    routes.VIEW_PRODUCT_SCREEN,
                                    item
                                )
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
