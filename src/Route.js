
import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Aushadhi_login from './pages/Aushadhi_login';

import Aushadhi_Register from './pages/Aushadhi_Register';
import CustomSidebarMenu from './pages/Dashboard/CustomSidebarMenu';
import SelectType from './pages/SelectType';
import Splashscreen from './pages/Splashscreen';
import Settings_Language from './pages/Dashboard/Settings/Settings_Pages/Settings_Language';
import Settings_Notification from './pages/Dashboard/Settings/Settings_Pages/Settings_Notification';



//   Dashboardscreen
import Aushadhi_Dashboard from './pages/Dashboard/Aushadhi_Dashboard';
import Near_By_Store from './pages/Dashboard/Near_By_Store';
import Search_Medicine from './pages/Dashboard/Search_Medicine';
import Feedback from './pages/Dashboard/Feedback';
import Quality_Assurance from './pages/Dashboard/Quality_Assurance';

import Useful_Links from './pages/Dashboard/Useful_Links';
import About_Us from './pages/Dashboard/Settings/Settings_Pages/About_Us';
import Settings from './pages/Dashboard/Settings/Settings';
// import Home from '../srccomponent/screen/Home';

import Customer_Service from './pages/Dashboard/Settings/Settings_Pages/Customer_Service';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();




function App() {
    return (
        <Drawer.Navigator
            drawerContent={(props) => <CustomSidebarMenu {...props} />}
            screenOptions={{
                drawerActiveBackgroundColor: '#07326c',
                drawerActiveTintColor: 'white',
                drawerLabelStyle: { marginLeft: -22 }
            }}>
            <Drawer.Screen
                name="Dashboard"
                options={{
                    title: 'Dashboard',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Dashboard.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )
                }}
                component={Aushadhi_Dashboard}
            />
            <Drawer.Screen
                name="Near_By_Store"
                options={{
                    title: 'Near By Store',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/NearbyStore.png')} />

                    ),
                    headerRight: () => (
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        </View>
                    ),
                    // headerLeft: () => (
                    //     <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    // )


                }}
                component={Near_By_Store}
            />

            {/* <Drawer.Screen
                name="Search_Medicine"
                options={{
                    title: 'Search Medicine',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Search_Medicine.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    ),
                    headerLeft: () => (
                        <Image style={{ height: 50, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/arrow_left.png')} />

                    )


                }}
                component={Search_Medicine}
            />  */}


            <Drawer.Screen
                name="Feedback"
                options={{
                    title: 'Feedback',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Feedback.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )


                }}
                component={Feedback}
            />

            {/* <Drawer.Screen
                name="Notification"
                options={{
                    title: 'Notification',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Notification.png')} />
                    )


                }}
                component={Notification}
            /> */}
            {/* <Drawer.Screen
                name="Language"
                options={{
                    title: 'Language',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Language.png')} />
                    )


                }}
                component={Language}
            /> */}

            {/* <Drawer.Screen
                name="Quality_Assurance"
                options={{
                    title: 'Quality Assurance',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 25, width: 25, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Quality_Assurance.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )


                }}
                component={Quality_Assurance}
            /> */}
            <Drawer.Screen
                name="Useful_Links"
                options={{
                    title: 'Useful_Links',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/Useful_Links.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )


                }}
                component={Useful_Links}
            />
            {/* <Drawer.Screen
                name="About_us"
                options={{
                    title: 'About_us',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/About.png')} />
                    )


                }}
                component={About_Us}
            /> */}
            <Drawer.Screen
                name="Settings"
                options={{
                    title: 'Settings',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/settings.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )


                }}
                component={Settings}
            />
            {/* <Drawer.Screen
                name="Search_Medicine"
                options={{
                    title: 'Search_Medicine',
                    drawerIcon: ({ color }) => (
                        <Image style={{ height: 24, width: 24, tintColor: color }} source={require('../src/assets/images/Dashboarddrawericons/settings.png')} />
                    ),
                    headerRight: () => (
                        <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                    )


                }}
                component={Search_Medicine}
            /> */}
        </Drawer.Navigator>


    );
}



const Routefile = () => {
    return (
        <NavigationContainer >
            <Stack.Navigator initialRouteName='Splashscreen'>

                <Stack.Screen name='Splashscreen' component={Splashscreen} options={{ headerShown: true }}></Stack.Screen>
                <Stack.Screen name='SelectType' component={SelectType} options={{ headerShown: false }}></Stack.Screen>

                <Stack.Screen name='Aushadhi_login' component={Aushadhi_login}options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name='Aushadhi_Register' component={Aushadhi_Register}></Stack.Screen>
                {/* <Stack.Screen name='Home' component={Home}></Stack.Screen> */}

                {/* //Dashboardlist item // */}
                <Stack.Screen name='Aushadhi_Dashboard' component={App} options={{
                    headerShown: false,



                }}></Stack.Screen>
                <Stack.Screen name='Settings_Language' component={Settings_Language}

                    options={{
                        title: 'Select Language',
                        headerRight: () => (
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        )

                    }}

                />
                <Stack.Screen name='Settings_Notification' component={Settings_Notification}

                    options={{
                        title: 'Notification',
                        headerRight: () => (
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        )

                    }}

                />
                <Stack.Screen name='About_Us' component={About_Us}

                    options={{
                        title: 'About Us',
                        headerRight: () => (
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        )

                    }} />

                <Stack.Screen name='Quality_Assurance' component={Quality_Assurance}

                    options={{
                        title: 'Quality Assurance',
                        headerRight: () => (
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        )

                    }} />
                <Stack.Screen name='Customer_Service' component={Customer_Service}

                    options={{
                        title: 'Customer Service',
                        headerRight: () => (
                            <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />

                        )

                    }} />



                <Stack.Screen name='Search_Medicine' component={Search_Medicine}

                    options={{
                        title: 'Search Medicine',
                        headerRight: () => (
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />
                            </View>
                        )

                    }} />

                {/* <Stack.Screen name='Near_By_Store' component={Near_By_Store}

                    options={{
                        title: 'Near By Store',
                        headerRight: () => (
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ height: 35, width: 35, alignItems: 'flex-end', right: 5, resizeMode: 'center' }} source={require('../src/assets/images/Dashboarddrawericons/ashokstambh.png')} />
                            </View>
                        )

                    }} /> */}

            </Stack.Navigator>
        </NavigationContainer>
    )
}




export default Routefile;
