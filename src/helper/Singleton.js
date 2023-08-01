import { Platform, PermissionsAndroid, } from 'react-native';
import Geolocation from '@react-native-community/geolocation';


export default class Singleton {
    static myInstance = null;
    UserCurrentLatitude = 0.0;
    UserCurrentLongitude = 0.0;
    /**
      * @returns {Singleton}
      */
    static getInstance() {
        if (Singleton.myInstance == null) {
            // console.warn('Create new instance');
            Singleton.myInstance = new Singleton();
        }

        return this.myInstance;
    }
requestLocationPermission = async () => {
        if (Platform.OS === 'ios') {
          getOneTimeLocation();
          subscribeLocationLocation();
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                title: 'Location Access Required',
                message: 'This App needs to Access your location',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              //To Check, If Permission is granted
             this.getOneTimeLocation();
             
            this. subscribeLocationLocation();
            } else {
              alert('Permission Denied');
            }
          } catch (err) {
            console.warn(err);
          }
        }
      };

    // GetCurrentPosition = () => {
    //      Geolocation.getCurrentPosition(
    //         (position) => {
    //             alert(position)
    //             this.UserCurrentLatitude = position.coords.latitude;
                
    //             this.UserCurrentLongitude = position.coords.longitude;
    //             console.log('UserCurrentLatitude' + position);
    //         },
    //         (error) => {
    //             // See error code charts below.
    //             console.log(error.code, error.message);
    //         },
    //         { enableHighAccuracy: true,  maximumAge: 1000}
    //     );
    // }

    getOneTimeLocation = () => {
        // alert('Getting Location ...');d
         Geolocation.getCurrentPosition(
           (position) => {
              this.UserCurrentLongitude= 
               JSON.stringify(position.coords.longitude);
          this.UserCurrentLatitude = 
               JSON.stringify(position.coords.latitude);
            console.log(  this.UserCurrentLongitude)
            console.log(  this.UserCurrentLatitude)
             //Setting Longitude state
           },
           (error) => {
             console.log(error.message);
           },
           {
             enableHighAccuracy: false,
             timeout: 30000,
             maximumAge: 1000
           },
         );
       };

    subscribeLocationLocation =()=>{
        Geolocation.watchPosition((position) =>
        {
            console.log(position)
        },
        (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
        },
        { enableHighAccuracy: false, maximumAge: 10000 }

        )
    }
 
}
