import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../components/FormField'
import { useState } from 'react'


const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className="bg-primary h-full" >
      <ScrollView>
        <View className="justify-center w-full h-full px-4 my-6 items-center ">
          <Text className="text-3xl font-pbold color-slate-400 ">SignIn</Text>
          <FormField
            title="Email"
            value={form.email} 
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
           />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn