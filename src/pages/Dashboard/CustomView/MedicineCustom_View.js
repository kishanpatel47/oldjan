import { View, Text, Image } from 'react-native'
import React from 'react'
import AppTheme from '../../../helper/AppTheme';
const MedicineCustom_View = ({ item, uri }) => {
    return (
        <View >
            <View style={{  flexDirection: 'row', borderColor: AppTheme.APPCOLOR.GREY, borderRadius: 10, borderWidth: 1, }}>
                <Image style={{ height: 120, width: 130 }} source={{ uri: item.uri }} />
                <View style={{ flex: 1, backgroundColor: AppTheme.APPCOLOR.WHITE ,alignContent:'center'}}>
                    <View style={{  marginLeft:10 }}>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK ,marginLeft:3}}> { "Name :-"+item.name}</Text>
                        <Text style={{ color: AppTheme.APPCOLOR.BLACK, marginLeft:9}}>{ "Price:-"+item.price}</Text>
                    </View>
                </View>
                {/* <View style={{ flex: 1 }}>
                    <Image style={{ alignSelf: 'flex-end' }} source={require('../../../assets/images/Dashboarddrawericons/right-direction.png')}></Image>
                </View> */}

            </View>


        </View>
    )
}

export default MedicineCustom_View