import { View, Text, ScrollView, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import FormField from '../../components/FormField';
import CustomButton from '../../components/CustomButton';
import { Link } from "expo-router";


const SignIn = () => {
  const [form, setform] = useState({
    email: '',
    password: '',
  })
  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {
    if (!form.email || !form.password) {
      Alert.alert("Ошибка", "Заполните все поля");
      return;
    }};


  return (
    <SafeAreaView className="bg-white h-full" >
      <ScrollView>
        <View className="justify-center w-full min-h-[70vh] px-4 my-6 ">
          <Text className="text-3xl font-pbold color-slate-400">Log In</Text>
           
          <FormField
            title="Email"
            value={form.email} 
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-4"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password} 
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-4"
          />

          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex-row justify-center pt-4 gap-2" > 
            <Text className="text-base font-pmedium color-slate-400" >Don't have an account?</Text>
            <Link href="/sign-up" className="text-base color-secondary font-psemibold">Sign Up</Link>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn