import { Image, ImageBackground, View, Text, StatusBar } from 'react-native';

import styles from './WelcomeScreenStyles';
import colors from '../../config/colors';

import AppText from '../../components/AppText/AppText';
import Button from '../../components/Button/Button';

const WelcomeScreen = () => {
    return (
        <ImageBackground
            source={require('../../assets/background.jpg')}
            style={styles.container}
            blurRadius={10}
        >
            <StatusBar barStyle={colors.black} />
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={styles.logoImg}
                />
                <AppText style={styles.text}>Sell What You Don't Need</AppText>
            </View>

            <Button
                title="login"
                color={colors.primary}
                style={styles.button}
                onPress={() => console.log('Login')}
            />
            <Button
                title="register"
                color={colors.secondary}
                style={styles.button}
                onPress={() => console.log('Register')}
            />
        </ImageBackground>
    );
};

export default WelcomeScreen;
