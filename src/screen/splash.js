import {useEffect} from 'react'
import {View} from 'react-native'
import {SplashImg} from '../assets/export-svg'
export default function SplashScreen ({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login')
    }, 1000)
  }, [])

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <SplashImg width='100%' height='100%' />
    </View>
  )
}
