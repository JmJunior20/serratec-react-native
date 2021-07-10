import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login1 = () => {
    
    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    return (
        <View style={styles.container}>           

            <Text style={styles.texto}>LOGIN</Text>
            <TextInput 
                style={styles.login__input}
                value={user}
                onChangeText={setUser} 
                placeholder='Usuário:' 
            />
            <TextInput 
                style={styles.login__input} 
                value={pass}
                onChangeText={setPass} 
                placeholder='Senha:' 
                secureTextEntry={true} 
            />
            <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => login(user, pass, {navigation})}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );    
};

function login(user, pass, {navigation}) {
    const realUser = 'Junior';
    const realPass = '12345';
    if (user != realUser || pass != realPass) {
        alert('Usuário ínvalido')
    } else {
        navigation.jumpTo('DesafioPerfil')
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "black",
    },

    texto: {
        fontSize: 30,
        marginBottom: 20,
        color: "white",
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        width: "100%",
    },
    login__button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'blue',
        marginBottom: 15,
        borderRadius: 20,
    },
    login__buttonText:{
        fontWeight:"bold",
        fontSize: 22,
        color:"white"
    }
    
});

export default Login1;