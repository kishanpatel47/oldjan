import { FlatList, Text, View } from 'react-native'
import React, { Component } from 'react'
import MedicineCustom_View from './CustomView/MedicineCustom_View';
export default class Search_Medicine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Medicine_list: [
        {
          id: 1,
          name: 'Dicyclomine Table ',
          price: 100000000,
          uri:'https://www.stayhappi.com/uploads/product/main/img_16270252110.webp'
        },
        {
          id: 2,
          name: 'Flagy Tablet',
          price: 200000000,
          uri:'https://5.imimg.com/data5/SELLER/Default/2021/9/LG/NR/AV/131643987/metronidazole-tablets-500x500.jpg'
        },
        {
          id: 3,
          name: 'Duphalac Oral Solution Lemon',
          price: 300000000,
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT72rVDTygzjkimEIU75JME9yugB-eh6Pr4t8WMELuXpdtYULbd899vkqN5z4YZTCGOt5g&usqp=CAU'
        },
        {
          id: 4,
          name: 'Needle18G',
          price: 400000000,
          uri:'https://www.keelerusa.com/pub/media/catalog/product/cache/163ffabcb209a57f4bc3a08f6d9368f2/7/7/77fc813b681b9afeed2f4316c8e2869b.jpg'
        },
        {
          id: 5,
          name: 'Ecosprin 75 Tablet',
          price: 500000000,
          uri:'https://5.imimg.com/data5/SU/PW/BG/SELLER-12928269/ecosprin-75-tablet-500x500.jpg'
        },
        {
          id: 6,
          name: 'Acyclovir',
          price: 600000000,
          uri:'https://www.assetpharmacy.com/wp-content/uploads/2022/02/Aciclovir-200mg-Tablets-25-Tablets-1200x900-cropped.jpg'
        },
        {
          id: 7,
          name: 'Augmentin 625 Duo Tablet',
          price: 700000000,
          uri:'https://udaan.azureedge.net/products/dkwl2r2yyv052nllbruz.581Z'

        },
        {
          id: 8,
          name: 'Azithral 500 Tablet',
          price: 800000000,
          uri:'https://5.imimg.com/data5/PR/ET/RY/SELLER-57999077/azicip-azithromycin-tablets-ip-500x500.jpg'
        },

        {
          id: 9,
          name: 'Ascoril LS Syrup',
          price: 900000000,
          uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8IZb4pqrC-7jGIoFcVQP9gqyPoHufUnzpZRpFDahfqPJDKagyIdGayE10tHprUlhskiA&usqp=CAU'
        },
        {
          id: 10,
          name: 'Allegra 120mg Tablet',
          price: 1000000000,
          uri:'https://davai24.com/wp-content/uploads/2021/05/Allegra-120mg-Tablet-10-SA.jpg'

        },
        {
          id: 11,
          name: 'Avil 25 Tablet',
          price: 1000000000,
          uri:'https://5.imimg.com/data5/SELLER/Default/2021/6/WG/XO/GA/40528257/pheniramine-maleate-tablets-500x500.jpg'

        },
        {
          id: 12,
          name: 'Amoxyclav 625 Tablet',
          price: 1000000000,
          uri:'https://24hourcare.in/wp-content/uploads/2021/06/Amoxyclav_625_Tablet.jpg'
        },
        {
          id: 13,
          name: 'Betnovate-C Cream',
          price:1000000000,
          uri:'https://5.imimg.com/data5/PD/CG/MY-25404749/betnovate-c-rs-29-500x500.jpg'
        },
        {
          id: 14,
          name: 'Bandy-Plus Chewable Tablet',
          price:1000000000,
          uri:'https://magicpills.in/wp-content/uploads/2021/08/BAND0016_L.jpg'
        },
        {
          id: 15,
          name: 'Chymoral Forte Tablet',
          price:1000000000,
          uri:'https://5.imimg.com/data5/DX/SA/UJ/SELLER-80016997/chymoral-forte-tablet-500x500.jpg'
        }
        ,
        {
          id: 16,
          name: 'Clavam 625 Tablet',
          price:1000000000,
          uri:'https://onemg.gumlet.io/image/upload/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/v1537450868/dx8kv8xxgt9kfnwooo1v.jpg'
        },
        {
          id: 17,
          name: 'Dicyclomine Table IP 10mg',
          price:1000000000,
          uri:'https://5.imimg.com/data5/EB/SR/FJ/SELLER-80116980/mefenamic-acid-and-dicyclomine-hcl-tablet-ip-500x500.jpg'
        },
        {
          id: 18,
          name: 'Janumet 50mg/500mg Tablet',
          price:1000000000,
          uri:'https://5.imimg.com/data5/ZG/OP/DF/SELLER-24845096/janumet-50-500-tablet-500x500.jpg'
        },
        {
          id: 19,
          name: 'Betadine 10% Ointment',
          price:1000000000,
          uri:'https://5.imimg.com/data5/SELLER/Default/2021/2/WS/UM/FR/123311649/betadine-ointment-500x500.jpg'
        },
        {
          id: 20,
          name:'Cypon Syrup',
          price:1000000000,
          uri:'https://www.practostatic.com/practopedia-images/v3/res-750/cypon-syrup-200ml_027e3134-2595-4498-aa78-d62fc0926b94.JPG'

        },
        {
          id: 21,
          name:'Concor 5 Tablet',
          price:1000000000,
          uri:'https://newassets.apollo247.com/pub/media/catalog/product/c/o/con0004_1.jpg'
        },
        {
          id: 22,
          name: 'Clobeta GM Cream',
          price:1000000000,
          uri:'https://www.netmeds.com/images/product-v1/600x600/840011/clobeta_gm_cream_10gm_0_1.jpg'
        },
        {
          id: 23,
          name: 'Dolo 650 Tablet',
          price:1000000000,
        uri:'https://5.imimg.com/data5/SELLER/Default/2022/1/QQ/DV/FB/105453881/paracetamol-tablets-500-mg-500x500.jpg'
        }
        ,
        {
          id: 24,
          name: 'Doxinate Tablet',
          price:1000000000,
          uri:'https://www.practostatic.com/practopedia-images/v3/res-750/doxinate-tablet-30-s_47938f9a-0e23-48b6-b9bc-8fb75c4485e8.JPG'
        }










      ]
    }

  }
  render() {
    const Medicine_list_Render_Item = ({ item }) => {
      return (
        <MedicineCustom_View item={item} />
      )
    }
    return (
      <View>
        <FlatList
          data={this.state.Medicine_list}
          renderItem={Medicine_list_Render_Item}
   
        />
      </View>
    )
  }
}