import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/Ionicons"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import styles from "./ProfileCss"

function ProfileHeader({ navigation, userDetail, logout }) {



    return (
        <>
            <View style={styles.profileRow}>
                <View style={styles.avatarContainer}>
                    <View style={styles.avatar}>
                        <Icon name="person-outline" style={styles.avatarIcon} />
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={styles.username}>{userDetail.username}</Text>
                    <View style={styles.infoRow}>
                        <MIcon name="email-outline" style={styles.infoIcon} />
                        <Text style={styles.info}>{userDetail.email}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <MIcon name="phone-outline" style={styles.infoIcon} />
                        <Text style={styles.info}>{userDetail.phone}</Text>
                    </View>
                    <View style={styles.infoRow}>
                        <MIcon name="map-marker-check-outline" style={styles.infoIcon} />
                        <Text style={styles.info}>{userDetail.address.street}, {userDetail.address.city}</Text>
                    </View>
                </View>
            </View>


            <View style={styles.buttonRow}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("UploadImage")}>
                    <MIcon name="image-multiple-outline" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Upload Images</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={logout}>
                    <MIcon name="power-standby" style={styles.buttonIcon} />
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableOpacity>
            </View>
        </>

    )
}

export default React.memo(ProfileHeader)