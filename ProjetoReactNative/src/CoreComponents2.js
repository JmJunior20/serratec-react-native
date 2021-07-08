import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput, Image } from 'react-native';

const TesteSwitch = () => {
    // let numero = 0;
    const [numero, setNumero] = useState(0);
    const [estaLigado, setEstaLigado] = useState(true);
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.container}>
            <Image 
                style={{
                    width: 300, 
                    height: 300,
                    borderRadius: 150,
                    // resizeMode: 'stretch',
                }}
                source={require('../src/assets/Images/teste-image.png')} 
            />
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto: {
        fontSize: 50,
        marginBottom: 20,
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

export default TesteSwitch;