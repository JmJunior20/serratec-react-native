import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Switch, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login2 = () => {
    
    const storeData = async value => {
        try {
          await AsyncStorage.setItem('@storage_Key', value);
        } catch (e) {}
      };
    const storeObject = async value => {
        try {
          const jsonValue = JSON.stringify(value);
          await AsyncStorage.setItem('@storage_Key', jsonValue);
        } catch (e) {}
      };
    const getData = async () => {
        try {
          const value = await AsyncStorage.getItem('@storage_Key');
          if (value !== null) {
            console.log(value);
          }
        } catch (e) {}
      };
    const getObject = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@storage_Key');
          return jsonValue !== null
            ? console.log(JSON.parse(jsonValue).name)
            : null;
        } catch (e) {}
      };
    const deleteKey = async () => {
        try {
          await AsyncStorage.removeItem('@storage_Key');
        } catch (e) {
          console.log(e.message);
        }
      };   

    return (
        <View style={styles.container}>
            <Button title="SALVAR" onPress={() => storeData('SALVEIIIII')} />
            <Button
                title="SALVAR JSON"
                onPress={() => storeObject({name: 'João', age: 30})}
            />
            <Button title="RECUPERAR" onPress={() => getData()} />
            <Button title="RECUPERAR" onPress={() => getObject()} />
            <Button title="DELETAR" onPress={() => deleteKey()} />
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    },

    texto: {
        fontSize: 50,
        marginBottom: 20,
        color: "white",
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        marginBottom: 15,
        borderRadius: 20,
    },
    textoBotao: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 22,
        letterSpacing: 5,
    },
});

export default Login2;