import React, { useState, useRef } from 'react';
import { View, TextInput, Animated, StyleSheet, TouchableOpacity, Text, NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import { FormikContextType, useFormikContext } from 'formik';
import { IconSource } from 'react-native-paper/src/components/Icon';
import { Eye, EyeOff } from '../../assets/export-svg';

interface Props {
  label: string;
  iconleft?: IconSource | any;
  iconRight?: IconSource | any;
  colorLableInput?: string | any;
  colorLableOutput?: string | any;
  name: string,
  disabled?: boolean,
  // Add any other props you want to pass to the TextInput component here.
}

const WFloatingInput: React.FC<Props> = ({
  colorLableInput,
  colorLableOutput,
  name,
  iconRight,
  disabled,
  iconleft,
  label,
  ...props

}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [text, setText] = useState('');
  const animatedIsFocused = useRef(new Animated.Value(text ? 1 : 0)).current;
  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(animatedIsFocused, {
      toValue: 1,
      duration: 150,
      useNativeDriver: false,
    }).start();
  };
  const handleBlur = (vl: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    console.log(vl.target);
    // if (vl. === 0) {
    //   Animated.timing(animatedIsFocused, {
    //     toValue: 0,
    //     duration: 150,
    //     useNativeDriver: false,
    //   }).start();
    // }
  };
  const labelStyle: any = {
    position: 'absolute',
    left: iconleft ? 50 : 10,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1.2],
      outputRange: [18, 1],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),

  };
  const secureTextEntry = name === ('password');
  const secureTextEntry1 = name === ('confirmPassword');
  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View style={{ width: '100%', marginVertical: 5 }}>

      <View style={[
        styles.Default, disabled ? styles.Disable : (isFocused ? styles.Focus : {})
      ]}>
        {iconleft &&
          <TouchableOpacity style={{ width: '10%' }}>
            {iconleft}
          </TouchableOpacity>
        }

        <Animated.Text style={[labelStyle, { color: isFocused ? (colorLableInput) : (colorLableOutput) }]}>
          {label}
        </Animated.Text>
        <TextInput
          {...props}
          style={{ height: 40, fontSize: 14, flex: 1 }}
          onFocus={handleFocus}
          editable={!disabled}
          onBlur={handleBlur}
          secureTextEntry={(secureTextEntry && !showPassword) || (secureTextEntry1 && !showPassword)}
        />
        {
          // (secureTextEntry || secureTextEntry1) ? (
          //   <TouchableOpacity style={{ width: '10%' }} onPress={() => setShowPassword(!showPassword)}>
          //     {showPassword ? <Eye /> : <EyeOff />}
          //   </TouchableOpacity>
          // ) : (
          iconRight &&
          <TouchableOpacity style={{ width: '10%' }}>
            {iconRight}
          </TouchableOpacity>

          // )
        }
      </View>
      {/* {formik.touched[name] && formik.errors[name] && (
        <View style={{ marginTop: 5 }}>
          <Text>{formik.errors[name] as string}</Text>
        </View>
      )} */}
    </View>

  );
};
const styles = StyleSheet.create({
  Default: {
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#F3F3F3',
    width: '100%',
    paddingTop: 14,
    borderRadius: 8,
    paddingHorizontal: 6,
    flexDirection: 'row',
  },
  Error: {
    borderColor: '#F5222D',
  },
  Focus: {
    borderColor: '#1890FF',
  },
  Disable: {
    backgroundColor: '#D9D9D9'
  }
})
export default WFloatingInput;
