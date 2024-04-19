import React from 'react';

import WelcomeScreen from './screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './screens/ViewImageScreen/ViewImageScreen';
import MainScreen from './screens/MainScreen/MainScreen';
import ViewProductScreen from './screens/ViewProductScreen/ViewProductScreen';
import MessagesScreen from './screens/MessagesScreen/MessagesScreen';
import AccountScreen from './screens/AccountScreen/AccountScreen';
import PostItemScreen from './screens/PostItemScreen/PostItemScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';

import { Text } from 'react-native';
import Screen from './components/Screen/Screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Button from './components/Button/Button';

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Button
            title="Click"
            onPress={() => navigation.navigate('TweetDetails', { id: 1 })}
        />
    </Screen>
);
const TweetDetails = ({ route }) => (
    <Screen>
        <Text>Tweet Details {route.params.id}</Text>
    </Screen>
);

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
    <Stack.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: 'dodgerblue' },
            headerTintColor: 'white',
        }}
    >
        <Stack.Screen
            name="Tweets"
            component={Tweets}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="TweetDetails"
            component={TweetDetails}
            options={({ route }) => ({ title: route.params.id.toString() })}
        />
    </Stack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}
