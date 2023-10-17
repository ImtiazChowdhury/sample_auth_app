import React, { useEffect } from 'react'
import { FlatList, Text, View } from 'react-native'
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { useDispatch, useSelector } from 'react-redux'
import ImageCard from '../../component/profile/ImageCard'
import { logoutUser, selectImage, selectUserDetail } from '../../store/authSlice'
import styles from "./ProfileCss"
import ProfileHeader from '../../component/profile/ProfileHeader'

function ProfileScreen({ navigation }) {
    const dispatch = useDispatch()

    //should be fetched from an API call in real environment
    const userDetail = useSelector(selectUserDetail)

    useEffect(() => {
        navigation.setOptions({ title: userDetail.username })
    }, [userDetail])

    function logout() {
        dispatch(logoutUser())
    }

    const uploadedImage = useSelector(selectImage)




    return (
        <View contentContainerStyle={styles.wrapper}>
            <View style={styles.container}>
                <FlatList
                    data={uploadedImage}
                    keyExtractor={(item, index) => item + index}
                    contentContainerStyle={styles.gallery}
                    numColumns={3}

                    renderItem={({ item }) => (
                        <ImageCard imageUri={item} />
                    )}

                    ListHeaderComponent={
                        <ProfileHeader
                            userDetail={userDetail}
                            navigation={navigation}
                            logout={logout} />
                    }

                    ListEmptyComponent={
                        <View style={styles.noImage}>
                            <MIcon name="view-gallery-outline" style={styles.noImageIcon} />
                            <Text style={styles.noImageText}>Your uploaded images will appear</Text>
                        </View>
                    }
                />

            </View>
        </View>
    )
}

export default ProfileScreen