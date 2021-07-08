import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

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

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
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
        <Stack.Screen name="Perfil" component={DesafioPerfil} />
        <Stack.Screen name="Contador" component={TesteSwitch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;