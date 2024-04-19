import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import PostTabIcon from './components/PostTabIcon/PostTabIcon';

import colors from './config/colors';

import {
    WelcomeScreen,
    LoginScreen,
    RegisterScreen,
    MainScreen,
    ViewProductScreen,
    AccountScreen,
    MessagesScreen,
    PostItemScreen,
} from './screens';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// ------------------------------------ LOGIN AND REGISTER ------------------------------------
const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
);

// ------------------------------------ INDIVIDUAL TABS ------------------------------------

// FOR MARKET TAB
const MainNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen
            name="ViewProductScreen"
            component={ViewProductScreen}
            options={{ gestureDirection: 'vertical' }}
        />
    </Stack.Navigator>
);

const AccountNavigator = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
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
            name="Main"
            component={MainNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="home"
                        size={size}
                        color={color}
                    />
                ),
                title: 'Market',
            }}
        />
        <Tab.Screen
            name="PostItemScreen"
            component={PostItemScreen}
            options={{
                tabBarButton: () => <PostTabIcon />,
            }}
        />
        <Tab.Screen
            name="Account"
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons
                        name="account"
                        size={size}
                        color={color}
                    />
                ),
                title: 'Account',
            }}
        />
    </Tab.Navigator>
);

export { AuthNavigator, MainNavigator, AccountNavigator, TabNavigator };
