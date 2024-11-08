import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React ,{ useState } from 'react'
import icons from '../constants/icons'

const FormField = ( {title, value, placeholder, handleChangeText, otherStyles, ...props } ) => {
  const [showPassword, setshowPassword] = useState(false)
  
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base font-pmedium color-slate-400" >{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-black-200 rounded-lg focus:border-secondary items-center flex-row " >
        <TextInput className="flex-1  text-white font-pmedium text-base"
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() => setshowPassword(!showPassword)} className="absolute right-4 top-4" >
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode='contain' />    
            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField
