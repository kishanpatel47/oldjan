import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import AppTheme from '../../../helper/AppTheme';
const NearbyCustom_View = ({ item, callpress,GetDirectiononpress}) => {
    return (
        <View >
            <View style={{ flexDirection: 'row', borderColor: AppTheme.APPCOLOR.GREY, borderRadius: 10, borderWidth: 1, margin: 2 ,marginBottom:10}}>
                <Image style={{ width: 130 }} source={{ uri: item.uri }} />
                <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.WHITE, alignContent: 'center' }}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft: 9, marginVertical: 2 }}> {item.name}</Text>
                        <View style={{ flexDirection: 'row', marginVertical: 5, marginLeft: 10 }} >
                            <Image style={{ width: 18, height: 18 }} source={require('../../../assets/images/Dashboarddrawericons/location.png')} />
                            <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginHorizontal: 5 }}>{item.km}</Text>
                        </View>
                        <Text style={{ color: AppTheme.APPCOLOR.WHITE, marginLeft: 9, backgroundColor: AppTheme.APPCOLOR.Wedgewood, padding: 5, borderRadius: 5 }}>{item.address}</Text>
                        <View style={{ flexDirection: 'row',  justifyContent: 'space-around',marginBottom:5,marginTop:5 }}>
                            <TouchableOpacity onPress={GetDirectiononpress}>
                            <View style={{ flexDirection: 'row', backgroundColor: AppTheme.APPCOLOR.BLUE, marginVertical: 2, borderRadius: 4 }}>
                                <Image style={{ alignSelf: 'center', height: 17, width: 17,tintColor:AppTheme.APPCOLOR.WHITE}} source={require('../../../assets/images/Dashboarddrawericons/gps.png')} />
                                <Text style={{ padding: 5,color: AppTheme.APPCOLOR.WHITE ,alignSelf:'center'}}>Get Direction</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={callpress}>
                            <View style={{padding:5 ,flexDirection: 'row', backgroundColor: AppTheme.APPCOLOR.SUCCESS, marginVertical: 2, borderRadius: 5 }}>
                                <Image style={{ tintColor:AppTheme.APPCOLOR.WHITE,alignSelf: 'center', height: 17, width: 17, marginLeft: 5 }} source={require('../../../assets/images/Dashboarddrawericons/telephone.png')} />
                               <Text style={{marginHorizontal:20,alignSelf:'center',color:AppTheme.APPCOLOR.WHITE}}>Call</Text>
                            </View>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
                {/* <View style={{ flex: 1 }}>
                    <Image style={{ alignSelf: 'flex-end' }} source={require('../../../assets/images/Dashboarddrawericons/right-direction.png')}></Image>
                </View> */}

            </View>


        </View>
    )
}

export default NearbyCustom_View