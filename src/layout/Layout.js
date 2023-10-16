import { NavigationContainer } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screen/login/Login';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../store/authSlice';
import { Text, View } from 'react-native';
import ProfileScreen from '../screen/profile/Profile';

const ProfileStack = createNativeStackNavigator()
const AuthStack = createNativeStackNavigator()

function AuthStackComponent({ }) {
    return (
        <AuthStack.Navigator initialRouteName='Login'>
            <AuthStack.Screen name="Login" component={LoginScreen} options={{ title: "LOG IN" }} />
        </AuthStack.Navigator>
    )
}

function ProfileStackComponent({ }) {
    return (
        <ProfileStack.Navigator initialRouteName='Profile'>
            <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{ title: "Loading ..." }} />
        </ProfileStack.Navigator>
    )
}

function Layout({ }) {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    useEffect(()=>{console.log({isLoggedIn})}, [isLoggedIn])
    return (
        <NavigationContainer>
            {isLoggedIn ? <ProfileStackComponent /> : <AuthStackComponent />}
        </NavigationContainer>
    )
}

export default Layout