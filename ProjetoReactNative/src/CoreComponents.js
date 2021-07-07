import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const CoreComponents = () => {
    // let numero = 0;
    const [numero, setNumero] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{numero}</Text>

                <TouchableOpacity
                style={styles.botao}
                onPress={() => setNumero(numero + 1)}>
                    <Text style={styles.textoBotao}>Próximo</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.botao}
                onPress={() => setNumero(numero - 1)}>
                    <Text style={styles.textoBotao}>Anterior</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={styles.botao}
                onPress={() => setNumero(0)}>
                    <Text style={styles.textoBotao}>Reset</Text>
                </TouchableOpacity>       
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

export default CoreComponents;