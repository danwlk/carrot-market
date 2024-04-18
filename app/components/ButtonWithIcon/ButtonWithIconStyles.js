import { StyleSheet } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
    btn: {
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },
    arrowIcon: {
        position: "absolute",
        right: 10,
    }
})

export default styles;