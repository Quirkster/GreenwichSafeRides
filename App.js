import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
  Button,
  Modal,
  TouchableHighlight,
  Linking,
} from 'react-native';
import Constants from 'expo-constants';
import call from 'react-native-phone-call';
import { useForm, Controller } from "react-hook-form";
//import asset:/Users/anna/Desktop/settings.png;
const Stack = createStackNavigator();
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
const args = {
  number: '2038698445', // String value with the number to call
  prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
}
function HomeScreen ({navigation}) {
  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.mediumButton}>
        <Text style={styles.callACar}> Call a Car </Text>
      </View>
      <View style={styles.bigButton}>
        <TouchableOpacity
          style={styles.callButton}
          onPress={() => call(args).catch(console.error)}>
          <Image source={require('./Callbutton.png')} />
        </TouchableOpacity>
        <Text style={styles.belowCall}>Its free and confidential</Text>
      </View>
      <View style={styles.mediumButton}>
        <View style={{flexDirection: 'row', flex:1, width: '30%', justifyContent: 'space-between'}}>
          <TouchableOpacity  onPress={() => navigation.navigate('Feedback')} style = {{flex:1, width: 200, backgroundColor:"#3333cc"}}>
            <Image style={{flex:1}}/**source={require("/Users/anna/Desktop/settings.png")}**/ />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('contact')} style = {{flex:1, width: 200, backgroundColor:"#010BFF"}}>
            <Image style={{flex:1}}source={require('./emergencyContact.png')} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('moreInfo')} style = {{flex:1, backgroundColor:"#4927cc"}}>
            <Image source={require('./moreInfo.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
function moreInfoScreen(){
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        The 411
      </Text>
      <Text>
        SafeRides gives high school students a safe ride home.
      </Text>
      <Text>
       Service runs Friday and Saturday nights dring the school year from 10 PM to 1 AM.
      </Text>
      <Text>
       Rides are always free.
      </Text>
      <Text>
       Rides are completely anonymous and confidential.
      </Text>
      <Text>
       It's completely nonjudgmental.
      </Text>
      <Text>
       You can call from anywhere in Greenwich.
      </Text>
      <Text>
       It's a guaranteed ride home by a skilled adult driver.
      </Text>
      <Text>
       Teen volunteers ride along with every trip.
      </Text>
    </View>
    )
}
function feedbackScreen({}){
  //const [modalVisible, setModalVisible] = useState( false );
  return (
    < View style={styles.centeredView}>
      < View >
        < View style={styles.centeredView}>
          < View style={styles.modalView}>
            < Text style={styles.textStyle}> Feedback Form</ Text >
            < TouchableHighlight onPress={ ()=> Linking.openURL( 'https://docs.google.com/forms/d/e/1FAIpQLSdbXTOQp8yW-eem-4bB_Bk_A8vdF-FsNcWlTHV48wpemO2uOw/viewform?usp=sf_link' ) } style={{ ...styles.openButton, backgroundColor: "#2196F3" }}>
              < Text style={styles.modalText} > Click to Share Your Feedback ! </ Text >
            </ TouchableHighlight >
          </ View >
        </ View >
      </ View >
    </ View >
  );
}
function emergencyContactScreen() {
  const { control, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);
  return(
    <View>
      <View style={{height:100, backgroundColor:'lightgrey',}}><Text style={{fontSize: 30,}}>Emergency Contact Information</Text></View>
      <View>
        <Text>First Name</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              style = {{borderWidth:1, borderRadius:12, height:50,borderColor:'grey'}}
            />
          )}
          name="firstName"
          rules={{ required: true }}
          defaultValue=""
        />
        {errors.firstName && <Text>This is required.</Text>}
        <Text>Last Name</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              style = {{borderWidth:1, borderRadius:12, height:50,borderColor:'grey'}}
            />
          )}
          name="lastName"
          defaultValue=""
        />
        <Text>Phone Number</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <TextInput
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
              style = {{borderWidth:1, borderRadius:12, height:50,borderColor:'grey'}}
            />
          )}
          name="number"
          defaultValue=""
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
      <View></View>
    </View>
  )
}

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="moreInfo" component={moreInfoScreen} />
        <Stack.Screen name="Feedback" component={feedbackScreen} />
        <Stack.Screen name="contact" component={emergencyContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
  centeredView: {
    flex: 1 ,
    justifyContent: "center" ,
    alignItems: "center" ,
    marginTop: 22
  },
  modalView: {
    margin: 20 ,
    backgroundColor: "white" ,
    borderRadius: 20 ,
    padding: 35 ,
    alignItems: "center" ,
    shadowColor: "#000" ,
    shadowOffset: {
      width: 0 ,
      height: 2
    },
    shadowOpacity: 0.25 ,
    shadowRadius: 3.84 ,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#000099" ,
    borderRadius: 20 ,
    padding: 10 ,
    elevation: 2
  },
  textStyle: {
    color: "black" ,
    fontWeight: "bold" ,
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15 ,
    textAlign: "center"
  }
})

export default App;