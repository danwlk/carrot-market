import { View, StyleSheet, FlatList, Alert } from 'react-native';

import ImageInput from './ImageInput';

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }) => {
    const showConfirmationAlert = (uri) => {
        Alert.alert(
            'Delete Image',
            'Are you sure you want to delete this image?',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('cancelled'),
                    style: 'cancel',
                },
                {
                    text: 'Yes',
                    onPress: () => onRemoveImage(uri),
                    style: 'destructive',
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={imageUris}
                keyExtractor={(item) => item}
                renderItem={({ item }) => {
                    return (
                        <ImageInput
                            imageUri={item}
                            onPress={() =>
                                showConfirmationAlert(item)
                            }
                        />
                    );
                }}
                horizontal
                ListFooterComponent={() => {
                    return (
                        <ImageInput
                            onChangeImage={(uri) => {
                                onAddImage(uri);
                            }}
                        />
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
});

export default ImageInputList;
