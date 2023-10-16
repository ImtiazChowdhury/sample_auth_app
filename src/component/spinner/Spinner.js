import React from 'react'
import styles from "./SpinnerCss"
import { Image, View } from 'react-native'

function Spinner() {
    return (
        <View style={styles.container}>
            <View style={styles.gifBox}>
                <Image source={require("../../../assets/loader.gif")} style={styles.gif} />
            </View>
        </View>
    )
}

export default Spinner