import React, { Component } from 'react';
import {StyleSheet,Button,View,Text,Platform, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { setWorldOriginAsync, getCurrentFrame } from 'expo/build/AR';
import { WebOrientation } from 'expo/build/ScreenOrientation/ScreenOrientation.types';
import { withTheme } from 'react-native-elements';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            a: Math.floor(Math.random() * 10) + 1,
            b: Math.floor(Math.random() * 10) + 1,
            options: [0,2,3,1],
        };
        this.wrongopt = this.wrongopt.bind(this);
        this.correctopt = this.correctopt.bind(this);
        global.count=1;
        global.correct=0;
    };

    render() {
    return (
        
        
        <View style={styles.container}>

            <Text style={styles.statement}> Takes the longest time </Text>
            {/* need li ish */}
            <Text style={styles.result}></Text>

            <Text style={styles.statement}> Most mistakes </Text>
            {/* need li ish */}
            <Text style={styles.resultS}></Text>
            

        </View>
    );
  }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginVertical: 8,
    },

    statement: {

    },

    result: {

    },    


});
