import { Dimensions, FlatList, Image, ScrollView, Text, TextInput, TouchableOpacity, View, Share } from 'react-native'
import React, { Component } from 'react'
import { SliderBox } from "react-native-image-slider-box";
import AppTheme from '../../helper/AppTheme';
export default class Aushadhi_Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

      //silderimage//
      SilderImage: [
        "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlsbHN8ZW58MHx8MHx8&w=1000&q=80",
        "https://images.theconversation.com/files/369567/original/file-20201116-23-18wlnv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop",
        "https://imgnew.outlookindia.com/public/uploads/articles/2020/4/1/rajasthans-free-medicine-scheme-secures-top-rank.jpg",
        "https://images.indianexpress.com/2016/06/medicines-l.jpg",

        "https://st.depositphotos.com/1448734/3799/i/600/depositphotos_37991947-stock-photo-pharmacy.jpg",
        "https://pharmaceutical-journal.com/wp-content/uploads/2021/01/hospital_pharmacy_shelves_ss18-927x617.png",
        "https://www.nps.org.au/assets/_750x468_crop_center-center_75_none/GettyImages-894293166.jpg",
      ]

      //Product Display data

    }
  }


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
  About_Us = () => {
    this.props.navigation.navigate('About_Us')
  }
  Notification = () => {
    this.props.navigation.navigate('Settings_Notification')
  }
  Quality_Assurance = () => {
    this.props.navigation.navigate('Quality_Assurance')
  }
  Search_Medicine = () => {
    this.props.navigation.navigate('Search_Medicine')
  }
  Near_By_Store =()=>{
    this.props.navigation.navigate('Near_By_Store')
  }
  render() {

    return (
      <View style={{ flex: 1 }}>
        {/* <View style={{ margin: 10, top: 2, display: 'flex', alignSelf: 'center', width: '95%', borderWidth: 1, flexDirection: 'row', borderColor: AppTheme.APPCOLOR.Wedgewood, borderRadius: 4 }}>
          <Image style={{ left: 5, justifyContent: 'center', height: 24, width: 24, alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood }} source={require('../../assets/images/Dashboarddrawericons/Search_Medicine.png')} />
          <TextInput style={{ left: 5, fontWeight: 'bold', flex: 1, height: 40, color: AppTheme.APPCOLOR.Wedgewood }} placeholder='Search for Medicines' placeholderTextColor={AppTheme.APPCOLOR.Wedgewood} />
        </View> */}
        <View>
        </View>
        <SliderBox
          circleLoop
          autoplay
          images={this.state.SilderImage}
          sliderBoxHeight={200}
          dotColor={AppTheme.APPCOLOR.Wedgewood}
          inactiveDotColor={AppTheme.APPCOLOR.WHITE}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(117, 248, 161, 0.92)",
            //  setInterval:1000  
          }}

        />


        <View>
          <View style={{ flexDirection: 'column' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: 10 }}>
              <TouchableOpacity onPress={()=>this.Search_Medicine()}>
                <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, padding: 17, borderRadius: 10 }}>
                  <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/Search_Medicine.png')} />
                  <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>SEARCH MEDICINE</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=>this.Near_By_Store()} >
              <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, padding: 17, borderRadius: 10 }}>
                <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/NearbyStore.png')} />
                <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>NEAR BY STORE</Text>
              </View>
              </TouchableOpacity>
            </View>




            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: 20 }}>
              <TouchableOpacity onPress={() => this.Quality_Assurance()}>
                <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, alignSelf: 'center', padding: 17, borderRadius: 10 }}>
                  <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/Quality_Assurance.png')} />
                  <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>QUALITY ASSURANCE </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.Notification()}>
                <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, padding: 17, borderRadius: 10 }}>
                  <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/Notification.png')} />
                  <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>Notification</Text>
                </View>
              </TouchableOpacity>
            </View>




            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', top: 30 }}>
              <TouchableOpacity onPress={() => this.OnShare()}>
                <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, padding: 17, borderRadius: 10 }}>
                  <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/sharing.png')} />
                  <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>SHARE APP</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.About_Us()}>

                <View style={{ width: Dimensions.get('screen').width / 2.2 - 1, borderWidth: 1, borderColor: AppTheme.APPCOLOR.Wedgewood, padding: 17, borderRadius: 10 }}>
                  <Image style={{ alignSelf: 'center', tintColor: AppTheme.APPCOLOR.Wedgewood, height: 35, width: 35 }} source={require('../../assets/images/Dashboarddrawericons/About.png')} />
                  <Text style={{ textAlign: 'center', alignItems: 'center', alignSelf: 'center', top: 5, color: AppTheme.APPCOLOR.Wedgewood }}>ABOUT</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </View>




      </View>
    )
  }
}