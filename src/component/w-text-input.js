import * as React from 'react'
import {StyleSheet, Text, View, TextInput} from 'react-native'

export default function WTextFormField ({
  label,
  iconRight,
  iconLeft,
  secureText,
  style,
  placeholder,
  onChange,
  value,
  defaultValue,
  focusColor = '#366ae2',
}) {
  const refInput = React.useRef(null)
  const {fontFamily, fontWeight, fontSize, lineHeight, color} = style
  const inputStyle = {
    fontFamily: fontFamily,
    fontWeight: fontWeight,
    fontSize: fontSize,
    lineHeight: lineHeight,
    color: color,
  }
  const [focused, setFocused] = React.useState(false)

  const handlePlaceHolder = React.useMemo(() => {
    if (focused || !(label?.length > 0)) return placeholder
    else return ''
  }, [focused, placeholder, label])

  React.useEffect(() => {}, [label, placeholder])

  React.useEffect(() => {
    delete style.fontFamily
    delete style.fontWeight
    delete style.fontSize
    delete style.lineHeight
    delete style.color
  }, [style])

  return (
    <View
      style={{
        ...style,
        ...comStyle.container,
        ...(focused ? {borderColor: focusColor} : {}),
      }}>
      {iconLeft}
      <View
        style={{
          flex: 1,
          flexGrow: 1,
          height: '100%',
          width: '100%',
          position: 'relative',
        }}>
        <TextInput
          ref={refInput}
          style={inputStyle}
          defaultValue={defaultValue}
          value={value}
          secureTextEntry={secureText}
          placeholder={handlePlaceHolder}
          onChange={onChange}
        />
        <Text
          style={{
            ...inputStyle,
            ...(focused ? comStyle.labelFocused : comStyle.label),
            ...(focused ? {color: focusColor} : {}),
            color: 'black',
          }}>
          Label
        </Text>
      </View>
      {iconRight}
    </View>
  )
}

const comStyle = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    // transform: [{translateY: '50%'}],
    position: 'absolute',
    top: 4,
    left: 4,
    lineHeight: 0.8,
    color: 'black',
  },
  labelFocused: {
    // transform: [{scale: 0.75, translateX: '-12.5%', translateY: '-12.5%'}],
  },
})
