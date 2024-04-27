import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";

import {
	Screen,
	Card,
	Button,
	AppText,
	AppActivityIndicator,
} from "../../components";

import styles from "./MainScreenStyles";
import colors from "../../config/colors";
import routes from "../../Nav/routes";
import listingsApi from "../../api/listings";
import useApi from "../../hooks/useApi";

const MainScreen = ({ navigation }) => {
	// if there are multiple api calls don't destructure, work with a single object
	const {
		data: listings,
		error,
		loading,
		request: loadListings,
	} = useApi(listingsApi.getListings);

	useEffect(() => {
		loadListings();
	}, []);

	return (
		<Screen style={styles.screen}>
			{error && (
				<>
					<AppText style={{ textAlign: "center" }}>
						Couldn't retrieve listings!{"\n"}
					</AppText>
					<Button
						title="retry"
						onPress={() => {
							loadListings();
						}}
						color={colors.primary}
						textColor={colors.white}
					/>
				</>
			)}
			<AppActivityIndicator
				visible={loading}
				animation={require("../../assets/animations/loading-plane.json")}
				loop
			/>
			{!loading && (
				<FlatList
					data={listings}
					keyExtractor={(listing) => listing.id.toString()}
					renderItem={({ item }) => {
						return (
							<Card
								title={item.title}
								subTitle={"$" + item.price}
								imageUri={item.images[0].url}
								onPress={() =>
									navigation.navigate(
										routes.VIEW_PRODUCT_SCREEN,
										item
									)
								}
							/>
						);
					}}
					ItemSeparatorComponent={
						<View style={styles.cardSeparator} />
					}
					refreshing={loading}
					onRefresh={() => loadListings()}
				/>
			)}
		</Screen>
	);
};

export default MainScreen;
