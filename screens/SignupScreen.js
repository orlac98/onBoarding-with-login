import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';


const LoginScreen = ({ navigation}) => {
    return( 
        <View style={StyleSheet.container}>
            <AntDesign name="adduser" size={25} color="#666" />
            <Text >Signup Screen</Text>
           
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});