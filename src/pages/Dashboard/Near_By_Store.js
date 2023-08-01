import { FlatList, Text, View, Linking } from 'react-native'
import React, { Component } from 'react'
import NearbyCustom_View from './CustomView/NearbyCustom_View';
export default class Near_By_Store extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Medicine_list: [
        {
          id: 1,
          name: 'Jan Aushadhi Kendra',
          km: '2km',
          address: 'Subhanpura Vadodara Gujarat,India pincode:390023',

          uri: 'https://content.jdmagicbox.com/comp/vadodara/b1/0265px265.x265.180604161559.t8b1/catalogue/pradhan-mantri-bhartiya-janaushadhi-kendra-manjalpur-vadodara-chemists-zdib3p2yno.jpg?clr=203346'
        },
        {
          id: 2,
          name: 'Jan Aushadhi Store',
          km: '5km',
          address: 'Shree Bhakti Tenaments, 23,near ICAI Bhavan, Vadodara, Gujarat 390012',
          uri: 'https://feeds.abplive.com/onecms/images/uploaded-images/2022/04/24/e6a5cc6508a6fe34eb6750ebba58d1bc_original.jpg?impolicy=abp_images&imwidth=720'
        },
        {
          id: 3,
          name: 'Pradhanmantri Jan Aushadhi Kendra',
          km: '6km',
          address: '6th Cross Road, Srirampuram, Bangalore - 560021, Near By Srirampura Police Station ',
          uri: 'https://content3.jdmagicbox.com/comp/bangalore/k1/080pxx80.xx80.180521140141.y6k1/catalogue/jan-aushadhi-store-srirampuram-bangalore-chemists-jou5wnxme8.jpg?clr=2e2e38'
        },



      ]
    }

  }


  Shop_Call_Here = (number) => {
    let phoneNumber = '';
    if (Platform.OS === 'android') { phoneNumber = `tel:${number}`; }
    else { phoneNumber = `telprompt:${number}`; }
    Linking.openURL(phoneNumber);
  }

 
    openMaps = (latitude, longitude) => {
      const daddr = `${latitude},${longitude}`;
      const company = Platform.OS === "ios" ? "apple" : "google";
      Linking.openURL(`http://maps.${company}.com/maps?daddr=${daddr}`);
    }
 
  render() {
    const NearbyCustom_View_Render_Item = ({ item }) => {
      return (
        <NearbyCustom_View

          item={item}
          callpress={() => this.Shop_Call_Here(7359866462)}
          GetDirectiononpress={() =>this.openMaps()}
        />
      )
    }
    return (
      <View>
        <FlatList
          data={this.state.Medicine_list}
          renderItem={NearbyCustom_View_Render_Item}

        />
      </View>
    )
  }
}