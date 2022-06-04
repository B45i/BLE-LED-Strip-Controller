import * as React from 'react';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation() {
    return (
        <NavigationContainer linking={LinkingConfiguration} theme={DarkTheme}>
            <RootNavigator />
        </NavigationContainer>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={TabOneScreen}
                options={{ title: 'RGB Controller' }}
            />
            <Stack.Screen
                name="Two"
                component={TabTwoScreen}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}
