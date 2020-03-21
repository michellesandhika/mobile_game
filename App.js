import React, { Component } from 'react';
import {Image, FlatList,StyleSheet,Button,View,Text,Platform, Alert, SafeAreaView, TouchableOpacity} from 'react-native';
import { getOrientationAsync } from 'expo/build/ScreenOrientation/ScreenOrientation';
import { setWorldOriginAsync, getCurrentFrame } from 'expo/build/AR';
import { WebOrientation } from 'expo/build/ScreenOrientation/ScreenOrientation.types';
import { withTheme } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function result(){
    return (
        
        <View style={styles.container}>
            <View style={styles.centerit}>
            <Text style={styles.statement}> Takes the longest time </Text>
            
                <FlatList
                    data={["0 x 0 = 0","1 x 5 = 5","1 x 6 = 6","2 x 3 = 6"]}
                    renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                />

            <Text style={styles.result}></Text>

            <Text style={styles.statement}> Most mistakes </Text>
            <FlatList
                data={["2 x 3 = 6","7 x 7 = 49","9 x 7 = 63","3 x 7 = 21"]}
                renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
            />
            <Text style={styles.resultS}></Text>
            
            </View>
        </View>
    );
}

function profile(){
    return ( 
        
        <View style={styles.container}>
            <View style={styles.fixToText}>

            <Text style={styles.statement}></Text>
            <Image source={require('./avatar.png')} style={styles.imageprofile} />
            <Text style={styles.statement}></Text>

            </View>
            
            <View style={styles.centerit}>
                
                <Text style={styles.statement}> Level 10 </Text>
            </View>
            

            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginBottom: 10,
                }}
                />
            
            <View style={styles.fixToText}>

            <Image source={require('./0.png')} style={styles.image} />
            <Image source={require('./1.png')} style={styles.image} />
            <Image source={require('./2.png')} style={styles.image} />

            </View>

            <View style={styles.fixToText}>

            <Image source={require('./3.png')} style={styles.image} />
            <Image source={require('./4.png')} style={styles.image} />
            <Image source={require('./5.png')} style={styles.image} />

            </View>
            
            <View style={styles.fixToText}>

            <Image source={require('./6.png')} style={styles.image} />
            <Image source={require('./7.png')} style={styles.image} />
            <Image source={require('./8.png')} style={styles.image} />

            </View>
            <View style={styles.fixToText}>

            <Image source={require('./9.png')} style={styles.image} />
            <Image source={require('./10.png')} style={styles.image} />

            </View>

        </View>
    );

}


class exercise extends Component {

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

    calculationstate(){
        var newa = Math.floor(Math.random() * 10) + 1;
        var newb = Math.floor(Math.random() * 10) + 1;

        var optionsresult = new Array(4);
        for (i = 0; i < 3; i++){
            var temp=Math.floor(Math.random() * 100) + 1;
            optionsresult[i]=temp.toString(10);
        }   
        var result = newa * newb;
        optionsresult[3] = result.toString(10);

        this.setState({
            a: newa,
            b: newb,
            options:optionsresult,
        });
        global.count=count+1;
    }

    wrongopt(){
        var message='Yay, you got ' + correct + ' correct;';
        Alert.alert('Wrong Answer');
        if (count == 10 ){
            Alert.alert(message);
            count=1;
            this.calculationstate();
        }  
        else{
            this.calculationstate();
        }
    }
    
    correctopt(){
        var message='Yay, you got ' + correct + ' correct;';
        correct=correct+1;
        if (count == 10 ){
            Alert.alert(message);
            count=1;
        }
        else{
            Alert.alert('Correct Answer');
            this.calculationstate();
        }
    }

    render() {
    return (
        
        <View style={styles.container}>
            <View style={styles.centerit}>
                <Text style={styles.progress}>{count}/10</Text>


            <Text style={styles.question}>{this.state.a} X {this.state.b} = ?</Text>
            
            <View style={styles.fixToText}>

                <TouchableOpacity
                    style={styles.arr}
                    onPress={this.wrongopt}>
                    <Text style={styles.textbut}> {this.state.options[0]} </Text>
                </TouchableOpacity>
        
                <TouchableOpacity
                    style={styles.arr}
                    onPress={this.wrongopt}>
                    <Text style={styles.textbut}> {this.state.options[1]} </Text>
                </TouchableOpacity>

            </View>

            
            <View style={styles.fixToText}>
                <TouchableOpacity
                    style={styles.arr}
                    onPress={this.wrongopt}>
                    <Text style={styles.textbut}> {this.state.options[2]} </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.arr}
                    onPress={this.correctopt}>
                    <Text style={styles.textbut}> {this.state.options[3]} </Text>
                </TouchableOpacity>

            </View>
            </View>


        </View>
    );
  }
}

export default class App extends Component {

    render(){
        return(
            <View style={styles.container}>
            <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'result') {
                    iconName = focused
                        ? 'information'
                        : 'information-outline';
                    } else if (route.name === 'profile') {
                    iconName = focused ? 'person' : 'person';
                        return <MaterialIcons name={iconName} size={size} color={color} />;
                    }
                    else if (route.name === 'exercise') {
                        iconName = focused ? 'pencil-box' : 'pencil-box-outline';
                    }

                    // You can return any component that you like here!
                   
                    return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
                },
                })}
                tabBarOptions={{
                activeTintColor: 'lightskyblue',
                inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="exercise" component={exercise} />
                <Tab.Screen name="profile" component={profile} />
                <Tab.Screen name="result" component={result} />
                

            </Tab.Navigator>
            </NavigationContainer>
            </View>
        );
    }

}


const styles = StyleSheet.create({

    statement: {
        fontSize: 25,
        paddingBottom:5,
    },

    progress: {
        textAlign:'right',
        fontSize: 20,
    },

    centerit: {
        paddingTop: 20,
       alignItems:'center', 
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#F5FCFF',
        marginVertical: 8,
    },

    question: {
        fontSize: 45,

    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },

    arr: {
        height:50,
        width:100,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20,
        marginVertical: 25,
        fontSize:30,
        backgroundColor:'#000000',
    },

    textbut: {
        fontSize:20,
        color: '#FFFFFF'
    },


    image: {
        flex: 1,
        width: 80,
        height: 80,
        resizeMode: 'contain' ,
        margin: 10,
    
    },

    imageprofile: {
        flex: 1,
        width: 80,
        height: 80,
        resizeMode: 'contain' ,
        marginTop: 4,
    },

    item: {
        fontSize: 20
    }

});
