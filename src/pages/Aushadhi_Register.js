import { Dimensions, Image, Text, TextInput, TouchableOpacity, View,KeyboardAvoidingView} from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Aushadhi_Register extends Component {
    constructor(props) {
        super (props);
        this.state ={
            name:'',
            mobilenumber:'',
            email:'',
            password:''
        }
    }
Register_Here= async()=>{
    console.log("full name :->" + this.state.name);
    console.log("mobile number :->" + this.state.mobilenumber);
    console.log("full name :->" + this.state.email);
    console.log("mobile number :->" + this.state.password);
    if (
        this.state.name == 0 ||
        this.state.mobilenumber == 0 ||
        this.state.email.length == 0 ||
        this.state.password == 0
      ) {
        alert('"Warning !');
      } else {
        try {
          var user = {
            name: this.state.name,
            lastname: this.state.lastname,
  
            email: this.state.email,
            password: this.state.password,
          };
          await AsyncStorage.setItem('UserData', JSON.stringify(user));
          alert('Account Created Success');
          console.log(user);
          this.props.navigation.navigate('Aushadhi_Dashboard');
        } catch (err) {
          console.warn('AsyncStorageError = ', err);
        }
      }

}

    render() {
        return (
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ resizeMode: 'center', height: 120, width: 120 }} source={require('../assets/images/selectedtype.png')} />
                    {/* Aushadhi email and  password */}
                    <View style={{ marginTop: 10 }}>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{ tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/person.png')} />
                    <TextInput onChangeText={(text)=>this.setState({name:text})}  placeholder='Enter the  Full name' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{ tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/call.png')} />
                    <TextInput  onChangeText={(text)=>this.setState({mobilenumber:text})} placeholder='Enter the  Mobile number' keyboardType='number-pad' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{ tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/email.png')} />
                    <TextInput  onChangeText={(text)=>this.setState({email:text})} placeholder='Enter the  Email' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>
                <View style={{ borderRadius: 30, flexDirection: 'row', display: 'flex', marginTop: 5, alignContent: 'center', alignItems: 'center', width: Dimensions.get('screen').width / 1.2, backgroundColor: AppTheme.APPCOLOR.GRAY, alignSelf: 'center', }}>
                    <Image style={{ tintColor: AppTheme.APPCOLOR.WHITE, height: 24, width: 24, left: 7 }} source={require('../assets/images/lock.png')} />
                    <TextInput  onChangeText={(text)=>this.setState({password:text})}  secureTextEntry={true} placeholder='Enter the  Password' placeholderTextColor={AppTheme.APPCOLOR.WHITE} style={{ color: AppTheme.APPCOLOR.WHITE, flex: 1, alignSelf: 'center', alignItems: 'center', alignContent: 'center', marginLeft: 10 }} />
                </View>

                <TouchableOpacity    onPress={()=>this.Register_Here()} style={{ marginTop: 20 }}>
                    <View style={{ backgroundColor: AppTheme.APPCOLOR.Wedgewood, alignItems: 'center', padding: 12, borderRadius: 20 }}>

                        <Text style={{ color: AppTheme.APPCOLOR.WHITE }}>Register Here</Text>
                    </View>
                </TouchableOpacity>

            </View>

                </View>

                <TouchableOpacity onPress={()=>this.props.navigation.navigate('Aushadhi_login')}>


                    <View style={{ bottom: 5, position: 'absolute', alignItems: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK }}>Already register in here ?<Text style={{ color: AppTheme.APPCOLOR.BLUE }}> Login now</Text></Text>


                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}