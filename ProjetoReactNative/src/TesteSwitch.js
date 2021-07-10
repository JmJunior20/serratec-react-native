import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch, TextInput } from 'react-native';

const TesteSwitch = () => {
    // let numero = 0;
    const [numero, setNumero] = useState(0);
    const [estaLigado, setEstaLigado] = useState(true);
    const [texto, setTexto] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{numero}</Text>

                <TouchableOpacity
                disabled={!estaLigado}
                style={styles.botao}
                onPress={() => setNumero(numero + 1)}>
                    <Text style={styles.textoBotao}>Próximo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                disabled={!estaLigado}
                style={styles.botao}
                onPress={() => setNumero(numero - 1)}>
                    <Text style={styles.textoBotao}>Anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity
                disabled={!estaLigado}
                style={styles.botao}
                onPress={() => setNumero(0)}>
                    <Text style={styles.textoBotao}>Reset</Text>
                </TouchableOpacity>    

                <TextInput 
                    value={texto}
                    onChangeText={setTexto}
                    placeholder="Insira seu nome"
                    // keyboardType="numeric"
                    style={{backgroundColor: 'gray', width: '100%'}}
                />

                <Switch value={estaLigado}
                    onValueChange={() => setEstaLigado(!estaLigado)}
                />
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

export default TesteSwitch;