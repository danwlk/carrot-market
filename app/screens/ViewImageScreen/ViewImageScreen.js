import { View, Image } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from './ViewImageScreenStyles';
import colors from '../../config/colors';

const ViewImageScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/my-pic.jpg')}
                resizeMode="contain"
                style={styles.chairImg}
            />
            <View style={styles.buttonContainer}>
                <AntDesign name="close" size={30} color={colors.white} />
                <MaterialCommunityIcons name="trash-can-outline" size={30} color={colors.white} />
            </View>
        </View>
    );
};

export default ViewImageScreen;
