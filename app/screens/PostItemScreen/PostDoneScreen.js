import { useState } from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const PostDoneScreen = ({ navigation }) => {
	const [loading, setLoading] = useState(true);

	return (
		<View style={styles.container}>
			{loading ? (
				<>
					<LottieView
						style={styles.carrot}
						source={require("../../assets/animations/carrot.json")}
						autoPlay
					/>
					<LottieView
						style={styles.progress}
						source={require("../../assets/animations/progress-bar.json")}
						autoPlay
						loop={false}
						onAnimationFinish={() => {
							setLoading(false);
						}}
					/>
				</>
			) : (
				<LottieView
					style={styles.check}
					source={require("../../assets/animations/check.json")}
					autoPlay
					loop={false}
					onAnimationFinish={() => {
						setTimeout(() => {
							navigation.pop();
						}, 1500);
					}}
				/>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},

	carrot: {
		height: 150,
		width: 150,
	},

	progress: {
		height: 300,
		width: 300,
	},

	check: {
		height: 300,
		width: 300,
	},
});

export default PostDoneScreen;
