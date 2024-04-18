import { StatusBar, View } from 'react-native';

import Screen from '../../components/Screen/Screen';
import ListItem from '../../components/ListItem/ListItem';
import ListItemSeparator from '../../components/ListItem/ListItemSeparator';
import ButtonWithIcon from '../../components/ButtonWithIcon/ButtonWithIcon';

import styles from './AccountScreenStyles';
import colors from '../../config/colors';

const currentUser = {
    pfp: require('../../assets/mosh.jpg'),
    name: 'Mosh Hamedani',
    email: 'programmingwithmosh@gmail.com',
};

const AccountScreen = () => {
    return (
        <Screen style={styles.screen}>
            <ListItem
                image={currentUser.pfp}
                title={currentUser.name}
                subTitle={currentUser.email}
                style={styles.profile}
                onPress={() => console.log('profile')}
            />

            <View style={styles.buttons}>
                <ButtonWithIcon
                    iconName="format-list-bulleted"
                    iconColor={colors.white}
                    iconBackground={colors.primary}
                    text="My Listings"
                    onPress={() => console.log('my listings')}
                />
                <ListItemSeparator />
                <ButtonWithIcon
                    iconName="email"
                    iconColor={colors.white}
                    iconBackground={colors.secondary}
                    text="My Messages"
                    onPress={() => console.log('my messages')}
                />
            </View>

            <ButtonWithIcon
                iconName="logout"
                iconColor={colors.white}
                iconBackground="#ffe66d"
                text="Log Out"
                onPress={() => console.log('logout')}
            />
        </Screen>
    );
};

export default AccountScreen;
