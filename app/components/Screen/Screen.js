import { SafeAreaView, StatusBar, View } from 'react-native';

import styles from './ScreenStyles';

const Screen = ({ children, style }) => {
    return (
        <SafeAreaView style={styles.screen}>
            <StatusBar />
            <View style={[styles.screen, style]}>{children}</View>
        </SafeAreaView>
    );
};

export default Screen;
