import {useState} from 'react'
import { View,TouchableOpacity,TextInput,FlatList,Image, Text } from 'react-native'
import { Router, useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
const jobTypes = ["Full-time", "part-time" , "Contractor"];

const Welcome = () => {
  const router = useRouter();
  const [activejobType , setActivejobType]= useState('Full-Time')
  return (
    <View>
     <View style={styles.container}>
      <Text style={styles.userName}>Hello Talha</Text>
      <Text style={styles.welcomeMessage}>Find Your perfect job</Text>
     </View>
     <View style={styles.searchContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
        style={styles.searchInput}
        value=""
        onChange={() =>{}}
        placeholder="what are you looking for?" 
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={() =>{}}>
       <Image
       source={icons.search}
       resizeMode="contain"
       style={styles.searchBtnImage}
       />
      </TouchableOpacity>
     </View>
     <View style={styles.container} >
      <FlatList
      data= {jobTypes}
      renderItem={({item})=>(
          <TouchableOpacity
          style={styles.tab(activejobType, item)}
          onPress={() =>{
            setActivejobType(item);
            router.push('/search/${item}')
          }}
          >
          <Text style={styles.tabText(activejobType,item)}>{item}
          </Text>
          </TouchableOpacity>
      )}
      keyExtractor={item=> item}
      contentContainerStyle={{columnGap: SIZES.small}}
      horizontal
      
      />

     </View>
    </View>
  )
}

export default Welcome