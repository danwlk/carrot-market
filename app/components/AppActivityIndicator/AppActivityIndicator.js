import { StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";
import colors from "../../config/colors";

const AppActivityIndicator = ({
	visible = false,
	animation,
	style,
	onAnimationFinish,
	...otherProps
}) => {
	if (!visible) return null;

	return (
		<View style={styles.container}>
			<LottieView
				style={[styles.lottie, style]}
				source={animation}
				autoPlay
				onAnimationFinish={onAnimationFinish}
				{...otherProps}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	lottie: {
		width: 300,
		height: 300,
	},
});

export default AppActivityIndicator;
