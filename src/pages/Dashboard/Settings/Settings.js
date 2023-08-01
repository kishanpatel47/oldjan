import { Dimensions, Text, TouchableOpacity, View, Image, Share, Alert } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../../../helper/AppTheme'
import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default class Settings extends Component {
  OnShare = async () => {
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Jan Aushadhi Sugam ,  https://play.google.com/store/apps/details?id=in.gov.pmbjp',
        url: 'https://play.google.com/store/apps/details?id=in.gov.pmbjp'
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }

  };
  Rateapp = () => {
    Alert.alert("Jan Aushadhi Sugam", " comeing soon ......",
      [{
        text: 'OK',
        onPress: () => this.props.navigation.navigate('Settings'),
        style: 'destructive'

      }]

      , {
        cancelable: true
      }

    )
  }
  Logout = () => {
    Alert.alert("Jan Aushadhi Sugam", "Are you sure Logout ......",
      [
        {
                            text: 'Confirm',
                            onPress: () => {
                              AsyncStorage.clear();
                              AsyncStorage.removeItem('UserData');
                            this.props.navigation.navigate('Aushadhi_login');
                            },
                          },
      {
        text: 'CANCEL',

      }



      ],
      {
        cancelable: true
      }



    )
  }
  Select_Lanuage = () => {
    this.props.navigation.navigate('Settings_Language')
  }
  Quality_Assurance = () => {
    this.props.navigation.navigate('Quality_Assurance')
  }

  Notification = () => {
    this.props.navigation.navigate('Settings_Notification')
  }
  About_Us = () => {
    this.props.navigation.navigate('About_Us')
  }

  Customer_Service = () => {
    this.props.navigation.navigate('Customer_Service')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ paddingBottom: 5 }}>



          <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings_Language')}  >
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>

              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Language</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Notification()} >
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Notification</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { this.About_Us() }}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>About_Us</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.Rateapp()}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Rate App</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Quality_Assurance()}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Quality Assurance</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => this.OnShare()}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Share App</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Customer_Service()}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Customer service</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.Logout()}>
            <View style={{ flexDirection: 'row', display: 'flex', borderBottomWidth: 1, borderBottomColor: AppTheme.APPCOLOR.BLACK, margin: 5, padding: 5, flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: 'bold', color: AppTheme.APPCOLOR.BLACK }}>Logout</Text>
              <View style={{ alignItems: 'flex-end', flex: 1 }}>
                <Image style={{ height: 25, width: 25 }} source={require('../../../assets/images/Dashboarddrawericons/settingright.png')} />
              </View>
            </View>
          </TouchableOpacity>

        </View>

        <View style={{ alignItems: 'center', bottom: 0, position: 'absolute', alignSelf: 'center' }}>
          <Text style={{ color: AppTheme.APPCOLOR.BLACK, fontWeight: 'bold', textAlign: 'center' }}>{'Version number' +
            ' ' +
            DeviceInfo.getVersion() +
            ' (' +
            DeviceInfo.getBuildNumber() +
            ')'} </Text>
        </View>
      </View>

    )
  }
}