import react from 'react'

import { TouchableOpacity, Image } from 'react-native'



import styles from './screenheader.style'


const ScreenHeaderBtn = ({iconUrL, dimension, handlepress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlepress}>
     <Image
     source={iconUrL}
     resizeMode="cover"
     style={styles.btnImg(dimension)}
     />
    </TouchableOpacity>
  )
}

export default ScreenHeaderBtn