import { Text, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'
import AppTheme from '../helper/AppTheme'

export default class SelectType extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View>
                        <Image style={{resizeMode:'cover',height:200,width:200}}  source={require('../assets/images/selectedtype.png')} />

                    </View>
                    <View style={{ bottom: 22, position: 'absolute' }}>
                      <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Aushadhi_login')} >
                       <View style={{alignItems:'center' ,flex:1,width:Dimensions.get('screen').width/1.2 ,backgroundColor:AppTheme.APPCOLOR.BLUE,padding:10,borderRadius:20}}>
                        <Text style={{color:AppTheme.APPCOLOR.WHITE}}> GET STARTED</Text>
                        </View>
                        </TouchableOpacity>





                    </View>

                </View>

            </View>



        )
    }
}