import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Login1 = ({ navigation }) => {
    
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')

    return (
        <View style={styles.container}>           

            <Text style={styles.texto}>LOGIN</Text>
            <TextInput 
                style={styles.login__input}
                value={nome}
                onChangeText={setNome} 
                placeholder='Digite seu usuário' 
            />
            <TextInput 
                style={styles.login__input} 
                value={senha}
                onChangeText={setSenha} 
                placeholder='Digite sua senha' 
                secureTextEntry={true} 
            />
            <TouchableOpacity 
            style={styles.login__button} 
            onPress={() => login(nome, senha, {navigation})}>
                    <Text style={styles.login__buttonText}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.cadastro__button} 
            onPress={() => login(nome, senha, {navigation})}>
                    <Text style={styles.cadastro__buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </View>
    );    
};

function login(nome, senha, {navigation}) {
    const User = 'Junior';
    const Pass = '12345';
    if (nome != User || senha != Pass) {
        alert('Usuário ínvalido ou senha inválido!')
    } else {
        navigation.jumpTo('Perfil');
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
        fontWeight:"bold",
    },
    login__input:{
        backgroundColor: "#fff",
        fontSize: 19,
        padding: 7,
        marginBottom: 15,
        width: "90%",
        borderRadius: 20,
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
        fontSize: 25,
        color:"white"
    },
    cadastro__button:{
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 50,
        backgroundColor: 'gray',
        marginBottom: 15,
        borderRadius: 20,
    },
    cadastro__buttonText:{
        fontWeight:"bold",
        fontSize: 25,
        color:"white"
    }
    
});

export default Login1;