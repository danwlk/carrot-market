import React from 'react';

import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen/ViewImageScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import ViewProductScreen from './screens/ViewProductScreen/ViewProductScreen';
import MessagesScreen from './screens/MessagesScreen/MessagesScreen';
import AccountScreen from './screens/AccountScreen/AccountScreen';
import PostItemScreen from './screens/PostItemScreen/PostItemScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import ImagePicker from './ImagePicker';

import Screen from './components/Screen/Screen';
import ImageInput from './components/ImageInput/ImageInput';
import { StyleSheet } from 'react-native';
import { useState } from 'react';

export default function App() {
    const [imageUri, setImageUri] = useState(null);

    return (
        <Screen style={styles.screen}>
            <ImageInput
                imageUri={imageUri}
                onChangeImage={(uri) => setImageUri(uri)}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
    },
});
