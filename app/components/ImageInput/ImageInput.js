import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../../config/colors';

function ImageInput({ imageUri, onChangeImage, onPress }) {
    const requestPermissions = async () => {
        const result = await ImagePicker.requestMediaLibraryPermissionsAsync();

        if (!result.granted) {
            alert(
                'Sorry, we need camera roll permissions to allow you to post a photo!'
            );
        }
    };

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.canceled) {
                onChangeImage(result.assets[0].uri);
            }
        } catch (error) {
            alert(
                'Sorry, an unexpected error occurred, please try again\n',
                error
            );
        }
    };

    const handlePress = () => {
        if (!imageUri) {
            requestPermissions();
            pickImage();
        } else {
            onPress();
        }
    };

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={handlePress}
            activeOpacity={0.7}
        >
            {!imageUri ? (
                <MaterialCommunityIcons
                    name="camera"
                    size={50}
                    color={colors.medium}
                />
            ) : (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 20,
        height: 100,
        justifyContent: 'center',
        margin: 10,
        marginTop: 0,
        marginLeft: 0,
        overflow: 'hidden',
        width: 100,
    },

    image: {
        height: '100%',
        width: '100%',
    },
});

export default ImageInput;
