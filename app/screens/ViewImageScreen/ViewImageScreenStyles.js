import { Platform, StyleSheet } from "react-native";

import colors from "../../config/colors";


const ViewImageScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center',
        alignItems: 'center',
    },

    chairImg: {
        width: '100%',
        height: "100%",
    },

    buttonContainer: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 70 : 30,
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'space-between'
    },

    button: {
        width: 50,
        height: 50,
    }
})

export default ViewImageScreenStyles;