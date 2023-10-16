import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { selectUserDetail } from '../../store/authSlice'

function ProfileScreen({navigation, route}) {

    //should be fetched from an API call in real environment
    const userDetail = useSelector(selectUserDetail)

    useEffect(()=>{
        navigation.setOptions({title: userDetail.username})
    }, [userDetail])

    
  return (
    <View><Text>Profile</Text></View>
  )
}

export default ProfileScreen