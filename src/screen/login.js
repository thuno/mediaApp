<script src="http://localhost:8097"></script>
import * as React from 'react'
import {StyleSheet, View} from 'react-native'
import {Eye, EyeOff, LogoSvg} from '../assets/export-svg'
import {TextInput} from 'react-native-paper'
import WTextFormField from '../component/w-text-input'
import WFloatingInput from '../component/TextInput/TextInput'
export default function LoginScreen ({navigation}) {
  const [toggle, onToggle] = React.useState(true)
  const [user, setUser] = React.useState('')
  const [password, setPassword] = React.useState('')

  React.useEffect(() => {}, [])
  return (
    <View style={style.screen}>
      <LogoSvg />
      <TextInput
        style={{width: 200}}
        label='User'
        value={user}
        onChange={vl => {
          setUser(vl)
        }}
      />
      <WFloatingInput
        style={{width: 200, borderRadius: 8, borderWidth: 1}}
        label='Password'
        // placeholder='Password'
        secureText={toggle}
        iconRight={
          toggle ? (
            <EyeOff
              width={20}
              height={20}
              fill={'black'}
              onPress={() => onToggle(!toggle)}
            />
          ) : (
            <Eye
              width={20}
              height={20}
              fill={'black'}
              onPress={() => onToggle(!toggle)}
            />
          )
        }
      />
    </View>
  )
}

const style = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
})
