// // React Navigation Drawer with Sectioned Menu Options & Footer
// // https://aboutreact.com/navigation-drawer-sidebar-menu-with-sectioned-menu-options-footer/

// import React from 'react';
// import {SafeAreaView, View, StyleSheet, Text, Image} from 'react-native';

// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// const CustomSidebarMenu = (props) => {
//   const {state, descriptors, navigation} = props;
//   let lastGroupName = '';
//   let newGroup = true;

//   return (
//     <SafeAreaView style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         {state.routes.map((route) => {
//           const {
//             drawerLabel,
//             activeTintColor,
//             groupName
//           } = descriptors[route.key].options;
//           if (lastGroupName !== groupName) {
//             newGroup = true;
//             lastGroupName = groupName;
//           } else newGroup = false;
//           return (
//             <>
//               {newGroup ? (
//                 <View style={styles.sectionContainer}>
//                  <Image ></Image>

//                   <Text key={groupName} style={{marginLeft: 16}}>
//                     {groupName}
//                   </Text>
//                   <View style={styles.sectionLine} />
//                 </View>
//               ) : null}
//               <DrawerItem
//                 key={route.key}
//                 label={
//                   ({color}) =>
//                     <Text style={{color}}>
//                       {drawerLabel}
//                     </Text>
//                 }
//                 focused={
//                   state.routes.findIndex(
//                     (e) => e.name === route.name
//                   ) === state.index
//                 }
//                 // activeTintColor={activeTintColor}
//                 onPress={() => navigation.navigate(route.name)}
//               />
//             </>
//           );
//         })}
//       </DrawerContentScrollView>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: 'center',
//           color: 'grey'
//         }}>
//        Jan 
//       </Text>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   sectionContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   sectionLine: {
//     backgroundColor: 'gray',
//     flex: 1,
//     height: 1,
//     marginLeft: 10,
//     marginRight: 20,
//   },
// });

// export default CustomSidebarMenu;



// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/


import { DrawerContentScrollView,DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  ImageBackground,
  Dimensions,
  ScrollView,
} from 'react-native';

import DeviceInfo from 'react-native-device-info';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppTheme from '../../helper/AppTheme';

const CustomSidebarMenu     = (props,color) => {
  
  return (

<SafeAreaView style={{flex:1}}>
  <View style={{backgroundColor:AppTheme.APPCOLOR.BLUE,padding:20}}>
<Image
         source={require('../../assets/images/selectedtype.png')}
         style={styles.sideMenuProfileIcon}
     />
     <Text style={{ color:AppTheme.APPCOLOR.WHITE}}>
      kishandudhatra
     </Text>
     <Text style={{ color:AppTheme.APPCOLOR.WHITE}}>
      kishandudhatra@gmail.com
     </Text>
     </View>
 <DrawerContentScrollView {...props} >
  <ScrollView>
  <View style={{flexDirection:'column'}}>
  <DrawerItemList {...props}>
    
      </DrawerItemList>
      {/* <TouchableOpacity  onPress={()=>alert("sdfsd")}>
   <View style={{ padding:22 ,flexDirection:'row'}}>
    <Image style={{height:20,width:20,alignItems:'center',tintColor:color}} source={require('../../assets/images/Dashboarddrawericons/star.png')}/>
  <Text style={{left:10,fontWeight:'bold'}}>RateApp</Text>
  </View>
  </TouchableOpacity> */}

  </View>
  </ScrollView>
 </DrawerContentScrollView>
 <View style={{paddingHorizontal:20,borderTopWidth:1,borderTopColor:'#CCC'}}> 
 {/* <TouchableOpacity  onPress={()=>alert("sdfsd")}>
   <View style={{ paddingVertical:20 ,flexDirection:'row'}}>
    <Image style={{height:20,width:20,alignItems:'center'}} source={require('../../assets/images/Dashboarddrawericons/sharing.png')}/>
  <Text style={{left:10,fontWeight:'bold'}}>Share App</Text>
  </View>
  </TouchableOpacity> */}
  {/* <TouchableOpacity  onPress={()=>alert("sdfsd")}>
   <View style={{ paddingVertical:20 ,flexDirection:'row'}}>
    <Image style={{height:20,width:20,alignItems:'center'}} source={require('../../assets/images/Dashboarddrawericons/logout.png')}/>
  <Text style={{left:10,fontWeight:'bold'}}>Logout</Text>
  </View>
  </TouchableOpacity>
   */}
  </View>


 <View style={{alignItems:'center'}}>
  <Text style={{color:AppTheme.APPCOLOR.BLACK,fontWeight:'bold'}}>{  'Version number' +
                    ' ' +
                    DeviceInfo.getVersion() +
                    ' (' +
                    DeviceInfo.getBuildNumber() +
                    ')'} </Text>
 </View>
 </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 80,
    height: 80,
   marginBottom:5,
    borderRadius: 80 / 2,
    alignSelf: 'flex-start',
    borderWidth:1,
    borderColor:'white'
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CustomSidebarMenu;
// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
 
// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   StyleSheet,
//   Image,
//   Text,
//   Linking,
// } from 'react-native';
 
// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerItem,
// } from '@react-navigation/drawer';
 
// const CustomSidebarMenu = (props) => {
//   const BASE_PATH =
//     'https://raw.githubusercontent.com/AboutReact/sampleresource/master/';
//   const proileImage = 'react_logo.png';
 
//   return (
//     <SafeAreaView style={{flex: 1}}>
//       {/*Top Large Image */}
//       <Image
//         source={{uri: BASE_PATH + proileImage}}
//         style={styles.sideMenuProfileIcon}
//       />
//       {/* <DrawerContentScrollView {...props}>
//         <DrawerItemList {...props} />
//         <DrawerItem
//           label="Visit Us"
//           onPress={() => Linking.openURL('https://aboutreact.com/')}
//         />
//         <View style={styles.customItem}>
//           <Text
//             onPress={() => {
//               Linking.openURL('https://aboutreact.com/');
//             }}>
//             Rate Us
//           </Text>
//           <Image
//             source={{uri: BASE_PATH + 'star_filled.png'}}
//             style={styles.iconStyle}
//           />
//         </View>
//       </DrawerContentScrollView>
//       <Text
//         style={{
//           fontSize: 16,
//           textAlign: 'center',
//           color: 'grey'
//         }}>
//         www.aboutreact.com
//       </Text> */}
//     </SafeAreaView>
//   );
// };
 
// const styles = StyleSheet.create({
//   sideMenuProfileIcon: {
//     resizeMode: 'center',
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//     backgroundColor:'red'
//   },
//   iconStyle: {
//     width: 15,
//     height: 15,
//     marginHorizontal: 5,
//   },
//   customItem: {
//     padding: 16,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
// });
 
// export default CustomSidebarMenu;
