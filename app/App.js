import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import * as Nav from './Nav/Nav';

export default function App() {
    return (
        <NavigationContainer>
            <Nav.TabNavigator />
        </NavigationContainer>
    );
    
}
