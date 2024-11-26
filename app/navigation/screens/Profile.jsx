import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import images from '../../../constants/images'
import icons from '../../../constants/icons'
import CustomButton from '../../../components/CustomButton'


const Profile = () => {

  return (
    <View className=" p-4 mt-7 bg-[#F9F9F9] h-full w-full">
      <Text className="text-lg m-1 font-psemibold p-3">Profile</Text> 
      <View className=" flex-row p-5 mb-3 bg-cyan-800 rounded-lg w-full  shadow-sm">
        <Image source={images.profile} style={{width:70, height: 70}} className="rounded-lg mt-2 " resizeMode='contain'/>
        <View className="ml-5 mt-5 items-center">
          <Text className=" text-lg font-psemibold color-white">Salimov Radmir</Text>
          <Text className=" font-pextralight color-white">radmirsolo@gmail.com</Text>
        </View>
      </View>
      <View className="flex-col p-5 bg-white rounded-lg  w-full ">
        <Pressable className="flex-row items-center p-2" onPress={() => console.log('1')}>
          <Image source={icons.avatar} style={{width:50, height:50}} className="rounded-lg " resizeMode='contain'/>
          <Text className="ml-5 font-pregular text-base">My account</Text>
        </Pressable>
        <Pressable className="flex-row items-center p-2" onPress={() => console.log('2')}>
          <Image source={icons.avatar} style={{width:50, height:50}} className="rounded-lg" resizeMode='contain'/>
          <Text className="ml-5 font-pregular text-base">Search Up for account</Text>
        </Pressable>
        <Pressable className="flex-row items-center p-2" onPress={() => console.log('3')}>
          <Image source={icons.avatar} style={{width:50, height:50}} className="rounded-lg" resizeMode='contain'/>
          <Text className="ml-5 font-pregular text-base">Notifications</Text>
        </Pressable>
      </View>
      <CustomButton title={'Log Out'} >

      </CustomButton>
    </View>
  )
}

export default Profile