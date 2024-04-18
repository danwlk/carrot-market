import { useEffect, useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import Screen from './components/Screen/Screen';
import Button from './components/Button/Button';

const AppImagePicker = () => {
    const [imageUri, setImageUri] = useState(null);

    const requestPermission = async () => {
        const { granted } =
            await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!granted)
            alert('You need to accept the permission to post your images!');
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync();
            if (!result.canceled) {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    useEffect(() => {
        requestPermission();
    }, []);

    return (
        <Screen style={styles.container}>
            <Button title="Select Image" onPress={selectImage} />
            <Image source={{ uri: imageUri }} style={styles.image} />
        </Screen>
    );
};

const styles = StyleSheet.create({
    container: {},

    image: {
        width: 200,
        height: 200,
    },
});

export default AppImagePicker;
