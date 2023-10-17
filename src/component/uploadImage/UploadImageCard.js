import React from 'react'
import styles from "./UploadImageCss"
import { Image, Text, TouchableOpacity, View } from 'react-native'

function UploadImageCard({ asset, toggleSelection, selectedAssets }) {
    return (
        <TouchableOpacity
            style={styles.assetCard}
            onPress={() => toggleSelection(asset.uri)}
            activeOpacity={0.6}
        >
            {selectedAssets.indexOf(asset.uri) > -1 &&
                <View style={styles.checkBox}>
                    <Text style={styles.checkMark}>{selectedAssets.indexOf(asset.uri) + 1}</Text>
                </View>
            }
            <Image
                source={{ uri: asset.uri }}
                style={styles.asset}
            />

        </TouchableOpacity>
    )
}

export default React.memo(UploadImageCard)