import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

const Desafio = () => {
    return (        
        <View style={styles.container}>
        <StatusBar
            barStyle="light-content"
            hidden={true}
        />
          <View style={styles.container1}>
            <View style={styles.box1}/>
          </View>
          <View style={styles.containerOne}>
            <View style={styles.box2}/>
            <View style={styles.box3}/>            
          </View>
          <View style={styles.containerLine}>
            <View style={styles.container2}>
                <View style={styles.box4}/>
                <View style={styles.box5}/>
            </View>
            <View style={styles.box6}/>
          </View>
          <View style={styles.container3}>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
          </View>
          <View style={styles.container3}>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
          </View>
          <View style={styles.container1}>
            <View style={styles.box7}/>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
    },
    container1: {
      flexDirection: "row",
      justifyContent: "center",
    },
    containerOne: {
      alignItems: "center",
      },
    container2: {
        flexDirection: "row",
        justifyContent: "center",
    },
    containerLine: {

    },
    container3: {
        flexDirection: "row",
        justifyContent: "space-around",
      },

    box1: {
        width: '100%',
        height: 25,
        backgroundColor: '#50E3C2',
      },
      box2: {
        width: 100,
        height: 100,
        backgroundColor: '#F5A623',
      },
      box3: {
        width: 150,
        height: 30,
        backgroundColor: '#F5A623',
        marginTop: 20,
      },
      box4: {
          width: '50%',
        height: 78,
        backgroundColor: '#9013FE',
      },
      box5: {
        width: '50%',
        height: 78,
        backgroundColor: '#4A90E2',
      },
      box6: {
        width: '100%',
        height: 13,
        backgroundColor: '#50E3C2',
      },
      box7: {
          width: '100%',
        height: 60,
        backgroundColor: '#4A90E2',
      },
});

export default Desafio;