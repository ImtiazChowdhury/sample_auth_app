import React, { useEffect, useState } from 'react'
import styles from "../../screen/profile/ProfileCss"
import { Image, View } from 'react-native'

function ImageCard({ imageUri }) {

    const [src, setSrc] = useState(null)

    return (
        <View style={styles.imageCard}>
            <Image source={{ uri: imageUri }} style={styles.image} />
        </View>
    )
}

export default React.memo(ImageCard)