import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Posts from './screens/Posts';
import Users from './screens/Users';

const Stack = createStackNavigator();

const Routes = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="Users" component={Users} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;