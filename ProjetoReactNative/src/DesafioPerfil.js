import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';

const DesafioPerfil = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <Image 
                    style={{
                        width: 200, 
                        height: 200,
                        borderRadius: 150,
                        marginBottom: 30,
                        // resizeMode: 'stretch',
                    }}
                    source={require('../src/assets/Images/foto-perfil.jpeg')} 
                />
                <Text style={styles.texto}>José Milton Júnior</Text>
                <Text style={styles.texto}>Teresópolis - RJ</Text>
            </View>        
            <TouchableOpacity
                style={styles.botao}
                title="TesteSwitch"
                onPress={() => navigation.navigate('Contador')}>
                    <Text style={styles.textoBotao}>Próximo</Text>
            </TouchableOpacity> 
            <ScrollView style={styles.sobre}>
                <Text style={styles.textoSobre}>Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</Text>
            </ScrollView>
        </View>
    );    
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "black",

    },
    texto: {
        fontSize: 30,
        textAlign: 'center',
        color: "white",
    },
    perfil: {
        flex: 1,
        alignItems: 'center',
        marginTop: 50,
    },
    sobre: {
        flex: 1,
        marginTop: 2,
        width: "80%",
    },
    textoSobre: {
        fontSize: 30,
        textAlign: 'justify',
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

export default DesafioPerfil;