import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black', //Only works on IOS
        shadowOffset: { width: 0, height: 2 }, //Only works on IOS
        shadowRadius: 6, //Only works on IOS
        shadowOpacity: 0.26, //Only works on IOS
        elevation: 8, // works with Android
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10
    }

});

export default Card;