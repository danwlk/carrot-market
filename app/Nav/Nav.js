import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import routes from "./routes";
import PostTabIcon from "./PostTabIcon";

import colors from "../config/colors";

import {
	WelcomeScreen,
	LoginScreen,
	RegisterScreen,
	MainScreen,
	ViewProductScreen,
	AccountScreen,
	MessagesScreen,
	PostItemScreen,
	PostDoneScreen,
} from "../screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ------------------------------------ LOGIN AND REGISTER ------------------------------------
const AuthNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
		<Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
		<Stack.Screen
			name={routes.REGISTER_SCREEN}
			component={RegisterScreen}
		/>
	</Stack.Navigator>
);

// ------------------------------------ INDIVIDUAL TABS ------------------------------------

// FOR MARKET TAB
const MainNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name={routes.MAIN_SCREEN} component={MainScreen} />
		<Stack.Screen
			name={routes.VIEW_PRODUCT_SCREEN}
			component={ViewProductScreen}
			options={{ presentation: "modal" }}
		/>
	</Stack.Navigator>
);

// FOR ACCOUNT TAB
const AccountNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen name={routes.ACCOUNT_SCREEN} component={AccountScreen} />
		<Stack.Screen
			name={routes.MESSAGES_SCREEN}
			component={MessagesScreen}
			options={{
				headerShown: true,
				headerTitle: "Messages",
				headerBackTitle: "Account",
				headerTintColor: colors.primary,
			}}
		/>
	</Stack.Navigator>
);

// FOR POST ITEM TAB
const PostNavigator = () => (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
		<Stack.Screen
			name={routes.POST_ITEM_SCREEN}
			component={PostItemScreen}
		/>
		<Stack.Screen
			name={routes.POST_DONE_SCREEN}
			component={PostDoneScreen}
			options={{ presentation: "modal" }}
		/>
	</Stack.Navigator>
);

// ------------------------------------ TABS ------------------------------------
const TabNavigator = () => (
	<Tab.Navigator
		screenOptions={{
			tabBarActiveTintColor: colors.primary,
			headerShown: false,
		}}
	>
		<Tab.Screen
			name={routes.MAIN}
			component={MainNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="home"
						size={size}
						color={color}
					/>
				),
				title: "Market",
			}}
		/>
		<Tab.Screen
			name={routes.POST}
			component={PostNavigator}
			options={{
				tabBarButton: () => <PostTabIcon />,
			}}
		/>
		<Tab.Screen
			name={routes.ACCOUNT}
			component={AccountNavigator}
			options={{
				tabBarIcon: ({ size, color }) => (
					<MaterialCommunityIcons
						name="account"
						size={size}
						color={color}
					/>
				),
				title: "Account",
			}}
		/>
	</Tab.Navigator>
);

export { AuthNavigator, MainNavigator, AccountNavigator, TabNavigator };
