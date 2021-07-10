import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from 'react-native-vector-icons/AntDesign';
import Calculator from 'react-native-vector-icons/AntDesign';
import Login from 'react-native-vector-icons/AntDesign';

import AsyncStorage from '@react-native-async-storage/async-storage';

import Ex from "./src/Ex";
import Ex2 from "./src/Ex2";
import Ex3 from "./src/Ex3";
import Ex4 from "./src/Ex4";
import Ex5 from "./src/Ex5";
import Ex6 from "./src/Ex6";
import Desafio from "./src/Desafio";
import CoreComponents from "./src/CoreComponents";
import TesteSwitch from "./src/TesteSwitch";
import CoreComponents2 from "./src/CoreComponents2";
import DesafioPerfil from "./src/DesafioPerfil";
import Login2 from "./src/Login2";
import Login1 from "./src/Login1";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator initialRouteName="Login1">
        
        <Stack.Screen name="Perfil" component={DesafioPerfil} />
        <Stack.Screen name="Contador" component={TesteSwitch} />
      </Stack.Navigator> */}
      {/* <Drawer.Navigator initialRouteName="Perfil"> */}
        {/* <Ex></Ex> */}
        {/* <Ex2></Ex2> */}
        {/* <Ex3></Ex3> */}
        {/* <Ex4></Ex4> */}
        {/* <Ex5></Ex5> */}
        {/* <Ex6></Ex6> */}
        {/* <Desafio></Desafio> */}
        {/* <CoreComponents></CoreComponents> */}
        {/* <TesteSwitch></TesteSwitch> */}
        {/* <CoreComponents2></CoreComponents2> */}
        {/* <DesafioPerfil></DesafioPerfil> */}
        <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#e91e63',
        }}>
          <Tab.Screen 
            name="Login1" 
            component={Login1} 
            options={{
              tabBarIcon: ({color}) => (
              <Login name="login" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen 
            name="Perfil" 
            component={DesafioPerfil} 
            options={{
              tabBarLabel: 'HOME',
              tabBarIcon: ({color}) => ( 
              <Home name="home" color={color} size={25} />
              ),
            }}
          />
          <Tab.Screen 
            name="Contador" 
            component={TesteSwitch} 
            options={{
              tabBarIcon: ({color}) => (
              <Calculator name="calculator" color={color} size={25} />
              ),
            }}
          />
          {/* <Tab.Screen 
            name="Login" 
            component={Login2} 
            options={{
              tabBarIcon: ({color}) => (
              <Login name="login" color={color} size={25} />
              ),
            }}
          /> */}
          
        </Tab.Navigator>        
      {/* </Drawer.Navigator> */}
    </NavigationContainer>
  );
};

export default App;
