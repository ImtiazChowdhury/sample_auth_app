import React from 'react'
import styles from "../../screen/profile/ProfileCss"
import { Image, View } from 'react-native'

function ImageCard({ imageUri }) {
    return (
        <View style={styles.imageCard}>
            <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
    )
}

export default React.memo(ImageCard)