import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex6 = () => {
    return (
        <View style={styles.container}>
          <View style={styles.container1}>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
            <View style={styles.box1}/>
          </View>
          <View style={styles.container1}>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
            <View style={styles.box2}/>
          </View>
          <View style={styles.container1}>
            <View style={styles.box3}/>
            <View style={styles.box3}/>
            <View style={styles.box3}/>
          </View>
          <View style={styles.container1}>
            <View style={styles.box4}/> 
            <View style={styles.box4}/>
            <View style={styles.box4}/>
          </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
    },
    container1: {
      flexDirection: "row",
      justifyContent: "space-around",
    },
    box1: {
        width: 105,
        height: 105,
        backgroundColor: '#50E3C2',
      },
      box2: {
        width: 105,
        height: 105,
        backgroundColor: '#4A90E2',
      },
      box3: {
        width: 105,
        height: 105,
        backgroundColor: '#9013FE',
      },
      box4: {
        width: 105,
        height: 105,
        backgroundColor: '#F5A623',
      },
});

export default Ex6;