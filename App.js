//import 'react-native-gesture-handler';
import React, {useState} from 'react';
//import { NavigationContainer } from 'react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Alert,
  Image,
  PixelRatio,
  ScrollView,
  TextInput,
} from 'react-native';
import Constants from 'expo-constants';
//const Stack = createStackNavigator();
const createThreeButtonAlert = () =>
    Alert.alert(
      "Settings Button Pressed",
      "Options",
      [
        {
          text: "View Settings",
          onPress: () => console.log("View settings pressed")
        },
        {
          text: "Edit Settings",
          onPress: () => console.log("Edit Settings Pressed"),
          style: "cancel"
        },
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
      ],
      { cancelable: false }
    );
function HomeScreen ({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.mediumButton}>
        <Text style={styles.callACar}> Call a Car </Text>
      </View>
      <View style={styles.bigButton}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => Alert.alert('Call Button pressed')}>
          <Image style={{height:300, width:300}}source={{uri: "/Users/anna/Callbutton.png",}} />
        </TouchableOpacity>
        <Text style={styles.belowCall}>Its free and confidential</Text>
      </View>
      <View style={styles.mediumButton}>
        <View style={{flexDirection: 'row', flex:1, width: '30%', justifyContent: 'space-between'}}>
          <TouchableOpacity  onPress={createThreeButtonAlert} style = {{flex:1, width: 200, backgroundColor:"#3333cc"}}>
            <Image style={{flex:1}}source={{uri: "/Users/anna/Desktop/settings.png",}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => Alert.alert('Emergency Contact button pressed')} style = {{flex:1, width: 200, backgroundColor:"#010BFF"}}>
            <Image style={{flex:1}}source={{uri: "/Users/anna/Desktop/emergencyContact.png",}} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('moreInfo')} style = {{flex:1, width: 200, backgroundColor:"#010BFF"}}>
            <Image style={{flex:1}}source={{uri: "/Users/anna/Desktop/moreInfo.png",}} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
function App(){
  return(
    <HomeScreen />
  );
};
const width_proportion = '30%';
const height_proportion = '10%';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 1,
    justifyContent: 'center',
    marginHorizontal: 10
    //height: 10,
  },
  callACar: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Chalkboard SE',
    justifyContent: "center" ,
    alignItems: "center" 
    
  },
  callButton: {
    height: 400,
    backgroundColor:'#b3ffb3'
  },
  belowCall: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  bigButton: {
    flex: 6,
  },
  mediumButton: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#3333cc',
  },
  containertwo: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Helvetica-Bold',
    textAlign: 'center',
  },
})

export default App;