import {useState}from 'react'
import { View , ScrollView,SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import{COLORS ,images,icons, SIZES} from '../constants';

import
 {Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome} from '../components';

const Home =() =>{
    const router= useRouter();
    return(
    <SafeAreaView style={{flex:1 , backgroundColor: COLORS.lightWhite }}>
       <Stack.Screen
       options={{
        headerStyle:{backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft:() =>(
            <ScreenHeaderBtn iconUrL={icons.menu} dimension="60%"/>
        ),
        headerRight:() =>(
            <ScreenHeaderBtn iconUrL={images.profile} dimension="100%"/>
        ),
        headerTitle:""
       }}
       
       />
       <ScrollView ShowsVerticalScrolIndicator={false}>
       <View
        style={{
            flex: 1,
            padding: SIZES.medium
        }}
        >
            <Welcome
            
            />
            
            <Popularjobs/>
            <Nearbyjobs/>
       </View>

       </ScrollView >
    </SafeAreaView>
    )
}
export default Home;