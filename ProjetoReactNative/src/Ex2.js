import React from 'react';
import { View, StyleSheet } from 'react-native';

const Ex2 = () => {
    return (
        <View style={styles.container}>
          <View style={styles.box1}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    box1: {
      backgroundColor: "#50E3C2",
      height: 116,
    },
});

export default Ex2;