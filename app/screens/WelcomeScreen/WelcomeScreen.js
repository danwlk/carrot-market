import { Image, ImageBackground, View, StatusBar } from 'react-native';

import styles from './WelcomeScreenStyles';
import colors from '../../config/colors';
import routes from '../../Nav/routes';

import AppText from '../../components/AppText/AppText';
import Button from '../../components/Button/Button';

const WelcomeScreen = ({ navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/background.jpg')}
            style={styles.container}
            blurRadius={10}
        >
            <StatusBar barStyle={colors.black} />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImg}
                />
                <AppText style={styles.text}>Sell What You Don't Need</AppText>
            </View>

            <Button
                title="login"
                color={colors.primary}
                style={styles.button}
                onPress={() => navigation.navigate(routes.LOGIN_SCREEN)}
            />
            <Button
                title="register"
                color={colors.secondary}
                style={styles.button}
                onPress={() => navigation.navigate(routes.REGISTER_SCREEN)}
            />
        </ImageBackground>
    );
};

export default WelcomeScreen;
